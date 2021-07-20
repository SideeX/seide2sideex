import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function runFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    suiteName: string,
): Record {
    const targetValue = suiteName + '.' +seleniumCommand.target;
    console.log('inside runFunc: ', targetValue);
    const sideexRecord: Record = {
        name: 'INCLUDE',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: targetValue,
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
