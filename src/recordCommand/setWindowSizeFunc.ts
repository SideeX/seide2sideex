import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function setWindowSizeFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    const target = seleniumCommand.target.replace('x', ',');
    const sideexRecord: Record = {
        name: 'setWindowSize',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: '',
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: target,
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}
