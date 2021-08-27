seide2sideex-cli
=============

[![License](https://img.shields.io/badge/License-Apache%202.0-g.svg)](https://opensource.org/licenses/Apache-2.0) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-red)](https://github.com/SideeX/seide2sideex)

SeleniumIDE2SideeX is a tool for converting Selenium IDE test case files to SideeX 3 test case files. This project is still undergoing and welcome pull requests.

## Install via npm
```
npm i --global @sideex/seide2sideex
```

## Usage

```bash
seide2sideex-cli -p path-to-side

// Example
seide2sideex-cli -p seleniumSamples/clickAt.side
or
seide2sideex-cli --path seleniumSamples/clickAt.side
```