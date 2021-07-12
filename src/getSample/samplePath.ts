//command name 對應 sample path
/*
因為覺得 path name 都是 './seleniumSamples/{command name}.side'
所以覺得改寫成 function 回傳一個串好的字就可以了
這樣以後只要檔名取跟 command name 一樣就好 不需要再來這裡加
*/

export const SamplePath = (commandName: string): string => {
    return `./seleniumSamples/${commandName}.side`;
}



// export const SamplePath: { [key: string]: string } = {
//     dragAndDropToObject: './seleniumSamples/dargAndDropToObject.side',
//     multiSuite: './seleniumSamples/multisuite.side',
//     addSelection: './seleniumSamples/addSelection.side',
//     answerOnNextPrompt: './seleniumSamples/answerOnNextPrompt.side',
//     open: './seleniumSamples/open.side',
//     openWithSlashSymbol: './seleniumSamples/openWithSlashSymbol.side',
//     removeSelection: './seleniumSamples/removeSelection.side',
//     click: './seleniumSamples/click.side',
//     assertAlert: './seleniumSamples/assertAlert.side',
//     assertConfirmation: './seleniumSamples/assertConfirmation.side',
//     assertElementPresent: './seleniumSamples/assertElementPresent.side',
//     assertTest: './seleniumSamples/assertTest.side',
//     assertTitle: './seleniumSamples/assertTitle.side',
//     assertValue: './seleniumSamples/assertValue.side',
//     setWindowSize: './seleniumSamples/setWindowSize.side',
//     echo: './seleniumSamples/echo.side',
//     store: './seleniumSamples/store.side',
//     close: './seleniumSamples/close.side'
// };
