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

  // Step 2: Run critical CSS inlining
  console.log('🎨 Inlining critical CSS...');
  execSync('node scripts/critical-css.js', { stdio: 'inherit' });

  console.log('🎉 Build optimization complete!');
  
} catch (error) {
  console.error('❌ Build optimization failed:', error.message);
  process.exit(1);
}