import { Test, Command } from './struct/seleniumStruct';
import { Case, Record } from './struct/sideexStruct';
import { commandFunc } from './caseToFunc';
import { storeVarForTimesFunc } from './storeVarForTimesFunc';
//import { strictEqual } from 'assert';
/**
 * return Created Sideex case object
 * @param testName test name
 * @returns {SideexCase} sideex case
 */
function createSideexCase(testName: string) {
    const sideexCase: Case = {
        title: testName,
        enableOnPlaying: true,
        networkSpeed: 55.33,
        records: [],
    };
    return sideexCase;
}
/**
 * check command is disable or not
 * @param command
 * @returns {boolean} isComment
 */
function checkIfComment(command: Command) {
    let isCommandComment = false;
    if (command.command.substring(0, 2) === '//') {
        isCommandComment = true;
    }

    return isCommandComment;
}
/**
 * change selenium test to sideex testcase
 * @param seleniumTest selenium test
 * @param urlArr array of url
 * @param libWindowHandle
 * @param suiteName suite name
 * @param suitesName suites name(array)
 * @param testSuiteDetail detail of test suite
 * @param arrayStoreForTimes array use for times
 * @returns {Case} sideex test case
 */
export function testToCase(
    seleniumTest: Test,
    urlArr: string[],
    libWindowHandle: (string | string[] | undefined)[][],
    suiteName: string,
    suitesName: string[],
    testSuiteDetail: { [testName: string]: string[] },
    arrayStoreForTimes: string[],
): Case {
    const sideexCase: Case = createSideexCase(seleniumTest.name);
    //Convert each commands to records
    //mouseCoordinate for mouseMove
    console.log(`TestCaseName: ${seleniumTest.name}\n`);
    let commandIndex = -1;
    const mouseCord = {
        StartPoint: { X: -999, Y: -999 },
        PrevPoint: { X: -999, Y: -999 },
        Movements: [],
    };
    const tempRecords: Record[][] = [];
    const doRepeat = {
        doCount: -1,
        currentDo: -1,
        doRecords: tempRecords,
    };
    const countNum = {
        forEach: 0,
        IF: 0,
        executeScript: 0,
        executeAsyncScript: 0,
        submit: 0,
        run: 0,
    };
    let countTimesCommand = -1; // use for 'times' command
    const storeRecordsForTimes = storeVarForTimesFunc(arrayStoreForTimes);
    // Will push to sideexCase.records, when suite have 'times' command
    storeRecordsForTimes.forEach((storeRecord) => {
        sideexCase.records.push(storeRecord);
    });
    seleniumTest.commands.forEach((command) => {
        //Check if comman is comment
        // console.log(command);
        commandIndex++;
        const isCommandComment = checkIfComment(command);
        // When isCommandComment = true, delete the double slash (//)
        if (isCommandComment) {
            command.command = command.command.substring(2);
        }
        if (command.command == 'times') {
            countTimesCommand++;
        }
        //console.log('testtocase: ', libWindowHandle);
        const convertFunc = commandFunc[command.command];
        // console.log(convertFunc);
        const sideexRecord: Record | Record[] | null = convertFunc({
            command: command,
            commandIndex: commandIndex,
            commands: seleniumTest.commands,
            countNum: countNum,
            isElseIfCommand: false,
            isCommandComment: isCommandComment,
            suiteName: suiteName,
            libWindowHandle: libWindowHandle,
            urlArr: urlArr,
            mouseCord: mouseCord,
            doRepeat: doRepeat,
            suitesName: suitesName,
            testSuiteDetail: testSuiteDetail,
            arrayStoreForTimes: arrayStoreForTimes,
            countTimesCommand: countTimesCommand,
        });
        if (sideexRecord) {
            if (Array.isArray(sideexRecord)) {
                if (doRepeat.currentDo != -1) {
                    for (let i = 0; i < sideexRecord.length; i++) {
                        sideexCase.records.push(sideexRecord[i]);
                        doRepeat.doRecords[doRepeat.currentDo].push(
                            sideexRecord[i],
                        );
                    }
                } else {
                    for (let i = 0; i < sideexRecord.length; i++) {
                        sideexCase.records.push(sideexRecord[i]);
                    }
                }
            } else {
                sideexCase.records.push(sideexRecord);
                if (doRepeat.currentDo != -1) {
                    doRepeat.doRecords[doRepeat.currentDo].push(sideexRecord);
                }
            }
        }
    });
    // console.log(doRepeat.doRecords.length);
    // for (var i = 0; i < doRepeat.doRecords.length; i++) {
    //     console.log(doRepeat.doRecords[i]);
    // }
    // console.log('---------------------------------------');
    if (countNum.submit) {
        console.log(
            `Warning: submit command may still have some problems. Only the target that is xpath can be converted.`,
        );
    }
    if (countNum.run) {
        console.log(
            `Warning: run command may still have some problems. Please make sure that the test case is added to your test suite.
                Also, remember to open the test suite that have test case you need to run/INCLUDE.`,
        );
    }
    if (countNum.executeAsyncScript) {
        console.log(
            `Warning: executeAsyncScript currently does not support “return” in the command's target, please add your "return" statements manually.`,
        );
    }
    if (countNum.executeScript) {
        console.log(
            `Warning: executeScript currently does not support “return” in the command's target, please add your "return" statements manually.`,
        );
    }
    if (countNum.IF) {
        console.log(
            "Warning: IF command maybe still have some problems. Please check your IF command's target.\n" +
                'If your parameters\' type are string, you need to add " on both sides of the parameters. For example, "${myVar}"',
        );
    }
    console.log(`Finishing convert testCase: ${seleniumTest.name}\n`);

    return sideexCase;
}
