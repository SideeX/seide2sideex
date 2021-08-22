import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function openCommandFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const urlArr = parameters.urlArr;
    const isCommandComment = parameters.isCommandComment;
    if (urlArr !== undefined) {
        console.log(
            `Warning: if you want to convert open command, make sure that base URL is correct. 
            Only the first index of 'urls' will be selected.
            At this case, the selected base URL will be: ${urlArr[0]}\n`,
        );
    }

    let targetUrl = seleniumCommand.target;
    if (targetUrl == '' && urlArr !== undefined) {
        targetUrl = 'https://sideex.io/';
    }
    if (!targetUrl.includes('https://') && urlArr !== undefined) {
        const urlArrLastChar = urlArr[0].substr(urlArr[0].length - 1);
        const targetUrlFirstChar = targetUrl.substr(0, 1);
        const tmpTargetUrl = targetUrl;
        targetUrl = urlArr[0] + targetUrl;
        if (urlArrLastChar == '/' && targetUrlFirstChar == '/') {
            targetUrl = urlArr[0] + tmpTargetUrl.substr(1); // remove the first '/' slash symbol
        }
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
