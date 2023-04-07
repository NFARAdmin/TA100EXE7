import JScriptAlertPage from '../pageobjects/java_alert.page.js';

describe('JavaScript Alerts', () => {
    it('displays an alert when the "Click for JS Alert" button is clicked', async () => {
        await JScriptAlertPage.open();
        await JScriptAlertPage.clickAlertButton();
        await JScriptAlertPage.acceptAlert();
        expect(await JScriptAlertPage.result.getText()).toContain('You successfully clicked an alert');
    });
    it('displays a confirmation when the "Click for JS Confirm" button is clicked', async () => {
        await JScriptAlertPage.open();
        await JScriptAlertPage.clickConfirmButton();
        await JScriptAlertPage.acceptAlert();
        expect(await JScriptAlertPage.result.getText()).toContain('You clicked: Ok');
    });
    it('displays a prompt when the "Click for JS Prompt" button is clicked', async () => {
        const text = 'Hello, world!';
        await JScriptAlertPage.open();
        await JScriptAlertPage.clickPromptButton();
        await JScriptAlertPage.sendTextToAlert(text);
        await JScriptAlertPage.acceptAlert();
        expect(await JScriptAlertPage.result.getText()).toContain(`You entered: ${text}`);
    });
});

// OLD CODE
// describe('My Java Alert application', () => {
//     it('should show me if the button was clicked', async () => {
//         //first open the page
//         await JScriptAlertPage.open();
//         // then press the button 1
//         await JScriptAlertPage.clickJSButton1.click();

        
//         await expect(JScriptAlertPage.buttonPressResult).toHaveTextContaining(
//         'You successfully clicked an alert');
//     });
// });