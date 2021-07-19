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

export function testToCase(
    seleniumTest: Test,
    urlArr: string[],
    libWindowHandle: string[],
): Case {
    const sideexCase: Case = createSideexCase(seleniumTest.name);
    //Convert each commands to records
    //mouseCoordinate for mouseMove
    var mouseCord = {
        StartPoint: { X: -999, Y: -999 },
        PrevPoint: { X: -999, Y: -999 },
        Movements: [],
    };
    seleniumTest.commands.forEach((command) => {
        //Check if comman is comment
        const isCommandComment = checkIfComment(command);
        if (isCommandComment) {
            command.command = command.command.substring(2);
        }
        //console.log('testtocase: ', libWindowHandle);
        const convertFunc = commandFunc[command.command];
        const sideexRecord: Record | null = convertFunc(
            command,
            isCommandComment,
            libWindowHandle,
            urlArr,
            mouseCord,
        );
        if (sideexRecord) {
            sideexCase.records.push(sideexRecord);
        }
    });

    return sideexCase;
}
