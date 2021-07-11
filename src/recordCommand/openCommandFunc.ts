import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function openCommandFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    urlArr?: string[],
): Record {
    // console.log(seleniumCommand);
    console.log(urlArr);
    let targetUrl = seleniumCommand.target;
    if (targetUrl == '/' && typeof urlArr !== 'undefined') {
        console.log('have / !!!!!!!!!');
        targetUrl = urlArr[0];
    }
    if (targetUrl[0] === '/' && typeof urlArr !== 'undefined') {
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
