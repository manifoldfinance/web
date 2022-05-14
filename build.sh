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
yarn install --preferr-offline
export NODE_ENV=production
npx next build
touch .next/server/pages/artifact.json
node scripts/mk.js

