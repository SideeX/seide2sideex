import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';

export function mouseUpAtFunc(
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
    const sideexTargetOptions: Option[] = targetOptionFunc(
        seleniumCommand.targets,
    );
    const sideexRecord: Record = {
        name: '',
        target: {
            usedIndex: 0,
            options: sideexTargetOptions,
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [],
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
    if (
        mouseCord !== undefined &&
        (mouseCord.StartPoint.X !== mouseCord.PrevPoint.X ||
            mouseCord.StartPoint.Y !== mouseCord.PrevPoint.Y)
    ) {
        sideexRecord.name = 'dragAndDrop';

        sideexRecord.value.options.push({
            type: 'other',
            value: JSON.stringify({
                StartPoint: mouseCord.StartPoint,
                Movements: mouseCord.Movements,
            }),
        });
    } else {
        sideexRecord.name = 'mouseUpAt';
        sideexRecord.value.options.push({
            type: 'other',
            value: seleniumCommand.value,
        });
    }
    return sideexRecord;
}
