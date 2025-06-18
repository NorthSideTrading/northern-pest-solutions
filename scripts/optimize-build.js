#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Running optimized build with critical CSS inlining...');

try {
  // Step 1: Build the application
  console.log('📦 Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 2: Run Critters to inline critical CSS
  console.log('🎨 Inlining critical CSS with Critters...');
  const distPath = path.join(__dirname, '..', 'dist', 'public');
  
  if (fs.existsSync(distPath)) {
    execSync(`npx critters ${distPath} --minify`, { stdio: 'inherit' });
    console.log('✅ Critical CSS inlined successfully');
  } else {
    console.log('⚠️  Dist directory not found, skipping critical CSS inlining');
  }

  console.log('🎉 Build optimization complete!');
  
} catch (error) {
  console.error('❌ Build optimization failed:', error.message);
  process.exit(1);
}