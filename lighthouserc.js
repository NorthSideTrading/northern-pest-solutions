module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:5000/',
        'http://localhost:5000/services/ants',
        'http://localhost:5000/services/bed-bugs',
        'http://localhost:5000/pest-control-augusta-me'
      ],
      startServerCommand: 'npm run dev',
      startServerReadyPattern: 'serving on port',
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['warn', { minScore: 0.8 }]
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse'
    }
  }
};