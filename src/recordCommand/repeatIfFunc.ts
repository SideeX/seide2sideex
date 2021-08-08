import { Record, Option } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function repeatIfFunc(
    parameters: ConvertFuncParameter,
): Record | Record[] | null {
    const isCommandComment = parameters.isCommandComment;
    const doRepeat = parameters.doRepeat;
    const seleniumCommand = parameters.command;
    if (!isCommandComment) {
        const sideexRecord: Record[] = [
            //while loop
            {
                name: 'WHILE',
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
                pwt: {
                    pbw: 0,
                    paw: 0,
                    prw: 0,
                    pdw: 0,
                },
                comment: isCommandComment,
            },
        ];
        doRepeat.doRecords[doRepeat.currentDo].forEach((record) => {
            sideexRecord.push(record);
        });
        sideexRecord.push({
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
        });
        doRepeat.currentDo -= 1;

        return sideexRecord;
    } else {
        return null;
    }
}
