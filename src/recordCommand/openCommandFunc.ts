import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function openCommandFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    urlArr?: string[],
): Record {
    // console.log(seleniumCommand);
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value:
                        urlArr === undefined
                            ? seleniumCommand.target
                            : urlArr[0] + seleniumCommand.target,
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
