import { chromium } from 'playwright'

async function debugSite() {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  
  console.log('Navigating to components page...')
  await page.goto('https://21st.dev/community/components', { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(3000)
  
  // Take screenshot
  await page.screenshot({ path: 'debug-components-page.png', fullPage: true })
  
  // Try different selectors
  const tests = [
    'a[href*="/r/"]',
    'a[href*="component"]',
    '[data-component-link]',
    '.component-card a',
    'a',
  ]
  
  for (const selector of tests) {
    const count = await page.locator(selector).count()
    console.log(`"${selector}": ${count} elements`)
    
    if (count > 0 && count < 200) {
      const hrefs = await page.locator(selector).evaluateAll(links => 
        links.slice(0, 5).map(l => l.getAttribute('href'))
      )
      console.log(`  Sample links:`, hrefs)
    }
  }
  
  await browser.close()
}

debugSite()
