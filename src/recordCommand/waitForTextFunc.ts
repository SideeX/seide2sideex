import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function waitForTextFunc(parameters: ConvertFuncParameter): Record[] {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const sideexTargetOptions: Option[] = targetOptionFunc(
        seleniumCommand.targets,
    );
    const sideexRecords: Record[] = [
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: '0',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: 'waitVar',
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
        {
            name: 'WHILE',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: '${waitVar} == 0',
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
        {
            name: 'storeText',
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
                        value: seleniumCommand.target,
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
        {
            name: 'IF',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value:
                            '"${' +
                            seleniumCommand.target +
                            '}" == "' +
                            seleniumCommand.value +
                            '"',
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
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: '1',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: 'waitVar',
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
        {
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
        },
        {
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
        },
    ];
    return sideexRecords;
}
