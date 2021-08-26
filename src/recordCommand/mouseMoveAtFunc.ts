import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function mouseMoveAtFunc(
    parameters: ConvertFuncParameter,
): Record | null {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const mouseCord = parameters.mouseCord;

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
