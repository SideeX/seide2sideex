import { Test } from "./struct/seleniumStruct";
import { Case, Record } from "./struct/sideexStruct";
import { openCommandFunc } from "./recordCommand/openCommandFun";

export function testToCase(seleniumTest: Test): Case {
    console.log("testName");
    console.log(seleniumTest.name);
    const sideexCase: Case = {
        title: seleniumTest.name,
        enableOnPlaying: true, // always true?
        networkSpeed: 55.33, // random?
        records: [], // later will push some value inside
    };
    seleniumTest.commands.forEach((command) => {
        switch (command.command) {
            case "open":
                sideexCase.records.push(openCommandFunc(command));
                console.log("open");
                break;
            case "clickAt":
                console.log("clickAt");
                break;
            default:
                break;
        }
    });

    return sideexCase;
}
