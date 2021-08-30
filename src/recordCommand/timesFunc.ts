import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { endCount } from './endFunc';

export function timesFunc(parameters: ConvertFuncParameter): Record[] {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const timesOfLoop = Number(seleniumCommand.target);
    const loopLimit = Number(seleniumCommand.value);

    let finalValue = String(timesOfLoop);
    // SeleniumIDE will block if timesOfLoop bigger than loopLimit
    if (timesOfLoop >= loopLimit && seleniumCommand.value != '') {
        console.log(
            "Warning: max retry limit have exceeded, the command's value will be used instead of the target.\n",
        );
        finalValue = String(loopLimit);
    }
    const storeVariableName =
        parameters.arrayStoreForTimes[parameters.countTimesCommand];
    const sideexRecord: Record[] = [
        {
            name: 'WHILE',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value: '$' + `{${storeVariableName}} < ${finalValue}`,
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
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value: '$' + `{${storeVariableName}} + 1`,
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: storeVariableName,
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
    endCount(parameters.isElseIfCommand);
    return sideexRecord;
}
