import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function selectFrameFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: seleniumCommand.target,
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
