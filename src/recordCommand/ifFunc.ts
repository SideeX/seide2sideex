import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';
import { endCount } from './endFunc';

export function ifFunc(parameters: ConvertFuncParameter): Record {
    const seleniumCommand = parameters.command;
    const isCommandComment = parameters.isCommandComment;
    const commandIndex = parameters.commandIndex;
    const commands = parameters.commands;

    var targetSubstr = targetStr(seleniumCommand.target);
    var ifTarget = convertTarget(targetSubstr, commandIndex, commands);

    const sideexRecord: Record = {
        name: 'IF',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: ifTarget,
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
    endCount();
    return sideexRecord;
}

export function targetStr(str: string): string{
    let str_index1 = 0;
    let str_index2 = 0;

    for (let i = 0; i<str.length; i++){
        if(str[i]=="{"){
            str_index1 = i;
        }else if(str[i]=="}"){
            str_index2 = i;
            break
        }
    }

    let subStr = str.substring(str_index1+1, str_index2)
   
    return subStr;
}

export function convertTarget(targetSubstr: string, ifCommandIndex: number, commands: Command[]): string{
    let commandName = "";
    let commandTarget = "";
    let targetType = "string";
    let ifCommandTarget = commands[ifCommandIndex].target;

    for (let i = ifCommandIndex-1; i >= 0; i--){
        if (commands[i].value == targetSubstr){
            commandName = commands[i].command;
            commandTarget = commands[i].target;
            break;
        } 
    }

    for (let i = 0; i < commandTarget.length; i++){
        if (commandTarget[i] >= "0" && commandTarget[i] <= "9"){
            targetType = "number";
            break;
        }  
    }

    if (targetType == "string" && commandName == "executeScript"){
        for (let i = 0; i < ifCommandTarget.length; i++){
            if (ifCommandTarget[i] == "$"){
                ifCommandTarget = ifCommandTarget.substring(0,0)+"\""+ifCommandTarget.substring(0,ifCommandTarget.length);
                i++; //加在前頭，會一直重複
            }else if(ifCommandTarget[i] == "}"){
                ifCommandTarget = ifCommandTarget.substring(0,i+1)+"\""+ifCommandTarget.substring(i+1,ifCommandTarget.length);
            }
        }
    }
    return ifCommandTarget;
}
