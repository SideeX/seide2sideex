import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
// handle=${root} == win_ser_local
// handle=${random4digitNumber} == win_ser_1 Ex: handle=${win3490}
export function selectWindowFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    noUseUrl?: string[],
    libWindowHandle?: string[],
): Record {
    let targetStr = seleniumCommand.target;
    console.log('libWindowHandle from selectWindowFunc:', libWindowHandle);
    console.log(noUseUrl);
    if (seleniumCommand.target.substr(9, 4) == 'root') {
        targetStr = 'win_ser_local';
    } else {
        if (libWindowHandle != undefined) {
            const indexLib =
                libWindowHandle.indexOf(targetStr.substr(9, 7)) + 1;
            console.log(indexLib);
            targetStr = 'win_ser_' + indexLib.toString();
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
