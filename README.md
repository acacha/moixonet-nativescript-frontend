# TODO

- [X] Drawer
  - [X] Controleu que apareguin correctament seleccionats els items de menú (menú actual ha d'estar amb color fons que el remarqui)
    - [X] A les pàgines cal utilitzar el servei SelectedPage per indicar quina pàgina està seleccionada/activa: 
       - SelectedPageService.getInstance().updateSelectedPage('ChannelsList')
- [X] Estem fent una replica aplicatiu Ebando -> instal·leu-vos tots l'aplicació al mòbil
- [ ] Apartat/pàgina Settings
  - [ ] Ús de dividers, tres seccions:  
    - [ ] General
    - [ ] notificacions
    - [ ] Quant a
  - [ ] Ús de switchs:
    - [ ] Confirmar per eliminar
    - [ ] Activar/desactivar notificacions
    - [ ] Silenci notificacions
    - [ ] Vibració
    - [ ] Poder escollir só de la notificació
    - [ ] Enviar notificació de prova/comprovar notificacions

SHARE:
 - [ ] Compartir per xarxes socials URL de canal i/o missatge

Detall de canal 
  - [ ] Missatges
    - [ ] Swipe to delete message
    
  - [ ] Action a ActionBar
    - [ ] Marcar tots els missatges com a llegits -> Confirm
  - [ ] Tabs:
    - [ ] Missatges
    - [ ] Agenda -> Mostrar calendari
    - [ ] Info del canal: Imatge, nom del canal i descripció
    - [ ] Configuració
      - [ ] Activar/desactivar notificacions
      - [ ] Tags -> Missatges etiquetables
      - [ ] Enviar missatge -> email/ bustia
      - [ ] Eliminar/desubsciures del canal 
      
# MANUAL ROUTING PASSING PROPS

```
this.$navigateTo(Detail, {
  transition: {},
  transitioniOS: {},
  transitionAndroid: {},

  props: {
    foo: 'bar',
  }
});
```  

# TASQUES DIJOUS 30 GENER 2020

- [ ] Millores CSS
  - Llista de canals:
    - Lletra més gran
    - Més amplitud de la icona/imatge
    - En comptes de botons -> icones/botó
- [X] LAYOUTS de pages
  - [X] Evitar codi WET Copy/paste -> ActivityIndicator, ActionBar etc són iguals a cada pàgina
- [X] Passar informació entre pàgines
  - [X] Master/Detail de canals
    - [X] Al fer click a un canal a la llista de canals (master) passar el canal al detail
    - $navigateTo(Component, options)
      - options: 
        - props: Propietats del component Vue que representa una nova pàgina
- [X] Utilitzar tècnica diferent que backend -> en comptes de loading a cada button/component posar un loadinggeneral
  - [X] Interceptar totes les peticions axios amb un Middleware/Interceptors axios per activar el loading
    - https://github.com/axios/axios#interceptors
  - [X] Ja no caldrà més fer $snackbar.showError() als components
  - [X] Tampoc no cal activar desativar loadings. Es pot executar el cosy sense try catch!!  
             
# TASQUES DIMARTS 28 GENER 2020


- [X] Mostrar el número total de missatges del canal a la llista de canals (p.ex entre parentesi)
- [X] Criteris de disseny:
  - [X] Material spec
  - [X] https://refactoringui.com/ -> Greys don’t have to be grey 141 -> OverLaycolor
- [X] Actualitzeu nativescript: npm install -g nativescript -> tns --version -> 6.3.3
  - En teoria hi ha millores amb el HMR (Hot Module Reloading)
- [X] Actualitzeu PHPStorm
  - [X] Instal·leu/actulitzeu plugin nativescript
  - [X] Prepareu una execució a menu Run > Edit configurations
- [X] Comprovar funciona correctament connexió API (peticions axios amb Token correcte)
  - [X] facilitar la obtenció d'un token vàlid -> Resultat login correcte amb Laravel Passport i Proxy JANITOR
    - [X] Crear token per Tinker (vegeu backend)
    - [X] Crear token per interfície gràfica de Laravel passport (vegeu backend)
    - [X] Comanda php artisan -> Laravel commands https://laravel.com/docs/6.x/artisan -> php artisan create:token 
  - [X] Page ChannelsList exemple vam fer per provar funciona. Atents a la línia de comandes si apareix error 401 -> Cal posar token nou
  - [X] Millorar UX -> Succeix un error i no mostrem res a l'usuari final
    - [X] Spinner/Loading/ActivityIndicator
      - [X] Spec material: https://material.io/components/progress-indicators/#specs
      - [X] ActivityIndicator -> Circular
      - [X] Progress: https://nativescript-vue.org/es/docs/elements/components/progress/
        - https://docs.nativescript.org/ui/components/progress
        - https://docs.nativescript.org/angular/ui/ng-components/progress
      - [X] A l'apartat cellular de l'emulador reduir la velocitat de xarxa del dispositiu.
    - [X] Estil spinner. GridLayout per defecete sinó s'indiquen columnes/rows posa un element sobre l'altre
       - [X] Efecte overlay via CSS ->    
    - [X] Utilitzat tècnica diferent que backend -> en comptes de loaind a cada button/component posar un loadinggeneral
      - [ ] Interceptar totes les peticions axios amb un Middleware/Interceptors axios per activar el loading
        - https://github.com/axios/axios#interceptors  
- [X] Snackbar plugin
  - [X] Material components. Proveu la demo de: https://github.com/Akylas/nativescript-material-components
  
# Spinner/Loading/ActivityIndicator

Docs:
- https://docs.nativescript.org/angular/ui/ng-components/activity-indicator
- https://nativescript-vue.org/en/docs/elements/components/activity-indicator/
- https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator

# TASQUES DILLUNS 27 GENER 2020

Comprovació Tasques ja haurien estar fetes:
- [X] PLUGINS:
  - [X] Axios instal·lat: està a package.json i al fitxer app.js i carpeta plugins tal com professor
    - [X] TOKEN EXPLOTACIÓ ben configurat amb un token vàlid explotació
  - [X] EventBus: ídem copiar del professor
- [X] VUEX: 
  - [x] Comprovar està instal·lat: package.json i s'importa carpeta store a app.js
- Autenticació:
  - [X] Mocking de l'autenticació: 
    - No la realitzem realment amb el backend per anar per feina
  - Si afegim interfície gràfica:
    - [ ] Menú a drawer per fer el logout amb confirm
    - [ ] Menú mostra dialeg per fer el login: el login sempre funciona correctament
      - [ ] Mostra link a registre -> Directement al backend
    - [ ] O es mostra un o es mostra l'altre segons estem logats o no

TODO: 

- [X] Llegir/Explicar apartat NOTES SOBRE EMULADORS I EXECUCIÓ
- [X] Autocomplete example, executar apartat Autocomplete RadAutocompleteTextView i explicar com funciona
- [X] Notes anteriors: https://gist.github.com/acacha/d99dbf60e4a40253fe90f7acf1aece65
- [X] Mòduls VUEX namespaced: true
- [X] Vuex: una sola mutació per modificar qualsevol estat (mutació mòdul AUTH):
[types.SET] (state, payload) {
  Vue.set(state, payload.key, payload.value)
}
- [X] Explicar funció set i pq cal? Limitations identificació de canvis en objectes/arrays a Vue/Javascript
- [ ] Posar backend a explotació per poder utilitzar a Nativescript
- [ ] Identificació de patrons/components:
  - [ ] Page amb ActionBar, a cada pàgina estem copiant i pegant el codi de la action Bar amb hamburguer icon -> Fer component i refactoritzar
-   

# NOTES SOBRE EMULADORS I EXECUCIÓ

- [ ] Multiples carpetes emulador Android: https://www.stkent.com/2017/08/10/update-your-path-for-the-new-android-emulator-location.html
  - /home/sergi/android/emulator/emulator
  - /home/sergi/android/tools/emulator
  - [ ] UTILITZAR: /home/sergi/android/emulator/emulator -avd Nexus_5X_API_29_x86
  - [ ] Posar abans emulator al path: export PATH="${PATH}:${ANDROID_HOME}emulator/:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/:${ANDROID_HOME}tools/bin"
- [ ] Afegiur script npm run dev amb     "dev": "emulator @Nexus_5X_API_29_x86 & ; emulator @Pixel_C_API_29 & ; tns run",  
- [ ] Emuladors i execució
  - [ ] emulator -list-avds
  - [ ] emulator @Nexus_5X_API_29_x86 && emulator @Pixel_C_API_29
  - [ ] tns run --help
    - [ ] emulator -list-avds
  - Emuladors desde Android Studio:
    - Comanda $ studio
      - Menu Tools AVD Manager  
  - [ ] tns devices: mostra dispositius/emuladors connectats
- [ ] LOG: tns device log
- [ ] Mostrar llis aplicacions instal·lades: tns device list-applications

REFACTORITZACIONS:
- [ ] Codi WET: onDrawerButtonTap () a totes les pàgines amb actionBar --> component actionBar

# TABS

- [X] Oblidar TabView component: https://www.nativescript.org/blog/tabs-and-bottomnavigation-nativescripts-two-new-components
- [ ] Versió 6.1 dos components nous:
  - [X] Navigation a Material spec: https://material.io/design/navigation/understanding-navigation.html#lateral-navigation
  - [X] BottomNavigation
    - [X] Material spec: https://material.io/components/bottom-navigation/#
      - 3 a 5 opcions de mnu màxim. Més de 5 navigation Drawer i 2 o menys Tabs
  - [X] Tabs: https://material.io/components/tabs/#

# TASQUES DIJOUS 16 GENER 2020

- [ ] CONFIRM DIALOG a la operació desubscriure's del canal -> https://nativescript-vue.org/en/docs/elements/dialogs/confirm/
- [ ] Portar una tablet si teniu. Si no teniu crear un dispositiu virtual extra que sigui una tablet per fer proves en tablet
- [ ] Canviar nom aplicació. Vegeu apartat a sota
- [ ] Provar canvis Android Properties (per exemple orientació app) utilitzant Sidekick
- [ ] Fitxer Manifest Android **app/App_Resources/Android/src/main/AndroidManifest.xml**: 
  - [ ] Provar forçar aplicació només funcioni en mode portrait. Llegiu apartat FORCE ORIENTATION
- [ ] Entendre aplicació estils a la pàgina **Home**
- [ ] Canviar el tema: @import "~@nativescript/theme/brown"; als estils
  - [ ] Aplicar colors als botons, aprendre com s'apliquen variacions primary i similars.
  - [ ] Posar icona al botó afegir canal
- [ ] Temes: executar i comprovar les posibilitats amb temes executant demo Nativescript
- [ ] Adaptació / Responsive segons orientation o tablet/phone
  - [ ] Canviar l'ampla del boto CTA!!  
- [ ] Exemple ús local storage (els meus canals sense usuari logat)
- [ ] Page Events -> No utilitzar created|moutend utilitzar Page Event LOADED -> hi ha events relacionats també amb la nagevació!
  - [ ] Injectar referències a la pàgina actual al codi VUE
- [ ] Crear component UserChannels:
  - [ ] Arquitectura dumb/smart component (dos parts)
  - [ ] Mostra la llista de canals de l'usuari -> inicialment la llista de canals és un JSON hardcoded. Més endavant utilitzarem localStorage
  - [ ] Utilitzem RadListView per formatar la vista:
    - [ ] Cada component de la llista ha de tenir un thumb/imatge del canal i el nom del canal
    - [ ] També mostrarem data creació -> Dos files
- [ ] Altres per practicar estils
  - [ ] Buscar icona per channels i aplicar al codi 
  - [ ] Crear pàgina de login (similar exemple app demo temes)
  - [ ] Crear un apartat config on l'usuari pugui canviar a Dark Mode (utilitzant un switch): https://www.nativescript.org/blog/an-early-look-at-the-new-nativescript-core-theme

# Autocomplete RadAutocompleteTextView

Per veure com funciona baixeu/cloneu i executeu:

  /home/YOUR_HOME/Code/Nativescript/nativescript-ui-samples/autocomplete

Opcions:
- **Suggest modes**:
 - **drop-down list*: 
 - **one suggestion at a time in the text input**
 - **combination of both**
StartsWith and Contains completion modes;
- **Display modes**: 
  - **Plain** only one item can be selected
  - **Tokens** multiple selection of suggestions (each displayed as a token/tag);
- **Token Layout modes**: Wrap and Horizontal

Docs:
- https://docs.nativescript.org/ui/overview?&_ga=2.228778524.1005248413.1579012035-1514962011.1567253259#radautocompletetextview

# GESTIÓ MÀQUINES VIRTUALS

## MÀQUINA VIRTUAL TABLET

Instal·leu Android Studio i executeu Android Device Manager. Feu la instal·lació amb Custom per tal de poder escollir el Android SDK que ja tenim.
  
# COMPONENTS

Exemple ús args -> https://github.com/NativeScript/theme/blob/master/app/pages/themes.js mètode applyTheme

Tots són hereus d'una classe comuna anomenda **View** i tenen tots mètodes comuns.
- getViewById: posant un id a la vista es pot accedir a ella via aquet mètode
- getActualSize
- getLocationInWindow
- getLocationOnScreen -

La llista completa de mètodes:
- https://docs.nativescript.org/angular/core-concepts/properties#view-class-common-methods

# Injectar referències a la pàgina actual al codi VUE

```
<template>
  <Page class="page" @loaded="onLoaded">
  ...
</template> 
...
<script>
... 
onLoaded (args) {
      this.page = args.object
      this.greet()
    },
```  


# Page Events

IMPORTANT: NO UTILITZAR CREATED/MOUNTED a NATIVESCRIPT utilitzar loaded!!!!!!!!!

Els següents events estan disponibles:

- loaded	Emitted after the page has been loaded.
- navigatedFrom	Emitted after the app has navigated away from the current page.
- navigatedTo	Emitted after the app has navigated to the current page.
- navigatingFrom	Emitted before the app has navigated away from the current page.
- navigatingTo	Emitted before the app has navigated to the current page.

https://docs.nativescript.org/ui/components/page#page-events
https://docs.nativescript.org/ui/components/page#page-events

## navigatedTo

- https://docs.nativescript.org/core-concepts/properties#view-class-common-methods
- https://docs.nativescript.org/ui/components/page

# FONT ICONS

Font-awesome està disponible per defecte al instal·lar el layout inicial Drawer. S'utilitzen codis hexàdecimals per les icones.

Els codis els podeu trobar a:

https://fontawesome.com/cheatsheet

IMPORTANT: El prefix és **&#x** després poseu el codi que apareix a la xuleta/cheatsheet

Exemple us: 

``` 
<Label col="0" text.decode="&#xf1ea;" class="nt-icon far"></Label>
```

Docs:
- https://docs.nativescript.org/ui/components/icon-fonts
- FONT AWESOME: https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself

# CODI APLICACIO EXEMPLE

https://github.com/NativeScript/theme/tree/master/app/pages

Els fitxers XML contenen les plantilles per cada pàgina

# DARK MODE

Afegir a RadSideDrawer la classe **ns-dark**

``` 
<RadSideDrawer class="ns-dark" ...
```

Programaticament es pot fer amb:

```
import Theme from "nativescript-theme-core";

Theme.setMode(Theme.Dark); // Or Theme.Light
```

I utilitzar applyThemeCss. Vegeu:
- https://stackoverflow.com/questions/55579984/nativescript-angular-changing-theme
- https://github.com/NativeScript/theme/blob/master/app/pages/themes.xml
- https://github.com/NativeScript/theme/blob/master/app/pages/themes.js

# APLICAR ESTILS PER COMPONENTS

## COLORS

Variants:
- .text-primary

Classes Colors predefinits
- c-black | c-aqua, etc..
- Alternativa pel background: c-bg-black


## TEXT
- Classes h1 i similars per controlar la mida
- font-weight-bold o text-capitalizxe i similars classes
- pull-left i pull-right per alinear
- .m-x-auto per centrar
- Colors: -.text-primary

## DIVIDERS 

https://docs.nativescript.org/ui/theme#dividers

## PADDING AND MARGINS

m-0 = { margin:0 }
m-t-0 = { margin-top:0 }
m-r-0 = { margin-right:0 }
m-b-0 = { margin-bottom:0 }
m-l-0 = { margin-left:0 }
m-x-0 = { margin-right:0; margin-left:0 }
m-x-auto = { horizontal-align: center }
m-y-0 = { margin-top:0; margin-bottom:0 }

https://docs.nativescript.org/ui/theme#padding-and-margin

## BUTTONS

``` 
<Button text="Normal Button"></Button>
<Button text="Primary Button" class="-primary"></Button>
<Button text="Outline Button" class="-outline"></Button>
<Button text="Rounded Button" class="-primary -rounded-lg"></Button>
<Button text="Another Rounded Button" class="-outline -rounded-sm"></Button>
```

Boto amb icona:

``
<Button class="-primary">
    <FormattedString>
        <Span text="{{ 'fa-twitter' | fonticon }}" class="fa nt-icon"/>
        <Span text=" Button.-primary with icon"/>
    </FormattedString>
</Button>
```

Veure més opcions com bottons rounded, afegir color

## FORM FIELDS

- Veure opcions com disabled, rounded

# COMPONENTS DE PAGAMENT

KENDO: https://www.telerik.com/kendo-ui?_ga=2.133900174.1005248413.1579012035-1514962011.1567253259

# FONT ICONS

``` 
 <ActionBar class="action-bar">
        <ActionBar.actionItems>
            <ActionItem icon="font://&#xEE72;" class="fa font-size" style="font-size: 30" tap="navigate"/>
            <ActionItem icon="font://&#xECCD;" class="fa font-size" style="font-size: 20; color: red" tap="navigate"/>
            <ActionItem icon="font://&#xEC83;" class="fa font-size" style="font-size: 30" tap="navigate"/>
            <ActionItem text="&" /> 
            <ActionItem icon="font://&#xEC6B;" class="fa font-size" style="font-size: 30; color: #a4c639" tap="navigate"/>
        </ActionBar.actionItems>
    </ActionBar>
```

# MATERIAL COMPONENTS

Usuari: https://market.nativescript.org/author/farfromrefuge

Plugin que suporta:
- Button: https://market.nativescript.org/plugins/nativescript-material-button
- Floating Action Button: https://market.nativescript.org/plugins/nativescript-material-floatingactionbutton
- Textfield
- CardView
- Slider
- Progress
- ActivityIndicator
- Dialogs
- Bottom Sheets
- Ripple View
- Snackbar
- Bottom Navigation Bar

- https://github.com/Akylas/nativescript-material-components

# NATIVESCRIPT RELEASES

VERSIO ACTUAL 6.3.2

- https://github.com/NativeScript/NativeScript/releases
- https://www.nativescript.org/roadmap-and-releases#releases
- https://fluentreports.com/blog/


# ESTILS PÀGINA HOME

```  
<Label class="page__content-icon fas" text.decode="&#xf015;" />
<Label class="page__content-placeholder" :text="message" />
```

On estan les classes:
- **page__content-icon**
- **page__content-placeholder**:
- **fas**

Al fitxer **_app-common.scss**. S'utilitza SASS (que es convertit a CSS mitjançant Webpack durant la compilació)

# SCSS (SASS)

- https://sass-lang.com/documentation/syntax
  
# STYLES (CSS)

Nativescript suporta CSS, però un subconjunt és a dir no totes les opcions disponibles de CSS a un navegador són disponibles 
(per exemple no es suporten media queries ). També hi ha propietats CSS que són específiques de Nativescript (https://docs.nativescript.org/ui/styling#nativescript-specific-css-properties)

Els estils es poden aplicar a tres nivells:
- **Application-wide CSS/GLOBALS**: Applies to every application page
- **Page-specific CSS**: Applies to the page's UI views
- **Inline CSS**: Applies directly to a UI view

ESTILS GLOBALS:
- Fitxer **app/_app-common.scss**

SPECIFIC PROPERTIES:
- https://docs.nativescript.org/ui/styling#nativescript-specific-css-properties

SUPPORTED CSS PROPERTIES:
- https://docs.nativescript.org/ui/styling#supported-css-properties

CSS SELECTORS:
- https://docs.nativescript.org/ui/styling#supported-selectors

LIMITACIONS:
- No funcionen media queries -> Limita molt capacitats responsive
  - Issue oberta des de  24/04/2020 https://github.com/NativeScript/NativeScript/issues/64

Docs:
- VanillaJS: https://docs.nativescript.org/ui/styling
- Angular: https://docs.nativescript.org/angular/ui/styling
- https://ultimatecourses.com/blog/supercharge-your-style-with-nativescripts-core-theme
- Temes: https://docs.nativescript.org/ui/theme
  
## Temes

- Core Theme: Inclòs a la versió 6.0 aporta una serie d'estils per defecte per tal que les apps nativescript tinguin una aparença cool per defecte
- Dark Theme: varian dark

Canvis color:

Canvieu la  segona línia del fitxer **/app/_app-common.scss**  

``` 
@import "~@nativescript/theme/brown";
``` 

https://www.nativescript.org/blog/announcing-nativescript-6.0---webpack-all-the-way-seamless-app-updates-new-core-theme-and-a-lot-more

Per provar totes les opcions proveu la demo:

``
cd ~/Code
mkdir NativeScript
cd  NativeScript
git clone https://github.com/NativeScript/theme.git
cd theme
tns run android
``` 

Docs:
- VanillaJS: https://docs.nativescript.org/ui/styling
- Angular: https://docs.nativescript.org/angular/ui/styling
- https://ultimatecourses.com/blog/supercharge-your-style-with-nativescripts-core-theme
- Temes: https://docs.nativescript.org/ui/theme
- https://github.com/NativeScript/theme
- https://www.nativescript.org/blog/an-early-look-at-the-new-nativescript-core-theme

  
# CANVIAR NOM APLICACIÓ

Creeu el fitxer **App_Resources/Android/src/main/res/values/strings.xml**:

I poseu:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
  <string name="app_name">Moixonet</string>
  <string name="title_activity_kimera">Moixonet</string>
</resources>
```

Com podeu veure els Strings (per tema de localització/multiples idiomes) es consideren recursos configurables (Prefix @string/). 

Aquest valors que canvieu ara estan a fitxer Manifest **app/App_Resources/Android/src/main/AndroidManifest.xml**:

``` 
<application
		android:name="com.tns.NativeScriptApplication"
		android:allowBackup="true"
		android:icon="@drawable/icon"
		android:label="@string/app_name"
		android:theme="@style/AppTheme">

		<activity
			android:name="com.tns.NativeScriptActivity"
			android:label="@string/title_activity_kimera"
``` 

Per aplicar canvis esborreu **rm -rf platforms/android** i torneu a executar aplicació. 
			
Docs:
- https://docs.nativescript.org/tooling/publishing/publishing-android-apps#app-name

# ORIENTATION

## RESPONSIVE / Aplicar diferents stils segons la orientació

- NO podem utilitzar qualifiers amb Vue i/o angular per tant no es possible indicar diferents fitxers/components depenent de la orientació
- Hi ha un plugin (nativescript-platform-css ) però és de pagament i la versió Community té bugs per a nativescript 6.0
  - https://market.nativescript.org/plugins/nativescript-platform-css 
- Sembla que a la versió 6 hi suport de serie per aplicar CSS segons plataforma
  - https://docs.nativescript.org/angular/ui/styling#root-views-css-classes

Exemple:

``` 
.ns-portrait > Page {
  background-color: orange;
}

.ns-landscape > Page {
  background-color: yellow;
}
```

Docs:
- https://github.com/NativeScript/NativeScript/issues/7313
- https://github.com/nativescript/theme
  - https://github.com/nativescript/theme#more-root-classes
  
## FORCE ORIENTATION

Tota l'aplicació:
- Opció 1: Utilitzar Android Properties a Nativescript sidekick
- Canviant el manifest Android de l'aplicació es pot escollir la orientació. Poseu **android:screenOrientation="portrait"** just abans **android:configChanges**

Més info:
- Manifest: **app/App_Resources/Android/src/main/AndroidManifest.xml**
  - android:configChanges: keyboard|keyboardHidden|orientation|screenSize|smallestScreenSize|screenLayout|locale|uiMode
    - Evita restarts de l'activitat (repintat) quan canvia algna de les configuracions
    - Nativescript utilitza: onconfigurationchanged
  - https://developer.android.com/guide/topics/resources/runtime-changes
- Orientacions possibles: https://developer.android.com/guide/topics/manifest/activity-element.html#screen

# PROPERTIES

## ANDROID

- Es poden modificar a Sidekick a l'apartat properties.
- Docs: https://docs.nativescript.org/sidekick/user-guide/configure-app/android-properties

# NOTES GENER 2020

https://gist.github.com/acacha/d99dbf60e4a40253fe90f7acf1aece65

# Guia 29 novembre

RECORDATORI: DIMARTS TEMPS PER AVANÇAR PROJECTES
- En paral·lel correció 1 a 1 de la feina que heu fet com ho teniu
- MOLT IMPORTANT: grant part de la nota vindrà per aquí. Posar-se al dia TOTS

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

# DEBUG

``` 
tns debug android
``` 

# AXIOS

```
npm install --save axios 
```

Copiar el plugin axios de la carpeta plugin i instal·lar el plugin a app.js (veure exemple professor)

- httpAdapter axios peta! Simplement per afegir linia import httpAdapter from 'axios/lib/adapters/http' dona error 
An uncaught Exception occurred on "main" thread.
Unable to create application com.tns.NativeScriptApplication: com.tns.NativeScriptException: Error calling module function 
TypeError: Cannot read property 'slice' of undefined
File: (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86360:94)

StackTrace: 
(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86360:95)
	at ../node_modules/readable-stream/lib/_stream_writable.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86979:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/readable-stream/readable.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:87201:22)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/stream-browserify/index.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:97583:19)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/follow-redirects/index.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:58554:16)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:52252:18)
	at ../node_modules/axios/lib/adapters/http.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:52517:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ./plugins/axios.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:3057:81)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2055:72)
	at ./app.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2132:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at checkDeferredModules(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:44:23)
	at webpackJsonpCallback(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:31:19)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2:57)
	at require(:1:266)


TypeError: Cannot read property 'slice' of undefined

StackTrace:
java.lang.RuntimeException: Unable to create application com.tns.NativeScriptApplication: com.tns.NativeScriptException: Error calling module function 
TypeError: Cannot read property 'slice' of undefined
File: (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86360:94)

StackTrace: 
(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86360:95)
	at ../node_modules/readable-stream/lib/_stream_writable.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86979:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/readable-stream/readable.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:87201:22)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/stream-browserify/index.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:97583:19)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/follow-redirects/index.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:58554:16)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:52252:18)
	at ../node_modules/axios/lib/adapters/http.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:52517:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ./plugins/axios.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:3057:81)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2055:72)
	at ./app.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2132:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at checkDeferredModules(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:44:23)
	at webpackJsonpCallback(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:31:19)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2:57)
	at require(:1:266)


TypeError: Cannot read property 'slice' of undefined
	at android.app.ActivityThread.handleBindApplication(ActivityThread.java:5406)
	at android.app.ActivityThread.-wrap2(ActivityThread.java)
	at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1545)
	at android.os.Handler.dispatchMessage(Handler.java:102)
	at android.os.Looper.loop(Looper.java:154)
	at android.app.ActivityThread.main(ActivityThread.java:6119)
	at java.lang.reflect.Method.invoke(Native Method)
	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:886)
	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:776)
Caused by: com.tns.NativeScriptException: Error calling module function 
TypeError: Cannot read property 'slice' of undefined
File: (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86360:94)

StackTrace: 
(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86360:95)
	at ../node_modules/readable-stream/lib/_stream_writable.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:86979:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/readable-stream/readable.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:87201:22)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/stream-browserify/index.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:97583:19)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ../node_modules/follow-redirects/index.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:58554:16)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:52252:18)
	at ../node_modules/axios/lib/adapters/http.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/vendor.js:52517:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at ./plugins/axios.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:3057:81)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at fn(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:121:20)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2055:72)
	at ./app.js(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2132:30)
	at __webpack_require__(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:751:30)
	at checkDeferredModules(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:44:23)
	at webpackJsonpCallback(file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/runtime.js:31:19)
	at (file:///data/data/org.nativescript.moixonetnativescriptfrontend/files/app/bundle.js:2:57)
	at require(:1:266)


TypeError: Cannot read property 'slice' of undefined
	at com.tns.Runtime.runModule(Native Method)
	at com.tns.Runtime.runModule(Runtime.java:674)
	at com.tns.Runtime.run(Runtime.java:666)
	at com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
	at android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1024)
	at android.app.ActivityThread.handleBindApplication(ActivityThread.java:5403)
	... 8 more

- https://vuejsdevelopers.com/2018/07/02/vue-js-native-script-vue-http-web-service/

      
# TROUBLESHOOTING

## Accés a localhost desde el mòbil

No és possible, per tant cal accedir a la API en explotació:

https://moixonet.acacha.scool.cat

i tenim URLS públiques no calen autenticació:

https://moixonet.acacha.scool.cat/api/v1/published_channels

## Peta al afegir Vuex HTMLElement is not defined

https://medium.com/@bgohsman_47507/nativescript-vue-with-vuex-and-vue-devtools-no-really-fe860e802d10
https://stackoverflow.com/questions/58672942/htmlelement-is-not-defined-nativescript-vue      

## No es veu Vuex a vue dev tools

Afegir línia HTMLElement a:

```
new webpack.DefinePlugin({
  'global.TNS_WEBPACK': 'true',
  TNS_ENV: JSON.stringify(mode),
  process: 'global.process',
  HTMLElement: function() {
    return false;
  },
}),
```

https://medium.com/@bgohsman_47507/nativescript-vue-with-vuex-and-vue-devtools-no-really-fe860e802d10
https://stackoverflow.com/questions/58672942/htmlelement-is-not-defined-nativescript-vue      


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
import store from './store'
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
    
    v-if
     
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

Un cop instal·lat només cal:

```
vue-devtools 
rm -rf platforms
tns run android
``

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
