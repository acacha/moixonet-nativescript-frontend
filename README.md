# DEURES

EMULADOR AMB UN SAMSUNG GALAXY NEXUS o altre telèfon


# TESTS

http://appium.io/docs/en/commands/element/find-elements/

```
// wd example
let elementsOne = await driver.elementsByAccessibilityId("SomeAccessibilityID");
let elementsTwo = await driver.elements("id", "SomeID");
```

# Requirements

Install NativeScript for Linux:

https://docs.nativescript.org/start/ns-setup-linux

Per evitar altres errors (vegeu Troubleshooting) cal també executar:

```
sdkmanager "tools" "emulator" "platform-tools" "platforms;android-29" "build-tools;29.0.2" "extras;android;m2repository" "extras;google;m2repository"
sdkmanager "system-images;android-29;google_apis_playstore;x86_64"
``` 

Check nativescript installation:

```
tns doctor
```

## Create Android Virtual Device

Primer cal controlar tema system images hi ha disponibles:

```
sdkmanager --list | grep images
```

Un cop localitzada una system image, per instal·larla:

```
sdkmanager "system-images;android-23;google_apis;x86_64"
```

Per crear una AVD relacionada:

```
avdmanager create avd -n Emulator-Api23-Google -k "system-images;android-23;google_apis;x86_64"
``` 

You can use **avdmanager**:

```
avdmanager create avd -n Emulator-Api29-Google -k "system-images;android-29;google_apis_playstore;x86_64"
``` 

Dos coses, compte amb la comanda emulador que s'està utilitzant (no funciona /home/sergi/android/sdk/tools?):

```
./emulator -list-avds
Emulator-Api29-Google
```

També cal activar acceleració KVM si ud dona l'error:

```
Please ensure KVM is properly installed and usable.
CPU acceleration status: This user doesn't have permissions to use KVM (/dev/kvm)
More info on configuring VM acceleration on Linux:
https://developer.android.com/studio/run/emulator-acceleration#vm-linux
General information on acceleration: https://developer.android.com/studio/run/emulator-acceleration.
``` 

```
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
sudo adduser sergi kvm 
```

Cal reinciar/sortir de l'usuari tornar a entrar per ser memebre del grup KVM. 

Per comprovar si KVM està ok:

```
kvm-ok
```

Executar manual:

```
emulator -avd Emulator-Api29-Google
```

# VUE DEV TOOLS

https://nativescript-vue.org/en/docs/getting-started/vue-devtools/

# APPIUM DESKTOP

Descarregar:

```
https://github.com/appium/appium-desktop/releases/tag/v1.15.1
```

Baixeu la versió amb extensíó .AppImage 

Per instal·lar aneu a la carpeta baixades i feu:

```
chmod +x Appium-linux-1.15.1.AppImage 
./Appium-linux-1.15.1.AppImage 

```

Feu click a start Server i després a la "Lupa", a Json representacion poseu la capability android 29 que utilitzem a **e2e/config/appium.capabilities.json**:


```
{
"platformName": "Android",
"platformVersion": "29",
"deviceName": "Emulator-Api29-Google",
"avd": "Emulator-Api29-Google",
"lt": 60000,
"newCommandTimeout": 720,
"noReset": false,
"fullReset": false,
"app": ""
}
```

Save as Android29 i feu click a Start Session.

# HOW APPIUM WORKS:

- https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjvt5SbouzlAhUExYUKHdd4C4IQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.3pillarglobal.com%2Finsights%2Fappium-a-cross-browser-mobile-automation-tool&psig=AOvVaw1L2UPNyFKqNI2U3eESApde&ust=1573909032227220
- https://www.youtube.com/watch?v=Ns7boY6XNC0


# Installation

``` 
cd ~/Code
git clone git@github.com:acacha/moixonet-nativescript-frontend.git
cd moixonet-nativescript-frontend
npm install
``` 

# Execució

## Nativescript preview

```
tns preview
```

## Dispositiu Android 

You will need and AVD (Android Virtual Device) running using Android SDk emulator or a real device connected via USB:

Create apk:

```
tns build android
```

Check connected devices via USB:

```
watch lsusb
```

Check android devices detected:

```
adb devices
```

Check nativescript devices:

```
tns devices
```

# TESTING 

## E2E APIUM

we use Vue an Mocha version:

``` 
npm install -D nativescript-dev-appium
npm install -g appium
```

Capabilities file **e2e/config/appium.capabilities.json**. Add:

```
"android29": {
      "platformName": "Android",
      "platformVersion": "29",
      "deviceName": "Emulator-Api29-Google",
      "avd": "Emulator-Api29-Google",
      "lt": 60000,
      "newCommandTimeout": 720,
      "noReset": false,
      "fullReset": false,
      "app": ""
    },
``` 

Create AVD:

```
avdmanager create avd -n Emulator-Api29-Google -k "system-images;android-29;google_apis_playstore;x86_64"
avdmanager list
```

Run tests:

```
npm run e2e -- --runType android29
```

Si dona error de QT al arrancar emulador (vegeu Troubleshooting) executeu:

```
cd ~/android/sdk/tools
npm run e2e -- --runType android29
``` 

Resources:
-https://github.com/NativeScript/nativescript-dev-appium

### FEATURES

https://docs.nativescript.org/angular/tooling/testing/end-to-end-testing/features

### Capabilities

https://appium.io/docs/en/writing-running-appium/caps/

## UNIT TESTS

## MOCHA

# Troubleshooting

## APIUM PROBLEMS

Use --verbose to debug:

``` 
$ npm run e2e -- --runType android25 --verbose
```

https://docs.nativescript.org/angular/tooling/testing/end-to-end-testing/troubleshooting

## AAPT: error: style attribute 'android:attr/forceDarkAllowed' not found 

Si al executar **tns build android** us dona l'error:

/home/sergi/Code/esborrar/moixonet-nativescript-frontend/platforms/android/app/src/main/res/values-v29/styles.xml:5:5-7:13: AAPT: error: style attribute 'android:attr/forceDarkAllowed' not found.

Llegiu apartat requeriments, cal instal·lar system-images;android-29 i altres.

## Qt library not found at

Cal executar l'emulador des de la seva carpeta per un error recent (see Stackoverflow)

[139657463924544]:ERROR:android/android-emu/android/qt/qt_setup.cpp:28:Qt library not found at ../emulator/lib64/qt/lib

- https://stackoverflow.com/questions/42554337/cannot-launch-avd-in-emulatorqt-library-not-found
