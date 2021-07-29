import { openCommandFunc } from '../src/recordCommand/openCommandFunc';
import { Command } from '../src/struct/seleniumStruct';
import { Record } from '../src/struct/sideexStruct';
import { ConvertFuncParameter } from '../src/struct/convertFuncParameterStruct';

const expectUrls = 'https://sideex.github.io/';
const expectHttpUrls = 'http://info.cern.ch/';

const openCommnad: Command = {
    id: '123-456',
    comment: '',
    command: 'open',
    target: '/example/webpage_under_test/select-multiple-option.html',
    targets: [],
    value: '',
}

const openHttpCommnad: Command = {
    id: '456-789',
    comment: '',
    command: 'open',
    target: '/hypertext/WWW/News/9211.html',
    targets: [],
    value: '',
}

const openExpected: Record = {
    name: openCommnad.command,
    target: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: 'https://sideex.github.io' + openCommnad.target,
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
}

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
}

const openParameters: ConvertFuncParameter = {
    command: openCommnad,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'openTest',
    urlArr: [expectUrls]
}

const openHttpParameters: ConvertFuncParameter = {
    command: openHttpCommnad,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'openHttpTest',
    urlArr: [expectHttpUrls]
}

const openActual = openCommandFunc(openParameters);
const openHttpActual = openCommandFunc(openHttpParameters);

test('open https test', () => {
    expect(openActual).toMatchObject(openExpected);
});

test('open http test', () => {
    expect(openHttpActual).toMatchObject(openHttpExpected);
});
