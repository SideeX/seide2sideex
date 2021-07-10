import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function defaultFunc(
    seleniumCommand: Command,
    boolOrNot: boolean,
): Record {
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'tempType',
                    value: 'tempValue',
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'tempType',
                    value: 'tempValue',
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: boolOrNot,
    };
    return sideexRecord;
}
