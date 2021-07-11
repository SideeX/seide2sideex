import { Command } from '../struct/seleniumStruct';
import { Record, Option } from '../struct/sideexStruct';

export function dragAndDropToObjectFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {

    // "value": "xpath=(//div[@id='div1'])[2]" => "type": "xpath:idRelative",
    //                                            "value": "//div[@id='div1'][2]"
    let targetOption: Option = {
        type: seleniumCommand.target.slice(0, seleniumCommand.target.indexOf('=')),
        value: seleniumCommand.target,
    }
    //str.replace(/\[.*?\]/g, '' )
    let valueOption: Option = {
        type: seleniumCommand.value.slice(0, seleniumCommand.value.indexOf('=')),
        value: seleniumCommand.value,
    }
    if (targetOption.type == "xpath") {
        targetOption.type = "xpath:idRelative";
        targetOption.value = targetOption.value.slice(targetOption.value.indexOf('=') + 1, targetOption.value.length).replace("(", '').replace(")", '');
    }
    if (valueOption.type == "xpath") {
        valueOption.type = "xpath:idRelative";
        valueOption.value = valueOption.value.slice(valueOption.value.indexOf('=') + 1, valueOption.value.length).replace("(", '').replace(")", '');
    }
    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                targetOption,
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                valueOption,
            ],
            tac: '',
        },
        pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
        comment: isCommandComment,
    };
    return sideexRecord;
}