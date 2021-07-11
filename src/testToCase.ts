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

export function testToCase(seleniumTest: Test): Case {
    const sideexCase: Case = createSideexCase(seleniumTest.name);

    //Convert each commands to records
    seleniumTest.commands.forEach((command) => {
        //Check if comman is comment
        let isCommandComment = checkIfComment(command);
        if (isCommandComment) {
            command.command = command.command.substring(2);
        }
        const convertFunc = commandFunc[command.command];
        sideexCase.records.push(convertFunc(command, isCommandComment));
    });

    return sideexCase;
}
