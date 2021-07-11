import { Option } from '../struct/sideexStruct';
/**
 * Convert selenium targets to sideex options
 * @param commandTargets selenium targets of command
 * @returns {Option[]} sideex Option array
 */
export function targetOptionFunc(commandTargets: Array<string[]>): Option[] {
    let recordOptionArr: Option[] = [];

    commandTargets.forEach((target) => {
        const recordOption: Option = {
            type: target[1],
            value: target[0].includes('xpath')
                ? target[0].slice(target[0].indexOf('=') + 1, target[0].length)
                : target[0],
        };
        recordOptionArr.push(recordOption);
    });
    return recordOptionArr;
}
