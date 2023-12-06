#!/usr/bin/env bash
echo "VERCEL_ENV: $VERCEL_ENV"
if [[ "$VERCEL_ENV" == "production" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
echo "Enabling Legacy OpenSSL Provider for Node 18+"
export NODE_OPTIONS=--openssl-legacy-provider

yarn install --preferr-offline
echo "Generating sitemap..."
node scripts/generate-sitemap.js
#export NODE_ENV=production
echo "Generating buildhash..."
git hash-object buildhash.txt > NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
mkdir -p .next/server/pages/
touch .next/server/pages/artifact.json
echo "Compiling output..."
npx next build
node scripts/mk.js
echo "Build process exiting without error..."
