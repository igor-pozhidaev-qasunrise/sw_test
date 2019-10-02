const c = require('../constant.js');

const { I, CS } = inject();

module.exports = {

  enterPhoneNumber(locator, phoneNumber){
    CS.fillField(locator, phoneNumber);
  },

  selectCountry(country) {
    CS.click('//div[@class="sw-phone-country"]');
    CS.click(`//span[@class="sw-phone-country__flag" and ../span[contains(text(),"${country}")]]`);
  },

};
