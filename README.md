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
npm info @vnscriptkid/example-lib
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

## Beta version (not default version, kinda experimental version)
```console
git tag 1.2.0-beta.0
npm version 1.2.0-beta.0 (update version in package.json)
git push
git push --tags
npm publish --tag beta
npm install @vnscriptkid/example-lib@beta
```

## Use `husky` to add checking before any commit with `pre-commit`
https://www.npmjs.com/package/husky

## Add code coverage
- Add scripts in `package.json`
```json
"scripts": {
  "test": "jest --coverage",
},
```
- Add jest's thresholds in `jest.config.js`:
```js
coverageThreshold: {
  global: {
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100,
  },
}
```

## Use babel to transpile code that everyone understands
- Install deps
```console
npm install -D @babel/cli @babel/core @babel/preset-env babel-loader
```
- Config babel in `.babelrc`
- Add build script, update lib's entrance, update files to include to lib
```json
  "main": "dist/index.js",
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "babel --copy-files --no-copy-ignored --out-dir dist --ignore \"src/**/*.test.js\" src",
  },
  "files": [
    "dist",
    "README.md"
  ],
```
- Add empty `.npmignore` indicating that not to ignore `dist/` while publishing