const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get(
            "https://www.barclaycard.co.uk/personal/credit-cards/"
        );
        await driver.sleep(3000);
        await driver
            .findElement(By.xpath("//*[ text() = 'Accept All' ]"))
            .click();
        await driver.sleep(3000);
        await driver
            .findElement(By.xpath("//*[ text() = 'No thanks' ]"))
            .click();
        await driver.sleep(3000);
        const headings = await driver.findElements(By.css("h2"));

        for (let heading of headings) [console.log(await heading.getText())];
    } finally {
        await driver.quit();
    }
})();
