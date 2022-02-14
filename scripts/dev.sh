#!/bin/bash
printf -v beg '%(%s)T\n' -2
sleep 1
yarn build
npx next dev
printf -v now '%(%s)T\n' -1

echo beg=$beg now=$now elapsed=$((now - beg))
