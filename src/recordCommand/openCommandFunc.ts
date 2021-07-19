import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function openCommandFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    _libWindowHandle?: string[],
    urlArr?: string[],
): Record {
    // console.log(seleniumCommand);
    // console.log(urlArr);
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
