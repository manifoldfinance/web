#!/usr/env/bin bash
echo "Checking spelling..."
cspell-cli "**/*.js" --show-context --show-suggestions
