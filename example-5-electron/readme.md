# Esimerkki 5 - Electron.js

Tässä esimerkissä tutustumme [Electron](https://electronjs.org/)- kirjastoon joka on avoimen lähdekoodin ohjelmistokehys.

## Electron

Electron, on JavaScript kirjasto joka mahdollistaa työpöytäsovellusten kehittämisen web-teknologioita hyödyntäen.

Electronin avulla verkkosovellus voidaan muuttaa asennettavaksi työpöytä sovellukseksi.

### Asennus {#asennus}

Electron asennetaan käyttäen [NPM](https://www.npmjs.com/) paketinhallintajärjestelmä.

Electron projektin alustamiseksi sinun tulee ensin suorittaa komento `npm init`.

Komento luo tiedoston nimeltä `package.json`.

Tiedoston pitäisi näyttää jotakuinkin tältä:

```json
{
    "name": "example-5-electron",
    "version": "1.0.0",
    "description": "electron-esimerkki",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
}
```

Tätä tiedostoa käytetään projektin konfiguroimiseen.

Sen jälkeen voit lisätä Electron:in projektiin ajamalla komennon `npm install electron --save-dev`.

Komennon jälkeen `package.json` tiedostoon ilmestyy uusi osio `"devDependencies"`

Tiedoston pitäisi näyttää nyt jotakuinkin tältä:

```json
{
    "name": "example-5-electron",
    "version": "1.0.0",
    "description": "electron-esimerkki",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "electron": "^12.0.2"
    }
}
```

Tämän jälkeen lisätään vielä `"scripts"` osioon uusi scripti

`"start": "electron ."`

Valmis tiedosto näyttää tältä:

```json
{
    "name": "example-5-electron",
    "version": "1.0.0",
    "description": "electron-esimerkki",
    "main": "index.js",
    "scripts": {
        "start": "electron .",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "electron": "^12.0.2"
    }
}
```

### Hello world esimerkki

Projekti alustetaan [asennus osion](#asennus) ohjeiden mukaisesti.

Tämän jälkeen luodaan projekti kansioon kaksi tiedostoa `index.js` ja `index.html`

Kansio rakenteen pitäisi näyttää nyt tältä:

```
example-5-electron/
├── node_modules/
├── package.json
├── index.js
└── index.html
```

Muokataan `index.js` tiedosto näyttämään tältä:

```javascript
const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
});
```

ja `index.html` tiedosto näyttämään tältä:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Esimerkki</title>
    </head>
    <body>
        <h1>Hello world</h1>
    </body>
</html>
```

Tallennetaan tiedostot ja ajetaan komento `npm start`.

Onneksi olkoon olet juuri tehnyt toimivan Hello world sovelluksen käyttäen Electron kirjastoa!
