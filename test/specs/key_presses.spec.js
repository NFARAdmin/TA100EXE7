//OLD and works with NodeJS16
// const KeyPressesPage = require('../pageobjects/key_press.page');

//NEW and works with NodeJS 18 and above
import KeyPressesPage from '../pageobjects/key_press.page.js';

describe('My Key Press application', () => {
    it('should display what is entered into the input', async () => {
        await KeyPressesPage.open();

        await KeyPressesPage.pressAkey('C');

        await expect(KeyPressesPage.keyPressResult).toHaveTextContaining(
            'You entered: C');
    });
});
