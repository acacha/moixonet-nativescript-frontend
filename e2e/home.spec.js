const nsAppium = require('nativescript-dev-appium')
const assert = require('chai').assert
// eslint-disable-next-line no-unused-vars
const addContext = require('mochawesome/addContext')

describe('home', () => {
  let driver

  before(async function () {
    nsAppium.nsCapabilities.testReporter.context = this
    driver = await nsAppium.createDriver()
  })

  after(async function () {
    await driver.quit()
    console.log('Quit driver!')
  })

  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
      await driver.logTestArtifacts(this.currentTest.title)
    }
  })

  it('compare screen', async () => {
    assert.isTrue(await driver.compareScreen('home-screen'))
  })

  it("show 'Els meus canals' on action bar title", async function () {
    const label = await driver.findElementByText('Els meus canals', 'contains')
    assert.isTrue(await label.isDisplayed())
    assert.isTrue(await driver.compareElement(label, 'action_bar_label1'))
  })

  it("show 'Els meus canals' on action bar title alt", async function () {
    const actionBarLabel = await driver.findElementByAccessibilityId('action_bar_label')
    assert.isTrue(await driver.compareElement(actionBarLabel, 'action_bar_label'))
  })

  it('Shows left drawer with nav when clicking on hamburguer icon', async function () {
    const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
    // const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
    await hamburguerIcon.click()
    assert.isTrue(await driver.compareScreen('home-screen-with-navigation-bar'))
  })

  it('Can navigate to home', async function () {
    const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
    hamburguerIcon.click()
    const navLinkHome = await driver.findElementByText('Home', 'contains')
    assert.isTrue(await navLinkHome.isDisplayed())
    assert.isTrue(await driver.compareElement(navLinkHome, 'nav_link_home'))
    // navLinkHome.tap() // DEPRECATED
    navLinkHome.click()
    // ASSERT SHOW HOME
  })

  // it("show 'Els meus canals' on action bar title alt1", async function () {
  //   const actionBarLabel1 = await driver.findElementByAccessibilityId('action_bar_label')
  //   const actionBarLabel1text = actionBarLabel1.text()
  //   console.log(actionBarLabel1text)
  //   // assert.isString(actionBarLabel1text)
  //   assert.equal(actionBarLabel1text, 'Els meus canals')
  // })
  //
  // it('Shows left drawer with nav when clicking on hamburguer icon', async function () {
  //   const hamburguerIcon = await driver.findElementByAutomationText('hamburguer_icon')
  //   // const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
  //   hamburguerIcon.hamburguerIcon.click()
  //   assert.isTrue(await driver.compareScreen('home-screen-with-navigation-bar'))
  // })
  //
  // it('Shows left drawer with nav when clicking on hamburguer icon alt0', async function () {
  //   const hamburguerIcon = await driver.findElementByName('hamburguer_icon')
  //   // const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
  //   hamburguerIcon.hamburguerIcon.click()
  //   assert.isTrue(await driver.compareScreen('home-screen-with-navigation-bar'))
  // })
  //
  // it('Shows left drawer with nav when clicking on hamburguer icon alt', async function () {
  //   const hamburguerIcon = await driver.findElementByClassName('hamburguer_icon')
  //   // const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
  //   hamburguerIcon.hamburguerIcon.click()
  //   assert.isTrue(await driver.compareScreen('home-screen-with-navigation-bar'))
  // })
  //
  // it('Shows left drawer with nav when clicking on hamburguer icon alt 1', async function () {
  //   const hamburguerIcon = await driver.element('id', 'hamburguer_icon')
  //   // const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
  //   hamburguerIcon.hamburguerIcon.click()
  //   assert.isTrue(await driver.compareScreen('home-screen-with-navigation-bar'))
  // })

  // it('Shows left drawer with nav when clicking on hamburguer icon alt1', async function () {
  //   const navLinkHome = await driver.findElementByText('Home', 'contains')
  //   assert.isTrue(await navLinkHome.isDisplayed())
  //   const navLinkSettings = await driver.findElementByText('Settings', 'contains')
  //   assert.isTrue(await navLinkSettings.isDisplayed())
  //
  //   const navLinkHomeAlt = await driver.findElementByAccessibilityId('nav_link_home')
  //   assert.isTrue(await navLinkHomeAlt.isDisplayed())
  //   assert.isTrue(await driver.compareElement(navLinkHomeAlt, 'nav_link_home'))
  //   const navLinkSettingsAlt = await driver.findElementByAccessibilityId('nav_link_settings')
  //   assert.isTrue(await navLinkSettingsAlt.isDisplayed())
  //   assert.isTrue(await driver.compareElement(navLinkSettingsAlt, 'nav_link_settings'))
  // })
})

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
