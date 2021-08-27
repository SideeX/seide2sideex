seide2sideex-cli
=============
<p>
  <a href="https://opensource.org/licenses/Apache-2.0" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-g.svg" />
  </a>
</p>

SeleniumIDE2SideeX is a tool for converting Selenium IDE test case files to SideeX 3 test case files. This project is still undergoing and welcome pull requests.

## Install via npm
```
npm i @sideex/seide2sideex
```

## Usage

```bash
seide2sideex-cli -p path-to-side

// Example
seide2sideex-cli -p seleniumSamples/clickAt.side
or
seide2sideex-cli --path seleniumSamples/clickAt.side
```