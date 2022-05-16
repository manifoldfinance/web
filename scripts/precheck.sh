#!/usr/bin/env bash
echo "Checking spelling..."
cspell-cli "**/*.js" --show-context --show-suggestions
