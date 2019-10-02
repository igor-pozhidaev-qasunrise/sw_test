/* global Helper */
const config = require('./codecept.conf.js');

class Init extends Helper {
  // before/after hooks
  _init() {
    this.config = config;
  }


  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  scrollElementIntoView(selector) {
    this.helpers.WebDriver.browser.execute((elSelector) => {
      /* global document, XPathResult */
      try {
        document.evaluate(elSelector, document, null,
          XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView();
      } catch (err) {
        document.querySelector(elSelector).scrollIntoView();
      }
    }, selector);
  }
}

module.exports = Init;
