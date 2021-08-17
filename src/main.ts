import {
    SeleniumSide,
    SeleniumSuite,
    Test,
    Command,
} from './struct/seleniumStruct';
import { SideexJson, SideexSuite, Case, Record } from './struct/sideexStruct';
//import { getSample } from './getSample/getSampleFunc';
import { testToCase } from './testToCase';
import { libWindowHandleFunc } from './libWindowHandleFunc';
import fse from 'fs-extra';
import { readFileSync } from 'fs';

export function mainFunc(filePath: string) {
    const file = readFileSync(filePath, 'utf-8');
    const seleniumFile: SeleniumSide = JSON.parse(file);
    //const seleniumFile: SeleniumSide = getSample('if_else');
    const seleniumUrls: string[] = seleniumFile.urls;

    const seleniumSuites = seleniumFile.suites;
    const seleniumSuitesLength = seleniumSuites.length;
    console.log('seleniumSuitesLength: ', seleniumSuitesLength);

    const seleniumTests = seleniumFile.tests;
    const seleniumTestsLength: number = seleniumTests.length;
    console.log('seleniumTestsLength: ', seleniumTestsLength);

    //Dictionary for saving selenium tests
    const dictforSeleniumTests: { [testId: string]: number } = {};
    for (let i = 0; i < seleniumTestsLength; i++) {
        const testId: string = seleniumTests[i].id;
        dictforSeleniumTests[testId] = i;
    }
    const suitesName: string[] = [];
    const testSuiteDetail: { [testName: string]: string[] } = {};
    seleniumSuites.forEach((suite) => {
        suitesName.push(suite.name); // get suites name
        testSuiteDetail[suite.name] = [];
        suite.tests.forEach((test) => {
            const testId = dictforSeleniumTests[test];
            testSuiteDetail[suite.name].push(seleniumTests[testId].name);
        });
    });

    const objDoConvert = {
        urlArr: seleniumUrls,
        seleniumTests: seleniumTests,
        dictforSeleniumTests: dictforSeleniumTests,
        suitesName,
        testSuiteDetail,
    };

    //Check if there are more than one suite
    if (seleniumSuitesLength > 1) {
        seleniumSuites.forEach((suite) => {
            doConvert(suite, objDoConvert);
        });
    } else {
        doConvert(seleniumSuites[0], objDoConvert);
    }
}

/**
 * return Created Sideex Json file object
 * @returns {SideexJson} sideex Json
 */
function createSideexJson() {
    const sideexJson: SideexJson = {
        time: 12364893,
        version: {
            sideex: [3, 5, 3],
            format: [2, 0, 0],
        },
        suites: [],
    };

    return sideexJson;
}
/**
 * return Created Sideex suite object
 * @param suiteName suite name
 * @returns {SideexSuite} sideex suite
 */
function createSideexSuite(suiteName: string) {
    const sideexSuite: SideexSuite = {
        title: suiteName,
        enableOnPlaying: true,
        cases: [],
    };
    return sideexSuite;
}

/**
 * Generate sideex Json to output
 * @param sideexJson sideex Json
 * @param suiteName suite name
 */
function generateSideexJson(sideexJson: SideexJson, suiteName: string) {
    const fileName = suiteName + '.json'; // file name
    const dir = './output/' + fileName;
    const dictString = JSON.stringify(sideexJson, null, '  ');

    // With async/await:
    async function generateJsonFileFunc(f: string) {
        try {
            await fse.outputFile(f, dictString);
            console.log('Take a look at ' + dir);
        } catch (err) {
            console.error(err);
        }
    }

    generateJsonFileFunc(dir);
}

interface structDoConvert {
    urlArr: string[];
    seleniumTests: Test[];
    dictforSeleniumTests: { [testId: string]: number };
    suitesName: string[];
    testSuiteDetail: { [testName: string]: string[] };
}

/**
 * Convert selenium suite to sideex suite and output
 * @param suite selenium suite
 */
function doConvert(suite: SeleniumSuite, objDoConvert: structDoConvert) {
    const testOfSuite: string[] = suite.tests;

    const suiteName = suite.name;
    const sideexJson = createSideexJson();
    const sideexSuite = createSideexSuite(suiteName);
    // console.log(testOfSuite);

    //convert each tests to case
    for (let i = 0; i < testOfSuite.length; i++) {
        const testId = testOfSuite[i];
        const testIndex = objDoConvert.dictforSeleniumTests[testId];
        const seleniumTest = objDoConvert.seleniumTests[testIndex];
        const libWindowHandle = libWindowHandleFunc(seleniumTest);
        // console.log('libWindowHandle: ', libWindowHandle);
        const sideexCase: Case = testToCase(
            seleniumTest,
            objDoConvert.urlArr,
            libWindowHandle,
            suiteName,
            objDoConvert.suitesName,
            objDoConvert.testSuiteDetail,
        );
        // push the sideex case
        sideexSuite.cases.push(sideexCase);
    }
    // push sideex suite into sideex json file
    sideexJson.suites.push(sideexSuite);
    // generate siddex json file
    generateSideexJson(sideexJson, suiteName);
}
