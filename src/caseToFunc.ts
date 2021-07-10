import { openCommandFunc } from './recordCommand/openCommandFun';
import { Record } from './struct/sideexStruct';
import { Command } from './struct/seleniumStruct';

//add different function to different command
export const commandFunc: {
    [key: string]: (command: Command, isCommandComment: boolean) => Record;
} = {
    open: openCommandFunc,
};
