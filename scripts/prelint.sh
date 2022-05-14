#!/usr/bin/env bash
git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g'
exit 0
