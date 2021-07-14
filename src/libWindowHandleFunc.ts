import { Test } from './struct/seleniumStruct';

export function libWindowHandleFunc(seleniumTest: Test): string[] {
    let arrForWidowHandle: string[] = [];
    seleniumTest.commands.forEach((command) => {
        if (command.windowHandleName != undefined) {
            arrForWidowHandle.push(command.windowHandleName);
        }
    });
    return arrForWidowHandle;
}
