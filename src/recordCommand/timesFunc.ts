import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { endCount } from './endFunc';

export function timesFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const sideexRecord: Record = {
        name: 'WHILE',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: '1==1',
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: seleniumCommand.target,
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    endCount(parameters.isElseIfCommand);
    return sideexRecord;
}
