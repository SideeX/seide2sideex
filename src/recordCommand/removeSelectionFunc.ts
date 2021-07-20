import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';
import { valueOptionFunc } from './valueOption';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function removeSelectionFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;

    const sideexTargetOptions: Option[] = targetOptionFunc(
        seleniumCommand.targets,
    );
    const sideexValueOptions: Option[] = valueOptionFunc(seleniumCommand.value);
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: sideexTargetOptions,
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: sideexValueOptions,
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
