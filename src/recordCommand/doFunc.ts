import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

export function doFunc(parameters: ConvertFuncParameter): null {
    const isCommandComment = parameters.isCommandComment;
    const doRepeat = parameters.doRepeat;
    if (!isCommandComment) {
        doRepeat.doCount += 1;
        doRepeat.currentDo += 1;

        doRepeat.doRecords[doRepeat.currentDo] = [];
    }
    return null;
}
