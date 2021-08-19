import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function selectFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const sideexRecord: Record = {
        name: 'select',
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
                    value: seleniumCommand.value, //label= value= index=
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}
