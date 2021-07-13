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

const seleniumFile: SeleniumSide = getSample('clickAt');

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

//Check if there are more than one suite
if (seleniumSuitesLength > 1) {
    seleniumSuites.forEach((suite) => {
        doConvert(suite, seleniumUrls);
    });
} else {
    doConvert(seleniumSuites[0], seleniumUrls);
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

/**
 * Convert selenium suite to sideex suite and output
 * @param suite selenium suite
 */
function doConvert(suite: SeleniumSuite, urlArr: string[]) {
    const testOfSuite: string[] = suite.tests;

    const suiteName = suite.name;
    const sideexJson = createSideexJson();
    const sideexSuite = createSideexSuite(suiteName);
    // console.log(testOfSuite);

    //convert each tests to case
    for (let i = 0; i < testOfSuite.length; i++) {
        const testId = testOfSuite[i];
        const testIndex = dictforSeleniumTests[testId];
        const seleniumTest = seleniumTests[testIndex];

        const sideexCase: Case = testToCase(seleniumTest, urlArr);

        // push the sideex case
        sideexSuite.cases.push(sideexCase);
    }
    // push sideex suite into sideex json file
    sideexJson.suites.push(sideexSuite);
    // generate siddex json file
    generateSideexJson(sideexJson, suiteName);
}
