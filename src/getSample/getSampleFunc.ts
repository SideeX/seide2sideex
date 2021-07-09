import { readFileSync } from "fs";
import { SeleniumSide } from "../struct/seleniumStruct";
import { SamplePath } from "./samplePath";

export const getSample = (command: string): SeleniumSide => {
    const file = readFileSync(SamplePath[command], "utf-8");
    return JSON.parse(file);
};

// 改成你要的 command 的名子 build 完 npm run test 就可以 console 測試看是不是吃到對的檔案
// console.log(getSample("dragAndDropToObject"));
