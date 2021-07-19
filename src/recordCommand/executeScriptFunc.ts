import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function executeScriptFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    let targetStr = seleniumCommand.target;
    targetStr = targetStr.replace('return', '');
    const sideexRecord: Record = {
        name: 'storeEval',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'others',
                    value: targetStr,
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'others',
                    value: seleniumCommand.value,
                },
            ],
            tac: '',
        },
        pwt: {
            pbw: 0,
            paw: 0,
            prw: 0,
            pdw: 0,
        },
        comment: isCommandComment,
    };
    return sideexRecord;
}
