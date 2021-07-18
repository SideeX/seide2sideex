import { Option } from '../struct/sideexStruct';
/**
 * Convert selenium targets to sideex options
 * @param commandTargets selenium targets of command
 * @returns {Option[]} sideex Option array
 */
export function targetOptionFunc(commandTargets: Array<string[]>): Option[] {
    const recordOptionArr: Option[] = [];
    commandTargets.forEach((target) => {
        let typeStr = target[1];
        let valueStr = target[0];
        if (typeStr == 'linkText') {
            typeStr = 'link';
            const valueLast = valueStr.split('=')[1];
            valueStr = typeStr + '=' + valueLast;
        }
        const recordOption: Option = {
            type: typeStr,
            value: valueStr.includes('xpath')
                ? valueStr.slice(valueStr.indexOf('=') + 1, valueStr.length)
                : valueStr,
        };
        recordOptionArr.push(recordOption);
    });
    return recordOptionArr;
}
