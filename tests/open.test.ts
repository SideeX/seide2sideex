import { openCommandFunc } from '../src/recordCommand/openCommandFunc';
import { Command } from '../src/struct/seleniumStruct';
import { Record } from '../src/struct/sideexStruct';
import { ConvertFuncParameter } from '../src/struct/convertFuncParameterStruct';

const expectHttpsUrls = 'https://sideex.github.io/';
const expectHttpUrls = 'http://info.cern.ch/';
const slashUrls = 'https://sideex.io/';

const openHttpsCommand: Command = {
    id: '123-456',
    comment: '',
    command: 'open',
    target: '/example/webpage_under_test/select-multiple-option.html',
    targets: [],
    value: '',
};

const openHttpCommnad: Command = {
    id: '456-789',
    comment: '',
    command: 'open',
    target: '/hypertext/WWW/News/9211.html',
    targets: [],
    value: '',
};

const openSlashCommand: Command = {
    id: '456-789',
    comment: '',
    command: 'open',
    target: '/',
    targets: [],
    value: '',
};

const openHttpsExpected: Record = {
    name: openHttpsCommand.command,
    target: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: 'https://sideex.github.io' + openHttpsCommand.target,
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
    pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
    comment: false,
};

const openHttpExpected: Record = {
    name: openHttpCommnad.command,
    target: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: 'http://info.cern.ch' + openHttpCommnad.target,
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
    pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
    comment: false,
};

const openSlashExpected: Record = {
    name: openHttpCommnad.command,
    target: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: 'https://sideex.io/',
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
    pwt: { pbw: 0, paw: 0, prw: 0, pdw: 0 },
    comment: false,
};

const openHttpsParameters: ConvertFuncParameter = {
    command: openHttpsCommand,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'openTest',
    urlArr: [expectHttpsUrls],
    isElseIfCommand: false,
    doRepeat: {
        doCount: 0,
        currentDo: 0,
        doRecords: [],
    },
};

const openHttpParameters: ConvertFuncParameter = {
    command: openHttpCommnad,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'openHttpTest',
    urlArr: [expectHttpUrls],
    isElseIfCommand: false,
    doRepeat: {
        doCount: 0,
        currentDo: 0,
        doRecords: [],
    },
};

const openSlashParameters: ConvertFuncParameter = {
    command: openSlashCommand,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'openSlashTest',
    urlArr: [slashUrls],
    isElseIfCommand: false,
    doRepeat: {
        doCount: 0,
        currentDo: 0,
        doRecords: [],
    },
};

// test

//const cases = [openHttpsParameters, openHttpParameters];

const openHttpsActual = openCommandFunc(openHttpsParameters);
const openHttpActual = openCommandFunc(openHttpParameters);
const openSlashActual = openCommandFunc(openSlashParameters);

describe('open test ', () => {
    test('https', () => {
        expect(openHttpsActual).toMatchObject(openHttpsExpected);
    });
    test('http', () => {
        expect(openHttpActual).toMatchObject(openHttpExpected);
    });
    test('slash symbol', () => {
        expect(openSlashActual).toMatchObject(openSlashExpected);
    });
});
