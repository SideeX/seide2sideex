import { Record, Option } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function assertValueFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    let options: Option[] = [];

    options.push({
        type: 'other',
        value: seleniumCommand.target,
    });

    seleniumCommand.targets.forEach((target) => {
        options.push({
            type: target[1],
            value: target[0],
        });
    });
    const sideexRecord: Record = {
        name: 'assertValue',
        target: {
            usedIndex: 0,
            options: options,
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
