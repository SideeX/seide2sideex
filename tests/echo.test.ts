import { echoFunc } from '../src/recordCommand/echoFunc';
import { Command } from '../src/struct/seleniumStruct';
import { Record } from '../src/struct/sideexStruct';
import { ConvertFuncParameter } from '../src/struct/convertFuncParameterStruct';

const echoCommand: Command = {
    id: '123-456',
    comment: '',
    command: 'echo',
    target: 'Hello world',
    targets: [],
    value: '',
}

const echoExpected: Record = {
    name: echoCommand.command,
    target: {
        usedIndex: 0,
        options: [
            {
                type: 'other',
                value: echoCommand.target,
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

const echoParameters: ConvertFuncParameter = {
    command: echoCommand,
    commands: [],
    commandIndex: 0,
    isCommandComment: false,
    suiteName: 'ehcoTest',
}

const echoActual = echoFunc(echoParameters);

test('echo test', () => {
    expect(echoActual).toMatchObject(echoExpected);
});
