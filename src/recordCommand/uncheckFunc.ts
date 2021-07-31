import { Record, Option } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { targetOptionFunc } from './targetOption';

export function uncheckFunc(parameters: ConvertFuncParameter): Record[] {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const sideexTargetOptions: Option[] = targetOptionFunc(
        seleniumCommand.targets,
    );

    const sideexRecords: Record[] = [
        //store element of check box
        {
            name: 'storeElement',
            target: {
                usedIndex: 0,
                options:
                    sideexTargetOptions.length === 0
                        ? [{ type: 'other', value: seleniumCommand.target }]
                        : sideexTargetOptions,
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
        //store checkbox checked attribute
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: '${' + seleniumCommand.target + '.checked}',
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
        //if checkbox is checked
        {
            name: 'IF',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: '${' + seleniumCommand.target + '}',
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
        //uncheck the checkbox
        {
            name: 'runScript',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value:
                            'document.getElementById("' +
                            seleniumCommand.target.split('=')[1] +
                            '").checked = false',
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
        //end
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
