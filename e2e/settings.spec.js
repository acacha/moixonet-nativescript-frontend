const nsAppium = require('nativescript-dev-appium')
const assert = require('chai').assert
// eslint-disable-next-line no-unused-vars
const addContext = require('mochawesome/addContext')

describe('settings', () => {
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

  it('Can navigate to settings', async function () {
    const hamburguerIcon = await driver.findElementByAccessibilityId('hamburguer_icon')
    hamburguerIcon.click()
    const navLinkSettings = await driver.findElementByText('Settings', 'contains')
    await navLinkSettings.click()
    // ASSERT SHOW HOME
    assert.isTrue(await driver.compareScreen('settings-screen'))
  })
})
