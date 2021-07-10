import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function openCommandFunc(
    seleniumCommand: Command,
    boolOrNot: boolean,
): Record {
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 1,
            options: [
                {
                    type: 'tempType',
                    value: 'tempValue',
                },
            ],
            tac: 'tempTac',
        },
        value: {
            usedIndex: 1,
            options: [
                {
                    type: 'tempType',
                    value: 'tempValue',
                },
            ],
            tac: 'tempTac',
        },
        pwt: { temp: 1 },
        comment: boolOrNot,
    };
    return sideexRecord;
}
