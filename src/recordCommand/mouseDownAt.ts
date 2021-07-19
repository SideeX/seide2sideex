import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';

export function mouseDownAtFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    _libWindowHandle?: string[],
    _urlArr?: string[],
    mouseCord?: {
        StartPoint: { X: number; Y: number };
        PrevPoint: { X: number; Y: number };
        Movements: { TD: number; OX: number; OY: number }[];
    },
): Record {
    // console.log(seleniumCommand);
    //check mouseMove
    const xyCord = seleniumCommand.value.split(',');
    if (mouseCord !== undefined && xyCord[1]) {
        mouseCord.StartPoint.X = parseInt(xyCord[0]);
        mouseCord.StartPoint.Y = parseInt(xyCord[1]);
        mouseCord.PrevPoint.X = parseInt(xyCord[0]);
        mouseCord.PrevPoint.Y = parseInt(xyCord[1]);
        mouseCord.Movements = [];
    }

    const sideexTargetOptions: Option[] = targetOptionFunc(
        seleniumCommand.targets,
    );
    const sideexRecord: Record = {
        name: 'mouseDownAt',
        target: {
            usedIndex: 0,
            options: sideexTargetOptions,
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
