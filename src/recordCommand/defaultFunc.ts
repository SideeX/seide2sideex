//import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function defaultFunc(parameters: ConvertFuncParameter): Record | null {
    console.log(
        `Warning: This command (${parameters.command.command}) haven't convert\n`,
    );
    return null;
    // const sideexRecord: Record = {
    //     name: seleniumCommand.command,
    //     target: {
    //         usedIndex: 0,
    //         options: [
    //             {
    //                 type: 'tempType',
    //                 value: 'tempValue',
    //             },
    //         ],
    //         tac: '',
    //     },
    //     value: {
    //         usedIndex: 0,
    //         options: [
    //             {
    //                 type: 'tempType',
    //                 value: 'tempValue',
    //             },
    //         ],
    //         tac: '',
    //     },
    //     pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
    //     comment: isCommandComment,
    // };
    // return sideexRecord;
}
