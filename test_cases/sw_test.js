const c = require('../constant.js');
const testData = {
  country: "Россия",
  countryCode : "+7",
  phoneNumber:"(999) 555 22-22",
};

Feature('Studwork');

Before((I) => {
  I.amOnPage('/');
  I.waitForVisible('//div[@class="phone"]', c.TIMEOUT);
});

Scenario('SwPhone component is available', (I) => {
  I.waitForVisible('//input[@placeholder="Номер телефона"]', c.TIMEOUT);
  I.waitForText('номер не указан', c.TIMEOUT, '//div[@class="phone__print"]');
});

Scenario('User can enter Russian phone number', (I, SwPhone) => {
  SwPhone.selectCountry(testData.country);
  SwPhone.enterPhoneNumber('//input[@class="sw-phone-number__input"]', testData.phoneNumber);
  I.waitForText(testData.countryCode + ` ` + testData.phoneNumber, c.TIMEOUT, '//div[@class="phone__print"]');
});

Scenario('User can change the country and change to original with filled phone number', (I, SwPhone) => {
  SwPhone.selectCountry(testData.country);
  SwPhone.enterPhoneNumber('//input[@class="sw-phone-number__input"]', testData.phoneNumber);
  I.waitForText(testData.countryCode + ` ` + testData.phoneNumber, c.TIMEOUT, '//div[@class="phone__print"]');
  SwPhone.selectCountry("Беларусь");
  SwPhone.selectCountry(testData.country);
  I.waitForText(testData.countryCode + ` ` + testData.phoneNumber, c.TIMEOUT, '//div[@class="phone__print"]');
});
