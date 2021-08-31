import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function verifyTextFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const seleniumTarget = seleniumCommand.target;
    const finalTarget = seleniumTarget.replace('linkText', 'link');
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: finalTarget.slice(0, finalTarget.indexOf('=')),
                    value: finalTarget,
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
    };
    return sideexRecord;
}
