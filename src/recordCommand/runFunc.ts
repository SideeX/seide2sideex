import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function runFunc(parameters: ConvertFuncParameter): Record {
    parameters.countNum.run += 1;
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    let suiteNameNow = '';
    for (const [key, value] of Object.entries(parameters.testSuiteDetail)) {
        // find the suite name of this test
        if (value.includes(seleniumCommand.target)) {
            suiteNameNow = key;
            break;
        }
    }
    const targetValue = suiteNameNow + '.' + seleniumCommand.target; //change suiteName
    const sideexRecord: Record = {
        name: 'INCLUDE',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: targetValue,
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
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}
