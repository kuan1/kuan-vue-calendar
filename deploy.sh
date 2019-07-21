#!/usr/bin/env sh
# abort on errors
set -e
repo=kuan-vue-calendar
dist=dist

# build
npm run build:gh
# navigate into the build output directory
cd $dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/kuan1/$repo.git master:gh-pages

cd -

echo "deploy success !!"
