import { openCommandFunc } from './recordCommand/openCommandFunc';
import { defaultFunc } from './recordCommand/defaultFunc';
import { Record } from './struct/sideexStruct';
import { Command } from './struct/seleniumStruct';

//add different function to different command
export const commandFunc: {
    [key: string]: (command: Command, isCommandComment: boolean) => Record;
} = {
    open: openCommandFunc,
    addSelection: defaultFunc,
    answerOnNext: defaultFunc,
    assert: defaultFunc,
    assertAlert: defaultFunc,
    asserChecked: defaultFunc,
    assertConfirmation: defaultFunc,
    assertEditable: defaultFunc,
    assertElementPresent: defaultFunc,
    assertElementNotPresent: defaultFunc,
    assertNotChecked: defaultFunc,
    assertNotSelectedValue: defaultFunc,
    assertPrompt: defaultFunc,
    assertSelectedValue: defaultFunc,
    assertSelectedLabel: defaultFunc,
    assertText: defaultFunc,
    assertTitle: defaultFunc,
    assertValue: defaultFunc,
    check: defaultFunc,
    chooseCancelOnNextConfirmation: defaultFunc,
    chooseCancelOnNextPrompt: defaultFunc,
    chooseOkOnNextConfirmation: defaultFunc,
    click: defaultFunc,
    clickAt: defaultFunc,
    close: defaultFunc,
    debugger: defaultFunc,
    doubleClick: defaultFunc,
    coubleClickAt: defaultFunc,
    dragAndDropToObject: defaultFunc,
    echo: defaultFunc,
    editContent: defaultFunc,
    else: defaultFunc,
    end: defaultFunc,
    executeScript: defaultFunc,
    executeAsyncScript: defaultFunc,
    if: defaultFunc,
    mouseDown: defaultFunc,
    mouseDownAt: defaultFunc,
    mouseMoveAt: defaultFunc,
    mouseOut: defaultFunc,
    mouseOver: defaultFunc,
    mouseUp: defaultFunc,
    mouseUpAt: defaultFunc,
    pause: defaultFunc,
    removeSelection: defaultFunc,
    repeatIf: defaultFunc,
    run: defaultFunc,
    runScript: defaultFunc,
    select: defaultFunc,
    selectFrame: defaultFunc,
    selectWindow: defaultFunc,
    sendKeys: defaultFunc,
    setSpeed: defaultFunc,
    setWindowSize: defaultFunc,
    store: defaultFunc,
    storeAttribute: defaultFunc,
    storeJson: defaultFunc,
    storeText: defaultFunc,
    storeTitle: defaultFunc,
    storeValue: defaultFunc,
    storeWindowHandle: defaultFunc,
    storeXpathCount: defaultFunc,
    submit: defaultFunc,
    times: defaultFunc,
    type: defaultFunc,
    uncheckLocator: defaultFunc,
    verify: defaultFunc,
    verifyChecked: defaultFunc,
    verifyEditable: defaultFunc,
    verifyElementPresent: defaultFunc,
    verifyElementNotPresent: defaultFunc,
    verifyNotChecked: defaultFunc,
    verifyNotEditable: defaultFunc,
    verifyNotSelectedValue: defaultFunc,
    verifyNotText: defaultFunc,
    verifySelectedLabel: defaultFunc,
    verifySelectedValue: defaultFunc,
    verifyText: defaultFunc,
    verifyTitle: defaultFunc,
    verifyValue: defaultFunc,
    waitForElementEditable: defaultFunc,
    waitForElementNotEditable: defaultFunc,
    waitForElementNotPresent: defaultFunc,
    waitForElementNotVisible: defaultFunc,
    waitForElementPresent: defaultFunc,
    waitForElementVisibleLocator: defaultFunc,
    waitForTextLocatorText: defaultFunc,
    webdriverAnswerOnVisiblePrompt: defaultFunc,
    webdriverChooseCancelOnVisibleConfirmation: defaultFunc,
    webdriverChooseCancelOnVisiblePrompt: defaultFunc,
    webdriverChooseOkOnVisibleConfirmation: defaultFunc,
    while: defaultFunc

};
