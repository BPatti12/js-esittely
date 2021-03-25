# Esimerkki 3 - Express.js

Express.js NPM-kirjasto mahdollistaa verkkopalvelimien helpon luomisen Node-ympäristössä.

Express asennetaan komennolla: ```npm install express```.

Tässä esimerkissä näytetään, kuinka Expressiä voidaan käyttää esimerkkisivun jakamiseen palvelimelta, ja kuinka sillä voi luoda API-rajapintoja.

## Käyttöönotto
Asentamisen jälkeen Express täytyy tuoda ohjelmaan ```require("express")``` funktiolla. Seuraavaksi Expressin pääfunktiosta luodaan app-niminen muuttuja, jonka kautta Expressiä käytetään.

Tässä Express- palvelimen käyttöönottoon vaadittu koodi
```js
const express = require("express");

const app = express();
const port = 3000;

// Ohjelmakoodi...

app.listen(port, () => {
    /* 
    Tämä kohta on täysin valinnainen, 
    se kertoo vain kun palvelin käynnistyy
    */
    console.log(`Server listening on port ${port}`);
});
```

## API-rajapinnoista
API eli Application Programming Interface eli ohjelmistorajapinnat ovat palvelimella sijaitsevia ohjelmia, jotka kuuntelevat ja vastaavat käyttäjäsovellusten (client) lähettämiin pyyntöihin.

Yleisimpiä pyyntöjä ovat:

| Pyyntö      | Kuvaus                      |
| :---------: | :-----------:               |
| GET         | Resurssien hakemiseen       |
| POST        | Resurssien luomiseen        |
| PUT         | Resurssien muokkamiseen     |
| DELETE      | Resurssien poistamiseen     |

Kaikki muut pyynnöt kuin GET yleensä vaativat, että niiden mukana lähetetään jotain dataa, yleensä JSON-muodossa.

Tässä esimerkissä käytetään GET- ja POST- pyyntöjä. Palvelimen /api-osoite kuuntelee näitä pyyntöjä, ja lähettää vastauksen. 

Esimerkki Express-palvelimen GET-"kuuntelijasta": 

```js
app.get("/api", (req, res) => {
    res.json({
        message: "Hello World!",
        description: "Tässä Express.js API-esimerkki.",
    });
});

```
> Huomaa että "app"-muuttuja on se sama aiemmin luotu funktioviittaus Expressin pääfunktioon

POST-pyyntö odottaa, että käyttäjä lähettää pyynnössä JSON-objektin, joka sisältää "message"-tietueen. Tämä käyttäjän antama viesti lähetetään sitten takaisin pienen kuvauksen ja lisätietojen kera.

Esimerkki POST-"kuuntelijasta":

```js
app.post("/api", (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.json({
            error: "Et antanut viestiä!",
        });
    }
    
    res.json({
        description: "Viestisi!",
        message
    });
});
```

Esimerkki palvelimelle lähetettävästä POST-pyynnöstä ja vastauksesta: 
```json
// Pyynnön lisädata eli payload

{
    "message":"Terve Express-palvelin!" 
}

// Vastaus

{
    "description": "Viestisi!",
    "message": "Terve Express-palvelin!"
}

// Vastaus, kun viestiä ei anneta

{
    "error": "Et antanut viestiä!"
}

```

> GET-pyynnön kaikki selaimet suorittavat automaattisesti sivua hakiessa. Muiden pyyntöjen testaamista varten voi käyttää esimerkiksi [Postman](https://www.postman.com/)-ohjelmaa.