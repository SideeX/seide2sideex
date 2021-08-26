import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function assertChecked_and_notCheckedFunc(
    parameters: ConvertFuncParameter,
): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const sideexRecord: Record = {
        name: 'assertValue',
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
