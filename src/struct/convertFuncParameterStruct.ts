import { Command } from './seleniumStruct';

//parameters for convertFunc
export interface ConvertFuncParameter {
    command: Command;
    isCommandComment: boolean;
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
