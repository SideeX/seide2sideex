import { Test, Command } from './struct/seleniumStruct';
import { Case, Record } from './struct/sideexStruct';
import { commandFunc } from './caseToFunc';

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
 * @returns {Case} sideex test case
 */
export function testToCase(
    seleniumTest: Test,
    urlArr: string[],
    libWindowHandle: string[],
    suiteName: string,
    suitesName: string[],
    testSuiteDetail: { [testName: string]: string[] },
): Case {
    const sideexCase: Case = createSideexCase(seleniumTest.name);
    //Convert each commands to records
    //mouseCoordinate for mouseMove
    var commandIndex = -1;
    var mouseCord = {
        StartPoint: { X: -999, Y: -999 },
        PrevPoint: { X: -999, Y: -999 },
        Movements: [],
    };
    var tempRecords: Record[][] = [];
    var doRepeat = {
        doCount: -1,
        currentDo: -1,
        doRecords: tempRecords,
    };
    var countNum = { forEach: 0 };

    seleniumTest.commands.forEach((command) => {
        //Check if comman is comment
        // console.log(command);
        commandIndex++;
        const isCommandComment = checkIfComment(command);
        if (isCommandComment) {
            command.command = command.command.substring(2);
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

    return sideexCase;
}
