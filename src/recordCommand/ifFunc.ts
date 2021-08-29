import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { endCount } from './endFunc';

export function ifFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const targetstr = targetStr(seleniumCommand.target);
    parameters.countNum.IF += 1;
    const sideexRecord: Record = {
        name: 'IF',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: targetstr,
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: '',
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
    endCount(parameters.isElseIfCommand);

    return sideexRecord;
}

export function targetStr(str: string): string {
    //解決參數type為string時，需要在該參數兩邊加上雙引號 ex. "${myVar}"
    try {
        //拆分parameter 和 parameter判斷值
        let temp = str;
        const commas = ['===', '==', '>=', '<=', '!=', '&&', '||', '>', '<'];
        commas.forEach((comma) => {
            temp = temp.replaceAll(comma, '@@@');
        });
        const str_split = temp.split('@@@');
        if (str_split.length <= 1) {
            return str;
        }

        //判別參數type
        //console.log(str_split);
        const str_type = [];
        let right_flag = 0;
        for (let i = 0; i < str_split.length; i++) {
            for (let j = 0; j < str_split[i].length; j++) {
                if (str_split[i][j] == ' ') {
                    continue;
                } else if (right_flag == 0) {
                    if (str_split[i][j] == '$') {
                        right_flag = 1;
                        break;
                    } else if (str_split[i][j] == '!') {
                        str_type.push('other');
                        break;
                    }
                } else {
                    if (str_split[i][j] == '"' || str_split[i][j] == "'") {
                        str_type.push('string');
                        right_flag = 0;
                        break;
                    } else if (str_split[i][j] == '$') {
                        str_type.push('other');
                        right_flag = 1;
                        break;
                    } else if (str_split[i][j] == '!') {
                        str_type.push('other');
                        str_type.push('other');
                        right_flag = 0;
                        break;
                    } else {
                        str_type.push('other');
                        right_flag = 0;
                        break;
                    }
                }
            }
        }
        if (right_flag == 1) {
            right_flag = 0;
            str_type.push('other');
        }

        //type為string時，加雙引號
        //console.log(str_type);
        let str_index = 0;
        for (let i = 0; i < str_type.length; i++) {
            if (str_index >= str.length) {
                break;
            } else if (str_type[i] == 'other') {
                for (let j = str_index; j < str.length; j++) {
                    if (str[j] == '}') {
                        str_index = j + 1;
                        break;
                    }
                }
            } else {
                for (let j = str_index; j < str.length; j++) {
                    if (str[j] == '$') {
                        str =
                            str.substring(0, j) +
                            '"' +
                            str.substring(j, str.length);
                        j++; //若雙引號加在前頭，會一直重複加上去
                    } else if (str[j] == '}') {
                        str =
                            str.substring(0, j + 1) +
                            '"' +
                            str.substring(j + 1, str.length);
                        str_index = j + 1;
                        break;
                    }
                }
            }
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
        console.log(
            'Error: IF command may still have some problems. Please modify command target manually!!!',
        );
    } finally {
        //console.log(str);
        return str;
    }
}
