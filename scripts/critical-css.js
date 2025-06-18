import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist', 'public');

console.log('🎨 Inlining critical CSS...');

try {
  const indexPath = path.join(distPath, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Find CSS file
  const cssMatch = html.match(/<link rel="stylesheet" href="(\/assets\/[^"]+\.css)"/);
  if (cssMatch) {
    const cssPath = path.join(distPath, cssMatch[1]);
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8');
      
      // Extract critical CSS (first 15KB for above-the-fold content)
      const criticalCss = css.substring(0, 15000);
      
      // Replace link tag with inline style
      html = html.replace(
        cssMatch[0],
        `<style>${criticalCss}</style>\n    <link rel="preload" href="${cssMatch[1]}" as="style" onload="this.onload=null;this.rel='stylesheet'">`
      );
      
      fs.writeFileSync(indexPath, html);
      console.log('✅ Critical CSS inlined successfully');
    }
  }
} catch (error) {
  console.error('❌ Critical CSS inlining failed:', error.message);
}