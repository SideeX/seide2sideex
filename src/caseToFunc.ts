import { openCommandFunc } from './recordCommand/openCommandFunc';
import { addSelectionFunc } from './recordCommand/addSelectionFunc';
import { removeSelectionFunc } from './recordCommand/removeSelectionFunc';
import { answerOnNextPromptCommandFunc } from './recordCommand/answerOnNextPromptCommandFunc';
import { assertPromptCommandFunc } from './recordCommand/assertPromptCommandFunc';
import { dragAndDropToObjectFunc } from './recordCommand/dragAndDropToObjectFunc';
import { setWindowSizeFunc } from './recordCommand/setWindowSizeFunc';
import { assertAlertFunc } from './recordCommand/assertAlertFunc';
import { assertConfirmationFunc } from './recordCommand/assertConfirmationFunc';
import { assertElementPresentFunc } from './recordCommand/assertElementPresentFunc';
import { assertTextFunc } from './recordCommand/assertTextFunc';
import { assertTitleFunc } from './recordCommand/assertTitleFunc';
import { assertValueFunc } from './recordCommand/assertValueFunc';
import { defaultFunc } from './recordCommand/defaultFunc';
import { Record } from './struct/sideexStruct';
import { Command } from './struct/seleniumStruct';
import { clickAtFunc } from './recordCommand/clickAtFunc';
import { echoFunc } from './recordCommand/echoFunc';
import { storeFunc } from './recordCommand/storeFunc';
import { closeFunc } from './recordCommand/closeFunc';
import { doubleClickAtFunc } from './recordCommand/doubleClickAtFunc';
import { sendKeysFunc } from './recordCommand/sendKeysFunc';
import { storeTextFunc } from './recordCommand/storeTextFunc';
import { storeTitleFunc } from './recordCommand/storeTitleFunc';
import { selectFrameFunc } from './recordCommand/selectFrameFunc';

//add different function to different command
export const commandFunc: {
    [key: string]: (
        command: Command,
        isCommandComment: boolean,
        urlArr?: string[],
    ) => Record;
} = {
    open: openCommandFunc,
    addSelection: addSelectionFunc,
    answerOnNextPrompt: answerOnNextPromptCommandFunc,
    assert: defaultFunc,
    assertAlert: assertAlertFunc,
    asserChecked: defaultFunc,
    assertConfirmation: assertConfirmationFunc,
    assertEditable: defaultFunc,
    assertElementPresent: assertElementPresentFunc,
    assertElementNotPresent: defaultFunc,
    assertNotChecked: defaultFunc,
    assertNotSelectedValue: defaultFunc,
    assertPrompt: assertPromptCommandFunc,
    assertSelectedValue: defaultFunc,
    assertSelectedLabel: defaultFunc,
    assertText: assertTextFunc,
    assertTitle: assertTitleFunc,
    assertValue: assertValueFunc,
    check: defaultFunc,
    chooseCancelOnNextConfirmation: defaultFunc,
    chooseCancelOnNextPrompt: defaultFunc,
    chooseOkOnNextConfirmation: defaultFunc,
    click: clickAtFunc,
    clickAt: clickAtFunc,
    close: closeFunc,
    debugger: defaultFunc,
    doubleClick: doubleClickAtFunc,
    doubleClickAt: doubleClickAtFunc,
    dragAndDropToObject: dragAndDropToObjectFunc,
    echo: echoFunc,
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
    removeSelection: removeSelectionFunc,
    repeatIf: defaultFunc,
    run: defaultFunc,
    runScript: defaultFunc,
    select: defaultFunc,
    selectFrame: selectFrameFunc,
    selectWindow: defaultFunc,
    sendKeys: sendKeysFunc,
    setSpeed: defaultFunc,
    setWindowSize: setWindowSizeFunc,
    store: storeFunc,
    storeAttribute: defaultFunc,
    storeJson: defaultFunc,
    storeText: storeTextFunc,
    storeTitle: storeTitleFunc,
    storeValue: storeTextFunc, //same as storeTextFunc
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
    while: defaultFunc,
};
