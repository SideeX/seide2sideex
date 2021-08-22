import { Record } from './struct/sideexStruct';
// function use for generate 'store command' who use by 'times'
export function storeVarForTimesFunc(arrayOfStoreVariable: string[]): Record[] {
    const sideexStoreRecord: Record[] = [];
    arrayOfStoreVariable.forEach((storeVariable) => {
        const tmpJson: Record = {
            name: 'store',
            target: {
                usedIndex: 0,
                options: [
                    {
                        type: 'others',
                        value: '0',
                    },
                ],
                tac: '',
            },
            value: {
                usedIndex: 0,
                options: [
                    {
                        type: 'other',
                        value: storeVariable,
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
            comment: false,
        };
        sideexStoreRecord.push(tmpJson);
    });

    return sideexStoreRecord;
}
