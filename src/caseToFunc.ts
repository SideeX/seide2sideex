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
import { selectWindowFunc } from './recordCommand/selectWindowFunc';
import { typeFunc } from './recordCommand/typeFunc';
import { executeScriptFunc } from './recordCommand/executeScriptFunc';
import { executeAsyncScriptFunc } from './recordCommand/executeAsyncScriptFunc';
import { runScriptFunc } from './recordCommand/runScriptFunc';
import { pauseFunc } from './recordCommand/pauseFunc';
import { verifyTextFunc } from './recordCommand/verifyTextFunc';
import { verifyTitleFunc } from './recordCommand/verifyTitleFunc';
import { mouseOverFunc } from './recordCommand/mouseOverFunc';
import { mouseUpAtFunc } from './recordCommand/mouseUpAtFunc';
import { mouseOutFunc } from './recordCommand/mouseOutFunc';
import { mouseDownAtFunc } from './recordCommand/mouseDownAtFunc';
import { mouseMoveAtFunc } from './recordCommand/mouseMoveAtFunc';
import { chooseCancelOnNextConfirmationFunc } from './recordCommand/chooseCancelOnNextConfirmationFunc';
import { chooseCancelOnNextPromptFunc } from './recordCommand/chooseCancelOnNextPromptFunc';
import { chooseOkOnNextConfirmationFunc } from './recordCommand/chooseOkOnNextConfirmationFunc';
import { checkFunc } from './recordCommand/checkFunc';
import { runFunc } from './recordCommand/runFunc';
import { ConvertFuncParameter } from './struct/convertFuncParameterStruct';
import { elseFunc } from './recordCommand/elseFunc';
import { endFunc } from './recordCommand/endFunc';
import { ifFunc } from './recordCommand/ifFunc';
import { elseIfFunc } from './recordCommand/elseIfFunc';
import { whileFunc } from './recordCommand/whileFunc';
import { editContentFunc } from './recordCommand/editContentFunc';
import { forEachFunc } from './recordCommand/forEachFunc';
import { tempEndFunc } from './recordCommand/tempEndFunc';
import { selectFunc } from './recordCommand/selectFunc';
import { verifyElementPresentFunc } from './recordCommand/verifyElementPresentFunc';
import { uncheckFunc } from './recordCommand/uncheckFunc';
import { setSpeedFunc } from './recordCommand/setSpeedFunc';
import { waitForElementNotPresentFunc } from './recordCommand/waitForElementNotPresentFunc';
import { waitForElementNotVisibleFunc } from './recordCommand/waitForElementNotVisibleFunc';
import { waitForElementPresentFunc } from './recordCommand/waitForElementPresentFunc';
import { waitForElementVisibleFunc } from './recordCommand/waitForElementVisibleFunc';
import { verifyChecked_and_notCheckedFunc } from './recordCommand/verifyChecked_and_notCheckedFunc';

//add different function to different command
export const commandFunc: {
    [key: string]: (parameters: ConvertFuncParameter) => Record | any | null;
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
    check: checkFunc,
    chooseCancelOnNextConfirmation: chooseCancelOnNextConfirmationFunc,
    chooseCancelOnNextPrompt: chooseCancelOnNextPromptFunc,
    chooseOkOnNextConfirmation: chooseOkOnNextConfirmationFunc,
    click: clickAtFunc,
    clickAt: clickAtFunc,
    close: closeFunc,
    debugger: defaultFunc,
    doubleClick: doubleClickAtFunc,
    doubleClickAt: doubleClickAtFunc,
    dragAndDropToObject: dragAndDropToObjectFunc,
    echo: echoFunc,
    editContent: editContentFunc,
    else: elseFunc,
    elseIf: elseIfFunc,
    end: tempEndFunc,
    executeScript: executeScriptFunc,
    executeAsyncScript: executeAsyncScriptFunc,
    forEach: forEachFunc,
    if: ifFunc,
    pause: pauseFunc,
    mouseDown: mouseDownAtFunc,
    mouseDownAt: mouseDownAtFunc,
    mouseMoveAt: mouseMoveAtFunc,
    mouseOut: mouseOutFunc,
    mouseOver: mouseOverFunc,
    mouseUp: mouseUpAtFunc,
    mouseUpAt: mouseUpAtFunc,
    removeSelection: removeSelectionFunc,
    repeatIf: defaultFunc,
    run: runFunc,
    runScript: runScriptFunc,
    select: selectFunc,
    selectFrame: selectFrameFunc,
    selectWindow: selectWindowFunc,
    sendKeys: sendKeysFunc,
    setSpeed: setSpeedFunc,
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
    type: typeFunc,
    uncheck: uncheckFunc,
    verify: defaultFunc,
    verifyChecked: verifyChecked_and_notCheckedFunc,
    verifyEditable: defaultFunc,
    verifyElementPresent: verifyElementPresentFunc,
    verifyElementNotPresent: defaultFunc,
    verifyNotChecked: verifyChecked_and_notCheckedFunc,
    verifyNotEditable: defaultFunc,
    verifyNotSelectedValue: defaultFunc,
    verifyNotText: defaultFunc,
    verifySelectedLabel: defaultFunc,
    verifySelectedValue: defaultFunc,
    verifyText: verifyTextFunc,
    verifyTitle: verifyTitleFunc,
    verifyValue: verifyTextFunc,
    waitForElementEditable: defaultFunc,
    waitForElementNotEditable: defaultFunc,
    waitForElementNotPresent: waitForElementNotPresentFunc,
    waitForElementNotVisible: waitForElementNotVisibleFunc,
    waitForElementPresent: waitForElementPresentFunc,
    waitForElementVisible: waitForElementVisibleFunc,
    waitForTextLocatorText: defaultFunc,
    webdriverAnswerOnVisiblePrompt: defaultFunc,
    webdriverChooseCancelOnVisibleConfirmation: defaultFunc,
    webdriverChooseCancelOnVisiblePrompt: defaultFunc,
    webdriverChooseOkOnVisibleConfirmation: defaultFunc,
    while: whileFunc,
};
