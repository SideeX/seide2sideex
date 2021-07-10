import { Test } from './struct/seleniumStruct';
import { Case, Record } from './struct/sideexStruct';
import { caseToFunc } from './caseToFunc';

export function testToCase(seleniumTest: Test): Case {
    console.log('testName');
    console.log(seleniumTest.name);
    const sideexCase: Case = {
        title: seleniumTest.name,
        enableOnPlaying: true, // always true?
        networkSpeed: 55.33, // random?
        records: [], // later will push some value inside
    };
    seleniumTest.commands.forEach((command) => {
        console.log(command.command);

        let commentBool = false;
        // check command is disable or not (Ex: '//open' means this command have benn disable, will not execute)
        if (command.command.substring(0, 2) == '//') {
            console.log('command now: ', command.command);
            commentBool = true; // if detected have comment, then comment will be true, vice versa.
            const tempCommand = command.command;
            command.command = tempCommand.substring(2); // remove the "//"
            console.log(command.command, ' are disable');
        }

        const convertFunc = caseToFunc[command.command];
        sideexCase.records.push(convertFunc(command, commentBool));
        console.log(sideexCase.records);
    });

    return sideexCase;
}
