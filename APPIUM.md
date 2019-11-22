# SELECTORS

http://appium.io/docs/en/commands/element/find-elements/

## BY TEXT

```
const label = await driver.findElementByText("Els meus canals", "contains");
assert.isTrue(await label.isDisplayed());
```

## BY ACCESSIBILITY ID

Al component:

```
automationText="loginEmailInput"
```

al test:

```
const usernameField = await driver.driver.waitForElementByAccessibilityId('loginEmailInput')
```

PROBLEMA: Alguns items no accepten automationText com els fills de l'action bar
