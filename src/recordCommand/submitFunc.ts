import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function submitFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    console.log(
        `Warning: if you want to convert submit command, you need to select send_key target as xpath=//form..... in targets on selenium IDE first and change command to submit. 
         Only target is xpath=//form..... can be converted`,
    );
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'xpath:attributes',
                    value: seleniumCommand.target.slice(
                        seleniumCommand.target.indexOf('=') + 1,
                        seleniumCommand.target.lastIndexOf('/'),
                    ),
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: 'false',
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
