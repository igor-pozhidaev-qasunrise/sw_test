const c = require('./constant.js');

const { I } = inject();

module.exports = {

  checkElement(locator){
    I.waitForElement(locator, c.TIMEOUT)
    I.scrollElementIntoView(locator);
    I.waitForVisible(locator, c.TIMEOUT)
  },

  click(locator) {
    this.checkElement(locator);
    I.click(locator);
  },

  fillField(locator, data){
    this.checkElement(locator);
    I.waitForEnabled(locator, c.TIMEOUT);
    I.fillField(locator, data);
  },

};
