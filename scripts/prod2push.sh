#!/bin/bash
set -e

echo "🔧 Building project..."
npm run build

echo "📦 Ensuring .next is tracked..."
git add .next -f

echo "📌 Adding other changes..."
git add .

echo "📝 Committing..."
git commit -m "prod build: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Production push complete"
