import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function storeAttributeFunc(parameters: ConvertFuncParameter): Record[] {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const seleniumCommandTarget = seleniumCommand.target;
    const indexOfAtSign = seleniumCommandTarget.lastIndexOf('@'); //index of last '@'

    const tempValue = 'tempVar' + Math.floor(Math.random() * (999 + 1));
    const locator = seleniumCommandTarget.substr(0, indexOfAtSign);
    const attribute =
        '$' +
        `{${tempValue}.${seleniumCommandTarget.substr(indexOfAtSign + 1)}}`;

    const sideexRecord: Record[] = [
        {
            name: 'storeElement',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: locator.includes('linkText')
                            ? 'link' + locator.substr(8) // string after linkText
                            : locator,
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: tempValue,
                    },
                ],
                tac: '',
            },
            pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
            comment: isCommandComment,
        },
        {
            name: 'storeEval',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: attribute,
                    },
                ],
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
            pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
            comment: isCommandComment,
        },
    ];
    return sideexRecord;
}
