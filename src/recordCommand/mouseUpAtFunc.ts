import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function mouseUpAtFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const mouseCord = parameters.mouseCord;

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
