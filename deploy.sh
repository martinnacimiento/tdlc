#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/martinnacimiento/teoria-de-la-computacion.git

git push -f origin master
cd -