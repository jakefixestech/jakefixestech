#!/bin/bash
echo "Building site..."
npx astro build

echo "Indexing search with Pagefind..."
npx pagefind --site dist

echo "Pushing to GitHub..."
git add .
git commit -m "update"
git push

echo "Done! Cloudflare will deploy shortly."