import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hostname = 'https://www.mainepestpros.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define all pages with their priorities and change frequencies - using actual route paths
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services/ant-control', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/rodent-control', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/bed-bug-exterminator', priority: '0.8', changefreq: 'monthly' },
  { url: '/portland-pest-control', priority: '0.7', changefreq: 'monthly' },
  { url: '/pest-control-augusta-me', priority: '0.7', changefreq: 'monthly' },
  { url: '/pest-control-bangor-me', priority: '0.7', changefreq: 'monthly' },
  { url: '/pest-control-lewiston-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-auburn-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-waterville-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-gardiner-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-belfast-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-brewer-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-skowhegan-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-pittsfield-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-fairfield-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-winslow-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-oakland-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-belgrade-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-benton-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-china-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-liberty-me', priority: '0.6', changefreq: 'monthly' },
  { url: '/pest-control-orono-me', priority: '0.6', changefreq: 'monthly' }
];

// Generate XML sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${hostname}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log(`✅ Sitemap generated at ${sitemapPath}`);
console.log(`📍 Contains ${pages.length} pages`);