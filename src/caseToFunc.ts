import { openCommandFunc } from './recordCommand/openCommandFun';
import { Record } from './struct/sideexStruct';
import { Command } from './struct/seleniumStruct';

export const caseToFunc: { [key: string]: (p: Command) => Record } = {
    open: openCommandFunc,
};
