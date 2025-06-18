import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hostname = 'https://www.mainepestpros.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define all pages with their priorities and change frequencies
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services/ant-control', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/rodent-control', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/bed-bug-exterminator', priority: '0.8', changefreq: 'monthly' },
  { url: '/cities/augusta', priority: '0.7', changefreq: 'monthly' },
  { url: '/cities/bangor', priority: '0.7', changefreq: 'monthly' },
  { url: '/cities/portland', priority: '0.7', changefreq: 'monthly' },
  { url: '/cities/lewiston', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/auburn', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/waterville', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/gardiner', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/belfast', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/brewer', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/skowhegan', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/pittsfield', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/fairfield', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/winslow', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/oakland', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/belgrade', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/benton', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/china', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/liberty', priority: '0.6', changefreq: 'monthly' },
  { url: '/cities/orono', priority: '0.6', changefreq: 'monthly' }
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