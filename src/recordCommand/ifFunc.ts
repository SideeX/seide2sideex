import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { endCount } from './endFunc';

export function ifFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    var targetstr = targetStr(seleniumCommand.target);

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

export function targetStr(str: string): string{
    //拆分parameter 和 parameter判斷值
    var temp = str;
    var commas = ["===","==",">=","<=","!=","&&","||",">","<"];
    commas.forEach((comma) => {
        temp = temp.replaceAll(comma, '@@@');
    });
    var str_split = temp.split("@@@");

    //判別參數type
    //console.log(str_split);
    var str_type = [];
    var right_flag = 0;
    for(let i = 0; i < str_split.length; i++){
        for(let j = 0; j < str_split[i].length; j++){
            if(right_flag == 0){
                if(str_split[i][j] == '$'){
                    right_flag = 1;
                    break;
                }
            }else{
                if(str_split[i][j] == "\"" || str_split[i][j] == '\''){
                    str_type.push("string");
                    right_flag = 0;
                    break;
                }else if(str_split[i][j] >= "0" && str_split[i][j] <= "9"){
                    str_type.push("integer");
                    right_flag = 0;
                    break;
                }
            }
        }
    }

    //加雙引號
    //console.log(str_type);
    var str_index = 0;
    for(let i = 0; i< str_type.length; i++){
        if(str_type[i] == 'integer'){
            for (let j = str_index; j < str.length; j++){
                if(str[j] == "}"){
                    str_index = j+1;
                    break;
                }
            }
        }else{
            for (let j = str_index; j < str.length; j++){
                if (str[j] == "$"){
                    str = str.substring(0,j)+"\""+str.substring(j,str.length);
                    j++; //加在前頭，會一直重複
                }else if(str[j] == "}"){
                    str = str.substring(0,j+1)+"\""+str.substring(j+1,str.length);
                    str_index = j+1;
                    break;
                }
            }
        }
    }
    //console.log(str);
    
    return str;
}