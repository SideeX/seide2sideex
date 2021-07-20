import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function openCommandFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const urlArr = parameters.urlArr;
    const isCommandComment = parameters.isCommandComment;

    let targetUrl = seleniumCommand.target;
    if (targetUrl == '' && urlArr !== undefined) {
        targetUrl = 'https://sideex.io/';
    }
    if (!targetUrl.includes('https://') && urlArr !== undefined) {
        targetUrl = urlArr[0] + targetUrl;
    }

    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: targetUrl,
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
