/**
 * 21st.dev Smart Scraper
 *
 * Features:
 * - Batch processing (run over multiple days)
 * - Resume capability (picks up where it left off)
 * - Rate limiting (respectful delays)
 * - Progress tracking
 * - Error recovery
 * - Organized output
 *
 * Usage:
 * - Top 50: npm run scrape -- --limit 50
 * - Full 1000: npm run scrape -- --limit 1000 --batch-size 100
 * - Resume: npm run scrape -- --resume
 */

import { chromium, Browser, Page } from 'playwright'
import fs from 'fs'
import path from 'path'

interface ComponentInfo {
  url: string
  slug: string
  author: string
  name: string
  description?: string
  category?: string
  downloaded: boolean
  error?: string
}

interface ScraperConfig {
  limit: number           // Total components to download
  batchSize: number      // Components per session
  delayMs: number        // Delay between requests (ms)
  outputDir: string      // Where to save components
  checkpointFile: string // Progress tracking file
  resumeMode: boolean    // Resume from checkpoint
}

interface Checkpoint {
  totalFound: number
  downloaded: number
  failed: number
  components: ComponentInfo[]
  lastRunDate: string
  nextStartIndex: number
}

class TwentyFirstDevScraper {
  private browser: Browser | null = null
  private page: Page | null = null
  private config: ScraperConfig
  private checkpoint: Checkpoint

  constructor(config: Partial<ScraperConfig> = {}) {
    this.config = {
      limit: config.limit || 50,
      batchSize: config.batchSize || 50,
      delayMs: config.delayMs || 3000,
      outputDir: config.outputDir || './21st-dev-components',
      checkpointFile: config.checkpointFile || './scraper-checkpoint.json',
      resumeMode: config.resumeMode || false,
    }

    this.checkpoint = this.loadCheckpoint()
  }

  private loadCheckpoint(): Checkpoint {
    if (this.config.resumeMode && fs.existsSync(this.config.checkpointFile)) {
      console.log('📂 Loading checkpoint...')
      const data = fs.readFileSync(this.config.checkpointFile, 'utf-8')
      return JSON.parse(data)
    }

    return {
      totalFound: 0,
      downloaded: 0,
      failed: 0,
      components: [],
      lastRunDate: new Date().toISOString(),
      nextStartIndex: 0,
    }
  }

  private saveCheckpoint() {
    fs.writeFileSync(
      this.config.checkpointFile,
      JSON.stringify(this.checkpoint, null, 2)
    )
    console.log(`💾 Checkpoint saved: ${this.checkpoint.downloaded} downloaded, ${this.checkpoint.failed} failed`)
  }

  async initialize() {
    console.log('🚀 Initializing browser...')
    this.browser = await chromium.launch({ headless: true })
    this.page = await this.browser.newPage()

    // Create output directories
    fs.mkdirSync(this.config.outputDir, { recursive: true })
    fs.mkdirSync(path.join(this.config.outputDir, 'by-category'), { recursive: true })
    fs.mkdirSync(path.join(this.config.outputDir, 'by-author'), { recursive: true })
  }

  async getComponentList(): Promise<ComponentInfo[]> {
    if (!this.page) throw new Error('Browser not initialized')

    console.log('📋 Fetching component list from 21st.dev...')

    // Go to components page instead of homepage
    await this.page.goto('https://21st.dev/community/components', {
      waitUntil: 'networkidle',
      timeout: 60000
    })

    // Wait for components to load
    await this.page.waitForTimeout(3000)

    // Get all component links using correct selector
    const components = await this.page.$$eval('a[href*="/community/components/"]', (links) => {
      return links.map((link) => {
        const href = link.getAttribute('href') || ''
        // Format: /community/components/author/component-slug/default
        const parts = href.split('/community/components/')[1]?.split('/') || []
        const author = parts[0] || ''
        const slug = parts[1] || ''

        return {
          url: `https://21st.dev${href}`,
          slug: slug,
          author: author,
          name: link.textContent?.trim() || slug,
          description: link.getAttribute('title') || undefined,
          category: undefined,
          downloaded: false,
        }
      }).filter(c => c.slug && c.author && c.slug !== 'components')
    })

    // Remove duplicates
    const unique = Array.from(
      new Map(components.map(c => [`${c.author}/${c.slug}`, c])).values()
    )

    console.log(`✅ Found ${unique.length} unique components`)
    return unique
  }

  async downloadComponent(component: ComponentInfo): Promise<boolean> {
    if (!this.page) throw new Error('Browser not initialized')

    try {
      console.log(`📥 Downloading: ${component.author}/${component.slug}`)

      await this.page.goto(component.url, {
        waitUntil: 'networkidle',
        timeout: 30000
      })

      // Wait for code block to load
      await this.page.waitForSelector('pre code, [data-code], .code-block', {
        timeout: 10000
      })

      // Extract component code (try multiple selectors)
      const code = await this.page.evaluate(() => {
        // Try different selectors
        const selectors = [
          'pre code',
          '[data-code]',
          '.code-block',
          'code.language-tsx',
          'code.language-typescript',
        ]

        for (const selector of selectors) {
          const element = document.querySelector(selector)
          if (element?.textContent) {
            return element.textContent
          }
        }

        return null
      })

      if (!code) {
        throw new Error('Could not extract code from page')
      }

      // Extract dependencies (if available)
      const dependencies = await this.page.evaluate(() => {
        const depSection = document.querySelector('[data-dependencies]')
        return depSection?.textContent || ''
      }).catch(() => '')

      // Save component
      const componentDir = path.join(
        this.config.outputDir,
        'by-author',
        component.author
      )
      fs.mkdirSync(componentDir, { recursive: true })

      const filePath = path.join(componentDir, `${component.slug}.tsx`)
      fs.writeFileSync(filePath, code)

      // Save metadata
      const metaPath = path.join(componentDir, `${component.slug}.json`)
      fs.writeFileSync(
        metaPath,
        JSON.stringify({
          ...component,
          dependencies,
          downloadedAt: new Date().toISOString()
        }, null, 2)
      )

      console.log(`✅ Saved: ${component.author}/${component.slug}`)
      return true

    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error)
      console.log(`❌ Failed: ${component.author}/${component.slug} - ${errorMsg}`)
      component.error = errorMsg
      return false
    }
  }

  async scrape() {
    await this.initialize()

    // Get component list
    let components: ComponentInfo[]

    if (this.config.resumeMode && this.checkpoint.components.length > 0) {
      console.log('▶️  Resuming from checkpoint...')
      components = this.checkpoint.components
    } else {
      components = await this.getComponentList()
      this.checkpoint.totalFound = components.length
      this.checkpoint.components = components
      this.saveCheckpoint()
    }

    // Filter already downloaded
    const pending = components.filter(c => !c.downloaded)
    const toDownload = pending.slice(0, this.config.limit - this.checkpoint.downloaded)

    console.log(`\n📊 Status:`)
    console.log(`   Total found: ${components.length}`)
    console.log(`   Already downloaded: ${this.checkpoint.downloaded}`)
    console.log(`   To download this session: ${toDownload.length}`)
    console.log(`   Remaining: ${pending.length - toDownload.length}`)

    // Download in batches
    let sessionDownloaded = 0
    let sessionFailed = 0

    for (let i = 0; i < toDownload.length; i++) {
      const component = toDownload[i]

      const success = await this.downloadComponent(component)

      if (success) {
        component.downloaded = true
        sessionDownloaded++
        this.checkpoint.downloaded++
      } else {
        sessionFailed++
        this.checkpoint.failed++
      }

      // Save progress every 10 components
      if ((i + 1) % 10 === 0) {
        this.saveCheckpoint()
        console.log(`\n💾 Progress: ${sessionDownloaded}/${toDownload.length} downloaded\n`)
      }

      // Respectful delay
      if (i < toDownload.length - 1) {
        await this.page?.waitForTimeout(this.config.delayMs)
      }
    }

    // Final save
    this.saveCheckpoint()
    await this.createCatalog()

    console.log(`\n✅ Session Complete!`)
    console.log(`   Downloaded: ${sessionDownloaded}`)
    console.log(`   Failed: ${sessionFailed}`)
    console.log(`   Total downloaded: ${this.checkpoint.downloaded}/${components.length}`)

    if (this.checkpoint.downloaded < components.length) {
      console.log(`\n💡 To continue downloading, run: npm run scrape -- --resume`)
    }

    await this.browser?.close()
  }

  async createCatalog() {
    const catalog = {
      totalComponents: this.checkpoint.totalFound,
      downloaded: this.checkpoint.downloaded,
      failed: this.checkpoint.failed,
      lastUpdated: new Date().toISOString(),
      components: this.checkpoint.components.filter(c => c.downloaded),
      byAuthor: this.groupByAuthor(),
      byCategory: this.groupByCategory(),
    }

    fs.writeFileSync(
      path.join(this.config.outputDir, 'catalog.json'),
      JSON.stringify(catalog, null, 2)
    )

    // Create README
    const readme = this.generateReadme(catalog)
    fs.writeFileSync(
      path.join(this.config.outputDir, 'README.md'),
      readme
    )

    console.log('📖 Created catalog.json and README.md')
  }

  private groupByAuthor() {
    const groups: Record<string, ComponentInfo[]> = {}
    this.checkpoint.components
      .filter(c => c.downloaded)
      .forEach(c => {
        if (!groups[c.author]) groups[c.author] = []
        groups[c.author].push(c)
      })
    return groups
  }

  private groupByCategory() {
    const groups: Record<string, ComponentInfo[]> = {}
    this.checkpoint.components
      .filter(c => c.downloaded)
      .forEach(c => {
        const cat = c.category || 'uncategorized'
        if (!groups[cat]) groups[cat] = []
        groups[cat].push(c)
      })
    return groups
  }

  private generateReadme(catalog: any): string {
    return `# 21st.dev Components Collection

## 📊 Statistics

- **Total Components Found**: ${catalog.totalComponents}
- **Successfully Downloaded**: ${catalog.downloaded}
- **Failed**: ${catalog.failed}
- **Last Updated**: ${new Date(catalog.lastUpdated).toLocaleDateString()}

## 📦 Components by Author

${Object.entries(catalog.byAuthor)
  .map(([author, comps]: [string, any]) =>
    `### ${author} (${comps.length} components)\n${comps.map((c: any) => `- ${c.name}`).join('\n')}`
  ).join('\n\n')}

## 🚀 Usage

Import components from \`by-author/\` folder:
\`\`\`tsx
import Component from './by-author/username/component-name.tsx'
\`\`\`

## 📖 Component Details

See \`catalog.json\` for full component metadata including dependencies.
`
  }
}

// CLI Runner
async function main() {
  const args = process.argv.slice(2)
  const limit = parseInt(args.find(a => a.includes('--limit'))?.split('=')[1] || '50')
  const batchSize = parseInt(args.find(a => a.includes('--batch'))?.split('=')[1] || '50')
  const resume = args.includes('--resume')

  console.log(`
🎯 21st.dev Smart Scraper
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mode: ${resume ? 'RESUME' : 'NEW'}
Target: ${limit} components
Batch: ${batchSize} per session
Delay: 3 seconds between requests
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `)

  const scraper = new TwentyFirstDevScraper({
    limit,
    batchSize,
    delayMs: 3000,
    resumeMode: resume,
  })

  try {
    await scraper.scrape()
    console.log('\n✨ Success! Check ./21st-dev-components/ for results')
  } catch (error) {
    console.error('❌ Scraper failed:', error)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { TwentyFirstDevScraper }
