const https = require('https');

// Check these component names from shadcn docs
const possibleComponents = [
  // Already downloaded
  'button', 'calendar', 'card', 'form', 'input', 'select',
  // Try these
  'textarea', 'label', 'avatar', 'badge', 'skeleton', 'progress',
  'tabs', 'accordion', 'alert', 'alert-dialog', 'aspect-ratio',
  'breadcrumb', 'carousel', 'chart', 'checkbox', 'collapsible',
  'command', 'context-menu', 'data-table', 'date-picker', 'dialog',
  'drawer', 'dropdown-menu', 'hover-card', 'input-otp', 'menubar',
  'navigation-menu', 'pagination', 'popover', 'radio-group',
  'resizable', 'scroll-area', 'select', 'separator', 'sheet',
  'sidebar', 'skeleton', 'slider', 'sonner', 'switch', 'table',
  'tabs', 'textarea', 'toast', 'toaster', 'toggle', 'toggle-group',
  'tooltip',
  // Additional ones to try
  'combobox', 'multi-select', 'stepper', 'timeline', 'spinner',
  'kbd', 'code-block', 'file-upload'
];

const existing = [];
const missing = [];

Promise.all(possibleComponents.map(name => 
  new Promise(resolve => {
    https.get(`https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/registry/default/ui/${name}.tsx`, res => {
      if (res.statusCode === 200) {
        existing.push(name);
      } else {
        missing.push(name);
      }
      resolve();
    }).on('error', () => { missing.push(name); resolve(); });
  })
)).then(() => {
  console.log(`\n✓ EXISTS (${existing.length}):`);
  existing.sort().forEach(c => console.log(`  - ${c}`));
  console.log(`\n✗ NOT FOUND (${missing.length}):`);
  missing.sort().forEach(c => console.log(`  - ${c}`));
});
