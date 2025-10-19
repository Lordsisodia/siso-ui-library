# Phase 1: Monorepo Setup Implementation Guide

**Timeline:** Week 1 (5-7 days)
**Prerequisites:** Node.js 18+, pnpm 8+
**Risk Level:** Low (building in parallel, not touching existing code)

---

## 🎯 Phase 1 Goals

1. ✅ Create monorepo structure in parallel to existing codebase
2. ✅ Set up pnpm workspaces
3. ✅ Configure build system (Vite + Tsup)
4. ✅ Set up TypeScript with project references
5. ✅ Configure testing (Vitest)
6. ✅ Verify everything builds and runs

**Success Criteria:** Can run `pnpm install && pnpm build && pnpm test` without errors

---

## 📁 Step-by-Step Implementation

### Step 1: Create Monorepo Directory Structure

```bash
# Navigate to parent directory
cd /Users/shaansisodia/DEV/PERSONAL/CLIENT-WORK/client-projects/Restraunt/

# Create new monorepo (parallel to existing SISO-UI-Library)
mkdir siso-ecosystem
cd siso-ecosystem

# Create directory structure
mkdir -p packages/ui/{primitives,patterns,themes,hooks,utils}
mkdir -p packages/restaurants/{features,ui,shared/{hooks,utils,types}}
mkdir -p packages/tour-guides/{features,ui,shared/{hooks,utils,types}}
mkdir -p packages/bike-rental/{features,ui,shared/{hooks,utils,types}}
mkdir -p packages/shared/{database,auth}
mkdir -p apps/{restaurant-demo,tour-guide-demo,bike-rental-demo}
mkdir -p docs/{imports,architecture,migration}
mkdir -p tools/{component-generator,feature-extractor,metadata-generator}
```

### Step 2: Initialize Root package.json

```bash
# In siso-ecosystem/
pnpm init
```

**Edit `package.json`:**

```json
{
  "name": "siso-ecosystem",
  "version": "1.0.0",
  "private": true,
  "description": "SISO Universal UI & Feature Library Monorepo",
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\"",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "turbo run build && changeset publish"
  },
  "devDependencies": {
    "@changesets/cli": "^2.27.1",
    "prettier": "^3.1.0",
    "turbo": "^1.11.0",
    "typescript": "^5.3.0"
  },
  "packageManager": "pnpm@8.12.0",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

### Step 3: Configure pnpm Workspace

**Create `pnpm-workspace.yaml`:**

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'tools/*'
```

### Step 4: Configure Turbo Build System

**Create `turbo.json`:**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"]
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "clean": {
      "cache": false
    }
  }
}
```

### Step 5: Set Up Root TypeScript Config

**Create `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "composite": true,
    "incremental": true
  },
  "exclude": ["node_modules", "dist", ".turbo"]
}
```

### Step 6: Set Up @siso/ui Package

**Create `packages/ui/package.json`:**

```json
{
  "name": "@siso/ui",
  "version": "1.0.0",
  "description": "Universal UI components and patterns",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./primitives": {
      "types": "./dist/primitives/index.d.ts",
      "import": "./dist/primitives/index.mjs",
      "require": "./dist/primitives/index.js"
    },
    "./primitives/*": {
      "types": "./dist/primitives/*/index.d.ts",
      "import": "./dist/primitives/*/index.mjs",
      "require": "./dist/primitives/*/index.js"
    },
    "./patterns": {
      "types": "./dist/patterns/index.d.ts",
      "import": "./dist/patterns/index.mjs",
      "require": "./dist/patterns/index.js"
    },
    "./patterns/*": {
      "types": "./dist/patterns/*/index.d.ts",
      "import": "./dist/patterns/*/index.mjs",
      "require": "./dist/patterns/*/index.js"
    },
    "./themes": {
      "types": "./dist/themes/index.d.ts",
      "import": "./dist/themes/index.mjs",
      "require": "./dist/themes/index.js"
    },
    "./hooks": {
      "types": "./dist/hooks/index.d.ts",
      "import": "./dist/hooks/index.mjs",
      "require": "./dist/hooks/index.js"
    },
    "./utils": {
      "types": "./dist/utils/index.d.ts",
      "import": "./dist/utils/index.mjs",
      "require": "./dist/utils/index.js"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf dist",
    "lint": "eslint src",
    "test": "vitest"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tsup": "^8.0.0",
    "typescript": "^5.3.0",
    "vitest": "^1.0.0"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  }
}
```

**Create `packages/ui/tsconfig.json`:**

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "exclude": ["dist", "node_modules", "**/*.test.ts", "**/*.test.tsx"]
}
```

**Create `packages/ui/tsup.config.ts`:**

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'primitives/index': 'src/primitives/index.ts',
    'patterns/index': 'src/patterns/index.ts',
    'themes/index': 'src/themes/index.ts',
    'hooks/index': 'src/hooks/index.ts',
    'utils/index': 'src/utils/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom']
})
```

**Create example components:**

```bash
# Create example Button primitive
mkdir -p packages/ui/src/primitives/button
```

**`packages/ui/src/primitives/button/button.tsx`:**

```typescript
import * as React from 'react'
import { cn } from '../../utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gray-900 text-white hover:bg-gray-800': variant === 'default',
            'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
            'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
            'hover:bg-gray-100': variant === 'ghost'
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-base': size === 'md',
            'h-12 px-6 text-lg': size === 'lg'
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
```

**`packages/ui/src/primitives/button/index.ts`:**

```typescript
export { Button, type ButtonProps } from './button'
```

**`packages/ui/src/primitives/index.ts`:**

```typescript
export * from './button'
// More primitives will be added here
```

**`packages/ui/src/utils/cn.ts`:**

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**`packages/ui/src/utils/index.ts`:**

```typescript
export { cn } from './cn'
```

**`packages/ui/src/index.ts`:**

```typescript
// Main entry point - re-export everything
export * from './primitives'
export * from './patterns'
export * from './themes'
export * from './hooks'
export * from './utils'
```

### Step 7: Set Up Domain Packages

**Create `packages/restaurants/package.json`:**

```json
{
  "name": "@siso/restaurants",
  "version": "1.0.0",
  "description": "Restaurant-specific features and components",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./features/*": {
      "types": "./dist/features/*/index.d.ts",
      "import": "./dist/features/*/index.mjs",
      "require": "./dist/features/*/index.js"
    },
    "./ui": {
      "types": "./dist/ui/index.d.ts",
      "import": "./dist/ui/index.mjs",
      "require": "./dist/ui/index.js"
    },
    "./shared/hooks": {
      "types": "./dist/shared/hooks/index.d.ts",
      "import": "./dist/shared/hooks/index.mjs",
      "require": "./dist/shared/hooks/index.js"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf dist",
    "test": "vitest"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "dependencies": {
    "@siso/ui": "workspace:*"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "react": "^18.2.0",
    "tsup": "^8.0.0",
    "typescript": "^5.3.0",
    "vitest": "^1.0.0"
  }
}
```

**Similar for `packages/tour-guides/` and `packages/bike-rental/`**

### Step 8: Install Dependencies

```bash
# In siso-ecosystem/
pnpm install
```

### Step 9: Test Build

```bash
# Build all packages
pnpm build

# Should see output like:
# @siso/ui: Build successful
# @siso/restaurants: Build successful
# @siso/tour-guides: Build successful
# @siso/bike-rental: Build successful
```

### Step 10: Set Up Testing

**Create `packages/ui/vitest.config.ts`:**

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts'
  }
})
```

**Create `packages/ui/vitest.setup.ts`:**

```typescript
import '@testing-library/jest-dom'
```

**Create example test `packages/ui/src/primitives/button/button.test.tsx`:**

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByText('Primary')
    expect(button).toHaveClass('bg-blue-600')
  })
})
```

**Run tests:**

```bash
pnpm test
```

### Step 11: Set Up Prettier

**Create `.prettierrc`:**

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

**Create `.prettierignore`:**

```
node_modules
dist
.turbo
.next
coverage
```

### Step 12: Set Up ESLint (Optional)

**Create `.eslintrc.json`:**

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### Step 13: Create README

**Create `README.md`:**

```markdown
# SISO Ecosystem Monorepo

Universal UI components and domain-specific features for restaurants, tour guides, and bike rentals.

## Packages

- `@siso/ui` - Universal UI components and patterns
- `@siso/restaurants` - Restaurant-specific features
- `@siso/tour-guides` - Tour guide platform features
- `@siso/bike-rental` - Bike rental platform features
- `@siso/shared` - Shared utilities across domains

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Format code
pnpm format
```

## Package Usage

```tsx
// Install in your project
npm install @siso/ui @siso/restaurants

// Use components
import { Button } from '@siso/ui/primitives'
import { ReservationSystem } from '@siso/restaurants/features/reservation-system'
```

## Development

This monorepo uses:
- **pnpm** for package management (workspaces)
- **Turbo** for build orchestration
- **Tsup** for package building
- **Vitest** for testing
- **TypeScript** for type safety

## Documentation

See `docs/` for detailed documentation.
```

---

## ✅ Verification Checklist

After completing all steps, verify:

- [ ] `pnpm install` completes without errors
- [ ] `pnpm build` builds all packages successfully
- [ ] `pnpm test` runs tests in all packages
- [ ] Can import from `@siso/ui` in `@siso/restaurants`
- [ ] TypeScript types work correctly
- [ ] Hot reload works in dev mode (`pnpm dev`)
- [ ] File structure matches the plan
- [ ] Git repo initialized and initial commit made

---

## 🎯 Success Output

You should see:

```bash
$ pnpm build

@siso/ui:build: Build successful. Entry: src/index.ts
@siso/ui:build: dist/index.js      2.3 KB
@siso/ui:build: dist/index.mjs     2.1 KB
@siso/ui:build: dist/index.d.ts    1.2 KB

@siso/restaurants:build: Build successful
@siso/tour-guides:build: Build successful
@siso/bike-rental:build: Build successful

 Tasks:    4 successful, 4 total
 Cached:    0 cached, 4 total
   Time:    3.4s
```

---

## 🚀 Next Steps

Once Phase 1 is complete:

1. ✅ **Commit to Git:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial monorepo setup with pnpm workspaces"
   ```

2. ✅ **Move to Phase 2:** Start extracting universal UI components from docs/imports/

3. ✅ **Create feature extraction template** (for Phases 3-5)

---

## 📝 Notes

- This builds the infrastructure WITHOUT touching existing SISO-UI-Library
- Everything is in parallel - zero risk to existing work
- Can test monorepo while keeping old structure intact
- Once validated, can migrate content in later phases

**Phase 1 Complete = Ready for Phase 2 (UI Component Extraction)**
