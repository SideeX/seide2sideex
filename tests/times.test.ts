import { timesFunc } from '../src/recordCommand/timesFunc';
import { Command } from '../src/struct/seleniumStruct';
import { Record } from '../src/struct/sideexStruct';
import { ConvertFuncParameter } from '../src/struct/convertFuncParameterStruct';

const timesCommand: Command = {
    id: '1',
    comment: '',
    command: 'times',
    target: '3',
    targets: [],
    value: '',
};

const timesExpected: Record = {
    name: 'WHILE',
    target: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: '1==1',
            },
        ],
        tac: '',
    },
    value: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: timesCommand.target,
            },
        ],
        tac: '',
    },
    pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
    comment: false,
};

const timesParameters: ConvertFuncParameter = {
    command: timesCommand,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'timesTest',
    isElseIfCommand: false,
    doRepeat: {
        doCount: 0,
        currentDo: 0,
        doRecords: [],
    },
};

const timesActual = timesFunc(timesParameters);

test('times test', () => {
    expect(timesActual).toMatchObject(timesExpected);
});
