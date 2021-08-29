#!/usr/bin/env node
const { program } = require('commander');
const { mainFunc } = require('../build/main');

program
    .description('An cli to read path')
    .option('-p, --path <type>', 'Type the path');

program.addHelpText(
    'after',
    `
Example usage:
  $ seide2sideex-cli -p path-of-the-(.side)
  $ seide2sideex-cli -p seleniumFile/open.side`,
);

program.parse();

const options = program.opts();
// console.log('The path is:');

if (options.path) {
    console.log(`The .side file path: ./${options.path}\n`);
    mainFunc(`${options.path}`);
}
if (process.argv.length < 3) {
    program.help();
}
