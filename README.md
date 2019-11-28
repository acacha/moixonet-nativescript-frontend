# Guia 29 novembre

- LocalStorage: https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
- Base de dades local (seguretat): només per guardar informació pública i no crítica
- Vuex: seran les accions les encarregades de modificar tant l'estat Vuex com la base de dades local
  - Similar a utilitzar axios per modificar base de dades remota/backend però ara la base de dades és local
- Canals:
  - Poden ser públics o privats
  - Els canals publics es poden cercar (els privats no) i els usuaris de tot tipus (guest o regular users) es poden subscriure a un canal
  - Canals privats: 
    - només accessibles a usuaris logats
    - Més endavant: 
      - Els managers poden subscriure usuaris a un canal privat (via invitació ha d'acceptar l'usuari)
      - Els usuaris logats poden demanar inscriure's a un canal: els managers han d'aprovar-ho

# VUEX 
- Afegir vuex a nativescript: https://www.nativescript.org/blog/working-with-vuex-in-your-nativescript-vue-application
  - Using vue plugins: https://nativescript-vue.org/en/docs/getting-started/vue-plugins/
 
```
$ npm install --save vuex
```

A app.js instal·leu plugin:

Creeu una carpeta/mòdul store basant-vos en el codi del professor

```
mkdir store
``` 

i l'importeu a app.js

```
import store from './store
```

Afegiu store a la línia new Vue al final fitxer app.js.
  
## Module AUTH

Copiem el funcionament de mòdul auth de nuxt:
- state:
  - loggedIn: booleà true/false indica si l'usuari éstà logat o no
  - user: Objecte amb la info de l'usuari logat o null sinó hi ha cap usuari logat
- commits:
  - auth/SET:
    SET (state, payload) {
      Vue.set(state, payload.key, payload.value)
    }
  - Estrategia típica un sol commit per modificar objecte state
  - vue.set: https://vuejs.org/v2/guide/reactivity.html
    - Permet superar la límitació de vue de ser reactiu a modificacions objectes
     
## Tasques

Modificacions a la app:
- Drawer esquerra:
  - Apareix info d'usuari només si està logat (utilitzant getter loggedIn mostri auth.state.loggedIn)
  - Sinó apareix botons de login/registre
    - El registre el podem fer amb un link al backend pàgina de registre         

ESLINT:
- Configurar eslint per tal faci modificacions a l'estil nuxt
  - Instal·lar paquets: npm install --save-dev @nuxtjs/eslint-module @nuxtjs/eslint-config eslint-plugin-nuxt
  - Copiar fitxer configuració .eslintrc.js de nuxt-frontend a este projecte
  - Arreglar tots els fitxers .vue aplicant eslint
  - Ok a App.vue:
    - Canviar -drawer-content per valor anterior ~drawerContent i el mateix per a ~mainContent
# Guia 22 novembre

Repàs:
- tns run android per executar al emulador
- tns devices: mostra els dispositius disponibles
- Testos E2E:  
  - npm run e2e
  - Per a un dispositiu concret:
    - npm run android29 (vegeu package.json)
    
- https://gist.github.com/acacha/461541f97a6c4f3eaefef6be9e1122fc

UNIT TESTING:
- https://docs.nativescript.org/tooling/testing/testing
 - tns test init

TROUBLES:
- https://github.com/NativeScript/NativeScript/issues/3746
  - ActionItem no suporta automationText
  - NavigationButton no suporta automationText
  
# Tasques

- Contingut de la pàgina quan no hi ha cap canal:
  - Canviar la icona Casa
  - Navigation Bootom en comptes de tabView 
  - https://github.com/nstudio/nativescript-snackbar
  
  
## Config eslint:

Copieu els fitxers .eslintrc.js i els paquets extres a package.json 

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

També cal activar acceleració KVM si us dona l'error:

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

Baixeu la versió amb extensió .AppImage 

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
