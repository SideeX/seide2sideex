import { Test } from './struct/seleniumStruct';

export function libWindowHandleFunc(
    seleniumTest: Test,
): (string | string[] | undefined)[][] {
    const arrForWidowHandle: (string | string[] | undefined)[][] = [[], []];
    let arrString: string[] = [];
    //let boolCheck = true;
    const seCommands = seleniumTest.commands;
    for (let i = 0; i < seCommands.length; i++) {
        if (seCommands[i].windowHandleName != undefined) {
            arrForWidowHandle[0].push(seCommands[i].windowHandleName);
        }
    }
    let checkFirstIndex = true;
    for (let i = 0; i < seCommands.length; i++) {
        if (seCommands[i].command == 'storeWindowHandle') {
            if (seCommands[i + 1].command == 'storeWindowHandle') {
                if (checkFirstIndex == true) {
                    arrString.push(seCommands[i].target);
                }
                arrString.push(seCommands[i + 1].target);
                checkFirstIndex = false;
            } else {
                if (arrString.length == 0) {
                    arrForWidowHandle[1].push(seCommands[i].target);
                }
                if (arrString.length != 0) {
                    arrForWidowHandle[1].push(arrString);
                }
                arrString = [];
            }
        }
    }
    return arrForWidowHandle;
}
