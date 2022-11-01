const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get("https://search.jobs.barclays/");
        await driver.sleep(3000);
        await driver
            .findElement(By.xpath("//*[ text() = 'Accept All' ]"))
            .click();
        await driver
            .findElement(By.name("k"))
            .sendKeys("QA developer", Key.ENTER);
        await driver.takeScreenshot(); // todo: research into screenshots, where to save files
        await driver.sleep(3000);
        const numJobResults = await driver
            .findElement(By.className("result-count__number"))
            .getText();
        console.log(numJobResults, "QA roles");
    } finally {
        await driver.quit();
    }
})();

(async function example() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get("https://search.jobs.barclays/");
        await driver.sleep(3000);
        await driver
            .findElement(By.xpath("//*[ text() = 'Accept All' ]"))
            .click();
        await driver
            .findElement(By.name("k"))
            .sendKeys("ServiceNow", Key.ENTER);
        await driver.takeScreenshot(); // todo: research into screenshots, where to save files
        await driver.sleep(3000);
        const numJobResults = await driver
            .findElement(By.className("result-count__number"))
            .getText();
        console.log(numJobResults, "ServiceNow roles");
    } finally {
        await driver.quit();
    }
})();
