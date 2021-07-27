import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function forEachFunc(parameters: ConvertFuncParameter): Record[] {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

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
                        value: 'count',
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
                        value: 'length',
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
                        value: '${count} < ${length} - 1',
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
                        value: '${count} + 1',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: 'count',
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
                        value: '${' + seleniumCommand.target + '}[${count}]',
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

    return sideexRecords;
}
