# example-lib
This repo shows you how to create a open source lib

## Setup npm
```console
npm set init-author-name "Thanh Nguyen"
npm set init-author-email "vnscriptkid@gmail.com"
npm set init-author-url "http://vnscriptkid.io"
npm set init-license "MIT"
npm set save-exact true
cat ~/.npmrc
npm adduser
npm init
```

## Ignore files with `.gitignore`

## Install 3rd party package
https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json
```console
npm install unique-random-array
```

## Entrance to our lib: `src/index.js`

## `package.json`
```json
{
    "name": "@vnscriptkid/example-lib",
    "publishConfig": {
        "access": "public"
    }
}
```

## Publish it to npm
```console
npm publish
```

## Release a new version in Github
- One tag corresponds to a release
- Attach a tag to latest commit, then release it
```console
git tag 1.0.0 (npm version major/minor/patch)
git push (git push --follow-tags)
git push --tags 
```
- Version `1.2.0`
  - `1` is major version, changed when there's breaking changes in lib's api
  - `2` is minor version, changed when there's new feature but does not change old api
  - `0` is patch version, changed when there's new bug fix
