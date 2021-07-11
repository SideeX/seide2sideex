import { Option } from '../struct/sideexStruct';
/**
 * Convert selenium targets to sideex options
 * @param commandTargets selenium targets of command
 * @returns {Option[]} sideex Option array
 */
export function targetToOptionFunc(commandTargets: Array<string[]>): Option[] {
    let recordOptionArr: Option[] = [];

    commandTargets.forEach((target) => {
        const recordOption: Option = {
            type: target[1],
            value: target[0],
        };
        recordOptionArr.push(recordOption);
    });
    return recordOptionArr;
}
