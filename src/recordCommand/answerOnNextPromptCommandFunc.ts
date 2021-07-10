import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function answerOnNextPromptCommandFunc(
    seleniumCommand: Command,
    boolOrNot: boolean,
): Record {
    const sideexRecord: Record = {
        name: "answerOnNextPrompt",
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
        comment: boolOrNot,
    };
    return sideexRecord;
}
