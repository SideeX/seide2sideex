import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';
import { ConvertFuncParameter } from '../struct/convertFuncParameterStruct';

let end_num: number[] = [];
let end_list: Record[] = [];

export function endFunc(parameters: ConvertFuncParameter): Record[] {
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

    end_num[end_num.length-1]--;
    end_list.push(sideexRecord);
    
    if(end_num[end_num.length-1] == 0){
        end_num.pop();
        var temp = end_list.slice();
        end_list = [];
        return temp;
    }else{
        return endFunc(parameters);
    }
}

export function endCount(isElseIfCommand:boolean):void{
    if(isElseIfCommand == true){
        end_num[end_num.length-1]++;
    }else{
        end_num.push(1);
    }
}