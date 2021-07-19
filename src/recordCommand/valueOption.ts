import { Option } from '../struct/sideexStruct';
/**
 * Convert selenium value to sideex options
 * @param commandValues selenium value of command
 * @returns {Option[]} sideex Option array
 */
export function valueOptionFunc(commandValues: string): Option[] {
    const recordOptionArr: Option[] = [];
    const splitValueString: string[] = commandValues.split('=');
    const recordOption: Option = {
        type: splitValueString[0] === 'label' ? 'other' : 'other',
        value: splitValueString[1],
    };
    recordOptionArr.push(recordOption);
    return recordOptionArr;
}
