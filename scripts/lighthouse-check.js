#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure lighthouse directories exist
const lighthouseDirs = ['lighthouse/before', 'lighthouse/after', 'lighthouse/results'];
lighthouseDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('🔍 Running Lighthouse CI audit...');

// Run Lighthouse CI
exec('npx lhci autorun', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Lighthouse CI failed:', error);
    process.exit(1);
  }

  console.log('✅ Lighthouse audit completed');
  console.log(stdout);

  // Parse results and check if scores meet requirements
  const resultsPath = path.join(process.cwd(), 'lighthouse/results');
  if (fs.existsSync(resultsPath)) {
    const files = fs.readdirSync(resultsPath);
    const latestResult = files
      .filter(f => f.endsWith('.json'))
      .sort()
      .pop();

    if (latestResult) {
      const result = JSON.parse(fs.readFileSync(path.join(resultsPath, latestResult)));
      const scores = result.categories;
      
      console.log('\n📊 Lighthouse Scores:');
      console.log(`Performance: ${Math.round(scores.performance.score * 100)}`);
      console.log(`Accessibility: ${Math.round(scores.accessibility.score * 100)}`);
      console.log(`Best Practices: ${Math.round(scores['best-practices'].score * 100)}`);
      console.log(`SEO: ${Math.round(scores.seo.score * 100)}`);

      // Check if all scores are ≥90
      const allScoresPass = Object.values(scores).every(category => 
        category.score >= 0.9
      );

      if (!allScoresPass) {
        console.log('\n❌ Some scores are below 90. Check the full report for optimization opportunities.');
        process.exit(1);
      } else {
        console.log('\n🎉 All scores are ≥90! Performance targets met.');
      }
    }
  }
});