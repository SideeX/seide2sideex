import { openCommandFunc } from "./recordCommand/openCommandFun";

export const caseToFunc: { [key: string]: any } = {
    open: openCommandFunc,
    setWindowSize: (a: string) => { console.log(a) },
    dragAndDropToObject: (a: string) => { console.log(a) },
}