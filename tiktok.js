require('dotenv').config();
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.tiktok.com');
    await driver.sleep(Math.random() * 10000 + 3000);

    //remove the line below if not in EU
    await driver.findElement(By.xpath("//*[ text() = 'Accept all' ]")).click();
    await driver.sleep(Math.random() * 10000 + 3000);

    await driver.findElement(By.xpath("//*[ text() = 'Log in' ]")).click();
    await driver.sleep(Math.random() * 3000 + 3000);

    await driver.findElement(By.xpath("//*[ text() = 'Use phone / email / username' ]")).click();
    await driver.sleep(Math.random() * 3000 + 3000);

    // omit the phone - log in with email or username

    // email
    // password

    // log in

    // visit ijustine

    // get first video

    // get a random comment

    // follow them
  } finally {
    await driver.quit();
  }
})();
