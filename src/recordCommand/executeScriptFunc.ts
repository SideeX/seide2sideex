import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function executeScriptFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    let targetStr = seleniumCommand.target;
    targetStr = targetStr.replaceAll('return', '');
    console.log(
        "Warning: executeScript command maybe still have some problems. Please check your executeScript command's target.\n"+
        "         Somewhere still need to plus \"return\", but we delete all of \"return\" in target.\n"+
        "         Please add \"return\" manually."
    );
    
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
