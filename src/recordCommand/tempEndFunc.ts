import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function tempEndFunc(parameters: ConvertFuncParameter): any {
    const isCommandComment = parameters.isCommandComment;

    const sideexRecord: Record = {
        name: 'END',
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
                    value: '',
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
