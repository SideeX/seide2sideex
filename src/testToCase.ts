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
        const convertFunc = caseToFunc[command.command];
        sideexCase.records.push(convertFunc(command));
        console.log(sideexCase.records);
    });

    return sideexCase;
}
