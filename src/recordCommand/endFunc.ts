import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

let end_num: number = 0;
let end_list: Record[] = [];

export function endFunc(parameters: ConvertFuncParameter): any {
    const isCommandComment = parameters.isCommandComment;
    const commandIndex = parameters.commandIndex;
    const commands = parameters.commands;
      
    const sideexRecord: Record = {
        name: 'END',
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'other',
                    value: '',
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
    end_num--;
    if (commands.length == commandIndex+1){
        if(end_num == 0){
            end_num = 1;
            end_list.push(sideexRecord);
            return end_list;
        }else{
            end_list.push(sideexRecord);
            return endFunc(parameters);
        }
    }else if (commands[commandIndex+1].command != "if" || "elseIf" || "else"){
        if(end_num == 0){
            end_num = 1;
            end_list.push(sideexRecord);
            return end_list;
        }else{
            end_list.push(sideexRecord);
            return endFunc(parameters);
        }
    }else{
        return sideexRecord;
    }
}
export function endCount():void{
    end_num++;
}