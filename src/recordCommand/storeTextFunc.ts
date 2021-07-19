// This function use for storeText and storeValue
import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';
export function storeTextFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    const sideexTargetOptions: Option[] = targetOptionFunc(
        seleniumCommand.targets,
    );
    const sideexRecord: Record = {
        name: seleniumCommand.command,
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
