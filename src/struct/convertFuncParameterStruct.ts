import { Record } from './sideexStruct';
import { Command } from './seleniumStruct';

//parameters for convertFunc
export interface ConvertFuncParameter {
    command: Command;
    commands: Command[];
    commandIndex: number;
    isElseIfCommand: boolean;
    isCommandComment: boolean;
    countNum: {
        forEach: number;
        IF: number;
        executeScript: number;
        executeAsyncScript: number;
        submit: number;
        run: number;
    };
    suiteName: string;
    libWindowHandle?: (string | string[] | undefined)[][];
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
    doRepeat: {
        doCount: number;
        currentDo: number;
        doRecords: Record[][];
    };
    suitesName: string[];
    testSuiteDetail: { [testName: string]: string[] };
    arrayStoreForTimes: string[];
    countTimesCommand: number;
}
