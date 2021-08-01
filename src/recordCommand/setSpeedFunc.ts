import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function setSpeedFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    var number = Number(seleniumCommand.target);
    var value;
    if (number > 2400) {
        value = '1';
    } else if (number > 1800) {
        value = '2';
    } else if (number > 1200) {
        value = '3';
    } else if (number > 600) {
        value = '4';
    } else {
        value = '5';
    }
    const sideexRecord: Record = {
        name: 'setSpeed',
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
                    value: value,
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}
