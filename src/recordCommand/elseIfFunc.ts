import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { ifFunc } from './ifFunc';
import { elseFunc } from './elseFunc';

export function elseIfFunc(parameters: ConvertFuncParameter): any {
    const sideexRecord1: Record = elseFunc(parameters);
    const sideexRecord2: Record = ifFunc(parameters);

    return [sideexRecord1, sideexRecord2];
}
