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