import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function executeAsyncScriptFunc(
    parameters: ConvertFuncParameter,
): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    parameters.countNum.executeAsyncScript += 1;

    let targetStr = seleniumCommand.target;
    targetStr = targetStr.replaceAll('return', '');

    const sideexRecord: Record = {
        name: 'storeEval',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'others',
                    value: targetStr,
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'others',
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
