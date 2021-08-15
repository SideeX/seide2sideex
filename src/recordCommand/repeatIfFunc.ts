import { Record, Option } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function repeatIfFunc(
    parameters: ConvertFuncParameter,
): Record | Record[] | null {
    const isCommandComment = parameters.isCommandComment;
    const doRepeat = parameters.doRepeat;
    const seleniumCommand = parameters.command;
    if (!isCommandComment) {
        const sideexRecords: Record[] = [
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
            },
        ];
        doRepeat.doRecords[doRepeat.currentDo].forEach((record) => {
            sideexRecords.push(record);
        });
        sideexRecords.push({
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
        if (doRepeat.currentDo != -1) {
            doRepeat.doRecords[doRepeat.currentDo + 1].forEach((record) => {
                doRepeat.doRecords[doRepeat.currentDo].push(record);
            });
        }

        return sideexRecords;
    } else {
        return null;
    }
}
