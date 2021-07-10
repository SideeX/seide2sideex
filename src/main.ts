import {
    SeleniumSide,
    SeleniumSuite,
    Test,
    Command,
} from './struct/seleniumStruct';
import { SideexJson, SideexSuite, Case, Record } from './struct/sideexStruct';
import { getSample } from './getSample/getSampleFunc';
import { testToCase } from './testToCase';
import fse from 'fs-extra';

const seleniumFile: SeleniumSide = getSample('dragAndDropToObject');
console.log(seleniumFile);

const seleniumSuites = seleniumFile.suites;
const seleniumSuitesLength = seleniumSuites.length;
console.log('seleniumSuitesLength: ', seleniumSuitesLength);

const seleniumTests = seleniumFile.tests;
const seleniumTestsLength: number = seleniumTests.length;
console.log('seleniumTestsLength: ', seleniumTestsLength);

const dictforSeleniumTests: { [testId: string]: number } = {};
// do a dictionary of tescase id
for (let i = 0; i < seleniumTestsLength; i++) {
    const testId: string = seleniumTests[i].id;
    dictforSeleniumTests[testId] = i;
}

// main file start here
if (seleniumSuitesLength > 1) {
    // console.log("This file more than one suite");
    seleniumSuites.forEach((suite) => {
        // console.log("next test suite coming", suite);
        doConvert(suite);
    });
} else {
    // console.log("This file just one suite only");
    // call function do it
    doConvert(seleniumSuites[0]); // 0 would be the index of Selenium suite array index.
}

function createSideexObject(/* id_nums: Array<string>*/) {
    const sideexJson: SideexJson = {
        time: 12364893, // time format = ?
        version: {
            sideex: [3, 5, 3], // version = 3.5.2; format = 2.0.0 ?
            format: [2, 0, 0],
        },
        suites: [], //empty
    };

    return sideexJson;
}

function generateSideexJson(sideexJson: SideexJson, suiteName: string) {
    // new way: generate file will store on folder
    // var fse = require('fs-extra'); // using fs-extra power, but not use @types's fs-extra
    const fileName = suiteName + '.json'; // file name
    const dir = './output/' + fileName;
    const dictString = JSON.stringify(sideexJson, null, '  ');

    // With async/await:
    async function generateJsonFileFunc(f: string) {
        try {
            await fse.outputFile(f, dictString);
            //const data = await fse.readFile(f, 'utf8')
            //console.log(data) // => print out whole json file
        } catch (err) {
            console.error(err);
        }
    }

    generateJsonFileFunc(dir);
}

function doConvert(suite: SeleniumSuite) {
    const testOfSuite: string[] = suite.tests;

    // console.log(testOfSuite);
    // find test id
    // console.log("testOfSuite length: ", testOfSuite.length);

    const suiteName = suite.name; //suites->title name
    // console.log("suite name: ", suiteName);

    //declare obj
    const sideexJson = createSideexObject();

    //let push_suite_1: Suite;
    const sideexSuite: SideexSuite = {
        title: suiteName,
        enableOnPlaying: true, // ??
        cases: [], // case have records
    };
    console.log(testOfSuite);
    // selenium: tests -> sideex: cases
    // do each test one by one
    for (let j = 0; j < testOfSuite.length; j++) {
        // console.log("process each test case");
        const testId = testOfSuite[j];
        // console.log("value of tests array id: ", dictforSeleniumTests[testId]);
        const testIndex = dictforSeleniumTests[testId];
        // get test array
        const seleniumTest = seleniumTests[testIndex];
        // console.log("call analyze_tests_to_cases");

        const sideexCase: Case = testToCase(seleniumTest);

        // push the test
        sideexSuite.cases.push(sideexCase);

        // push the suite into sideex json file
    }
    sideexJson.suites.push(sideexSuite);
    // call generate file fuction
    // parse the obj(Sideex json file structure) and i(what number of suite) now
    generateSideexJson(sideexJson, suiteName);
}
