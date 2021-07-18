import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';

export function assertValueFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    // console.log(seleniumCommand);
    const sideexRecord: Record = {
        name: 'assertValue',
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
