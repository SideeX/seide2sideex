import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function setWindowSizeFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    let target = '';
    if (seleniumCommand.target.includes('x')) {
        const size = seleniumCommand.target.split('x');
        if (parseInt(size[0]) < 500) {
            console.log(
                'Warning: The minimum window width is 500, your window width will be automatically set to 500.',
            );
            size[0] = '500';
        } else if (parseInt(size[1]) < 375) {
            console.log(
                'Warning: The minimum window height is 375, your window height will be automatically set to 375.',
            );
            size[1] = '375';
        }
        target = `${size[0]},${size[1]}`;
    } else {
        console.log(
            'Error: Wrong value for setWindowSize command, your window will be automatically set to default value.',
        );
        target = '';
    }
    const sideexRecord: Record = {
        name: 'setWindowSize',
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
                    value: target != '' ? target : '1420,855',
                },
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}
