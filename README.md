# Portfolio 

> An easy-to-configure timeline for your projects.

[![Check, build and deploy to GitHub Pages](https://github.com/schmelczer/schmelczer.github.io/actions/workflows/lint-and-deploy.yaml/badge.svg)](https://github.com/schmelczer/schmelczer.github.io/actions/workflows/lint-and-deploy.yaml)


[Check out the live version.](https://schmelczer.dev)

## Configuration

- The actual content is in the [data](src/data) folder, starting with [portfolio.ts](src/data/portfolio.ts)
- The assets referenced should be located in [data/media](src/data/media)

## Build

1. `npm install`
2. `npm run build`
3. You can find the results in the [dist](dist) folder

## Info

- All images are converted to `WebP` after being imported into any file.
    > Except for the og-image, and SVGs.