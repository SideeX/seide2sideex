import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';
import { targetOptionFunc } from './targetOption';

export function mouseDownAtFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    // console.log(seleniumCommand);

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
