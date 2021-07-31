# CLI usage

Before upload to npm

```bash
$ node bin/cli.js -p path-to-(.side)

// Example
$ node bin/cli.js -p seleniumSamples/clickAt.side
$ node bin/cli.js --path seleniumSamples/clickAt.side
npm start seleniumSamples/uncheck.side
```

After upload to npm

```bash
$ seide2sideex-cli -p path-to-(.side)

// Example
$ seide2sideex-cli -p seleniumSamples/clickAt.side
$ seide2sideex-cli --path seleniumSamples/clickAt.side
```

Can change cli name on `package.json`

```json
//package.json
"bin": {
    "seide2sideex-cli": "./bin/cli.js"
}
```
