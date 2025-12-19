#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying to staging environment...');

// 1. Build the worker
console.log('📦 Building worker...');
execSync('npm run build:worker', { stdio: 'inherit' });

// 2. Temporarily rename original wrangler.toml and create staging config
if (fs.existsSync('wrangler.toml')) {
  fs.renameSync('wrangler.toml', 'wrangler-backup.toml');
}

const stagingConfig = `name = "wisegave-ai-staging"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

main = ".open-next/worker.js"
assets = {directory = ".open-next/assets", binding = "ASSETS"}
`;

fs.writeFileSync('wrangler.toml', stagingConfig);

// 3. Deploy with staging config
console.log('🌍 Deploying to staging...');
try {
  execSync('npx wrangler deploy', { stdio: 'inherit' });
  console.log('✅ Staging deployment complete!');
  console.log('📍 Your staging app should be available at: https://wisegave-ai-staging.wisegave.workers.dev');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} finally {
  // Restore original configuration
  if (fs.existsSync('wrangler.toml')) {
    fs.unlinkSync('wrangler.toml');
  }
  if (fs.existsSync('wrangler-backup.toml')) {
    fs.renameSync('wrangler-backup.toml', 'wrangler.toml');
  }
}