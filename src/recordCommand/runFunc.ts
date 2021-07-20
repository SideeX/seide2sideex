import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function runFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const suiteName = parameters.suiteName;
    const isCommandComment = parameters.isCommandComment;

    const targetValue = suiteName + '.' + seleniumCommand.target;
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
