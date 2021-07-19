import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';

export function mouseMoveAtFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
    _libWindowHandle?: string[],
    _urlArr?: string[],
    mouseCord?: {
        StartPoint: { X: number; Y: number };
        PrevPoint: { X: number; Y: number };
        Movements: { TD: number; OX: number; OY: number }[];
    },
): Record | null {
    // console.log(seleniumCommand);
    const xyCord = seleniumCommand.value.split(',');
    // push offest of x, y
    if (mouseCord !== undefined && xyCord[1] && !isCommandComment) {
        const offsetOfPrevX = parseInt(xyCord[0]) - mouseCord.PrevPoint.X;
        const offsetOfPrevY = parseInt(xyCord[1]) - mouseCord.PrevPoint.Y;
        mouseCord.PrevPoint.X = parseInt(xyCord[0]);
        mouseCord.PrevPoint.Y = parseInt(xyCord[1]);
        mouseCord.Movements.push({
            TD: 0,
            OX: offsetOfPrevX,
            OY: offsetOfPrevY,
        });
    }

    return null;
}
