
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JScriptAlertPage extends Page {
    /**
     * define selectors using getter methods
     */
    //try to get the first button element

    get result() { 
        return $('#result'); 
    }
    get buttonAlert() { 
        return $('button[onclick="jsAlert()"]'); 
        
    }
    //<button onclick="jsConfirm()">Click for JS Confirm</button>
    get buttonConfirm() { 
        return $('button=Click for JS Confirm'); 
    }
    get buttonPrompt() { 
        return $('button[onclick="jsPrompt()"]'); 
    }

    async clickAlertButton() {
        await (await this.buttonAlert).click();
    }
    async clickConfirmButton() {
        await (await this.buttonConfirm).click();
    }
    async clickPromptButton() {
        await (await this.buttonPrompt).click();
    }
    async acceptAlert() {
        await browser.acceptAlert();
    }
    async dismissAlert() {
        await browser.dismissAlert();
    }
    async sendTextToAlert(text) {
        await browser.sendAlertText(text);
    }
    // 
    /**
     * overwrite specific options to adapt it to page object
     */
    // This is where we instruct which page to open from the test site: 
    //http://the-internet.herokuapp.com/javascript_alerts
    open() {
        return super.open('javascript_alerts');
    }
}


//NEW and works with NodeJS 18 and above
export default new JScriptAlertPage();


// get clickJSButton1() {
    //    // inspect the page and look for CSS id that identifies the button
    //    return $('#content > div > ul > li:nth-child(1) > button'); 
    //  }
     
    //  // this is to press the second button
    //  get clickJSButton2() {
    //     // inspect the page and look for CSS id that identifies the button
    //     return $('#content > div > ul > li:nth-child(2) > button'); 
    //   }
    //   // this is to click on the 3rd button
    //   get clickJSButton3() {
    //     // inspect the page and look for CSS id that identifies the button
    //     return $('#content > div > ul > li:nth-child(3) > button'); 
    //   }  

    //  get buttonPressResult(){
    //      // inspect the page and see if there is a result to pressing the button
    //      return $('#result'); 
    //  }
    // // you have to wait that you get a result of what was pressed
    //  async pressAkey (input) {
    //     await this.clickJSButton1.setValue(input);


    // }
