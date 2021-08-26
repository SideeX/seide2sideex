import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { endCount } from './endFunc';

export function forEachFunc(parameters: ConvertFuncParameter): Record[] {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    if (parameters.countNum != undefined) {
        parameters.countNum.forEach += 1;
    }
    const countNum = parameters.countNum?.forEach;
    const sideexRecords: Record[] = [
        //store count variable for every forEach loop(initial count = -1)
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value: '-1',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: countNum ? 'count' + countNum.toString() : '',
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
        //store the array length (${variable}.length)
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value: '${' + seleniumCommand.target + '}' + '.length',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: 'length' + countNum?.toString(),
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
        //while loop for forEach
        {
            name: 'WHILE',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value:
                            '${count' +
                            countNum?.toString() +
                            '} < ${length' +
                            countNum?.toString() +
                            '} - 1',
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
        //add count in every loop (count += 1)
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value: '${count' + countNum?.toString() + '} + 1',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: 'count' + countNum?.toString(),
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
        //store the variable in every loop(foreach(variable) in variables)
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value:
                            '${' +
                            seleniumCommand.target +
                            '}[${count' +
                            countNum?.toString() +
                            '}]',
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
    endCount(parameters.isElseIfCommand);
    return sideexRecords;
}
