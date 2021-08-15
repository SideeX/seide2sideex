import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function verifyChecked_and_notCheckedFunc(
    parameters: ConvertFuncParameter,
): Record {
    console.log('asdsadsada');
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const sideexRecord: Record = {
        name: 'verifyValue',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: seleniumCommand.target.slice(
                        0,
                        seleniumCommand.target.indexOf('='),
                    ),
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
                    value:
                        seleniumCommand.command === 'verifyChecked' ||
                        seleniumCommand.command === 'assertChecked'
                            ? 'on'
                            : 'off',
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
