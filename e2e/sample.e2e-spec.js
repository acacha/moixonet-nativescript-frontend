const nsAppium = require("nativescript-dev-appium");
const assert = require("chai").assert;
const addContext = require('mochawesome/addContext');

describe("sample scenario", () => {
    let driver;

    before(async function() {
        nsAppium.nsCapabilities.testReporter.context = this;
        driver = await nsAppium.createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should find an element by text", async function () {
        const label = await driver.findElementByText("Welcome", "contains");
        assert.isTrue(await label.isDisplayed());
    });

    it("status", async function () {
        const status = await driver.status();
        console.log(status)
    });
});

// NOTES ON SPECS
// https://www.nativescript.org/blog/start-testing-your-nativescript-apps-properly
// https://gist.github.com/jeremypele/1dcb3ad317082351a28d5ac0b293cea8

// COMPONENTS DISPLAYED/HIDEEN

// SNAPSHOTS

// it('compare screen', async () => {
//     assert.isTrue(await driver.compareScreen('my-whole-screen'))
// })

// SELECTORS:
// - Igual que data-test a nuxt -> aquí automationText
//
// <Button automationText="loginFormSubmit" class="submit btn-primary btn-rounded-sm" text="Submit" (tap)="onSubmit()"></Button>

// Aprofitem el layout:
// - Canviar Home per Canals: la home mostra llista canals subscrits
// - Browse: no cal
// - Search: buscador de canals
// - Settings: TODO
//
// HOME PAGE
// - Title Page: "Els meus Canals"
// - Zero content Page: no hi ha canals
// - CTA: Buscar un nou canal: Botó centrat cerar nou canals
//
//
// SEARCH Channel
// -
