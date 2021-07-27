import { IndexType } from 'typescript';
import { Command, Test } from './seleniumStruct';

//parameters for convertFunc
export interface ConvertFuncParameter {
    command: Command;
    commands: Command[];
    commandIndex: number;
    isCommandComment: boolean;
    countNum?: { forEach: number };
    suiteName: string;
    libWindowHandle?: string[];
    urlArr?: string[] | undefined;
    mouseCord?: {
        StartPoint: {
            X: number;
            Y: number;
        };
        PrevPoint: {
            X: number;
            Y: number;
        };
        Movements: { TD: number; OX: number; OY: number }[];
    };
}
