import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

function getContent(strTemp: string) {
    const firstBracket = strTemp.indexOf('{') + 1;
    const lastBracket = strTemp.indexOf('}');
    const finalStr = strTemp.substring(firstBracket, lastBracket);
    return finalStr;
}

function findIndex(
    stringToFind: string,
    arrTemp: (string | string[] | undefined)[],
) {
    let indexAns = 0;
    if (arrTemp != undefined) {
        indexAns = arrTemp.indexOf(stringToFind);
    }

    if (indexAns == -1) {
        if (arrTemp != undefined) {
            arrTemp.forEach((arr, index: number) => {
                if (Array.isArray(arr)) {
                    const indexInsideArr = arr.indexOf(stringToFind);
                    if (indexInsideArr != -1) {
                        indexAns = index;
                    }
                }
            });
        }
    }

    return indexAns;
}

export function selectWindowFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const libWindowHandle = parameters.libWindowHandle;

    // handle=${root} == win_ser_local
    // handle=${random digit Number} == win_ser_1 Ex: handle=${win3490}
    const seleniumTarget = seleniumCommand.target;
    let targetStr = seleniumTarget;
    const targetContent = getContent(seleniumTarget);

    if (libWindowHandle != undefined) {
        if (libWindowHandle[1][0] == targetContent) {
            targetStr = 'win_ser_local';
        } else {
            // if (libWindowHandle != undefined) {
            const indexLib = libWindowHandle[0].indexOf(targetContent) + 1;
            targetStr = 'win_ser_' + indexLib.toString();
            if (indexLib == 0) {
                // didn't find
                const indexLib = findIndex(targetContent, libWindowHandle[1]);
                targetStr = 'win_ser_' + indexLib.toString();
            }
        }
    }

    const sideexRecord: Record = {
        name: 'selectWindow',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: targetStr,
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: '',
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}
