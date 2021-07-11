import { Command } from '../struct/seleniumStruct';
import { Record } from '../struct/sideexStruct';

export function addSelectionFunc(
    seleniumCommand: Command,
    isCommandComment: boolean,
): Record {
    console.log(seleniumCommand);
    // {
    //     "name": "addSelection",
    //     "target": {
    //       "usedIndex": 0,
    //       "options": [
    //         {
    //           "type": "id",
    //           "value": "id=fruits"
    //         },
    //         {
    //           "type": "name",
    //           "value": "name=fruits"
    //         },
    //         {
    //           "type": "xpath:position",
    //           "value": "//select[1]"
    //         },
    //         {
    //           "type": "xpath:attributes",
    //           "value": "//select[@id='fruits']"
    //         },
    //         {
    //           "type": "css:position",
    //           "value": "css=#fruits"
    //         }
    //       ],
    //       "tac": ""
    //     },
    //     "value": {
    //       "usedIndex": 0,
    //       "options": [
    //         {
    //           "type": "other",
    //           "value": "Peach"
    //         }
    //       ],
    //       "tac": ""
    //     },
    //     "pwt": {
    //       "pbw": 0,
    //       "paw": 0,
    //       "prw": 0,
    //       "pdw": 0
    //     },
    //     "comment": false
    //   }

    const sideexRecord: Record = {
        name: seleniumCommand.command,
        target: {
            usedIndex: 0,
            options: [
                {
                    type: 'tempType',
                    value: 'tempValue',
                },
            ],
            tac: '',
        },
        value: {
            usedIndex: 1,
            options: [
                {
                    type: 'tempType',
                    value: 'tempValue',
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
    return sideexRecord;
}
