import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';
import { valueOptionFunc } from './valueOption';

export function removeSelectionFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    // console.log(seleniumCommand);

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
