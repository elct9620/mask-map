#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'mask-map.aotoki.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:elct9620/mask-map.git master:gh-pages

cd -
