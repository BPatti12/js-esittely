# Esimerkki 4 - React.js

[React.js](https://reactjs.org) tai vain React on Facebookin kehittämä ja ylläpitämä kirjasto. React on luotu helpottamaan verkkosovelluskehitystä.

React hallitsee selainikkunan päivittämistä ja elementtien piirtämistä, helpottaen monimutkaisen interaktiivisuuden koodaamista.

React on yksi maailman suosituimmista webbikehityskirjastoista, ja sitä käyttävät Facebookin itsensä lisäksi myös monet muut suuret yritykset kuten Microsoft, Discord ja Twitter.

## Käyttöönotto

React voidaan ottaa käyttöön erittäin helposti `npx create-react-app .` komennolla. Komento lataa kaikki vaadittavat kirjastot sekä luo .gitignoren ja package.jsonin automaattisesti.

> Komento luo myös README.md tiedoston automaattisesti. Tiedosto kertoo peruskomennot ja niiden käyttötarkoitukset. Tämä tiedosto löytyy tästä hakemistosta nimellä README-cra.md

Komennon suoriuduttua React-palvelimen voi käynnistää `npm start` komennolla. React-sovellus aukeaa uuteen selainvälilehteen. Jos hukkaat välilehden, sivun osoite löytyy terminaalista. Oletuksena se on http://localhost:3000.

Sovellus latautuu uudestaan automaattisesti, kun muutoksia tallennetaan.

## Reactin ominaisuuksia

Seuraavaksi tiiviit esittelyt Reactin eri ominaisuuksista.

## Komponentit (Components)

React on komponenttipohjainen verkkosovelluskehityskirjasto. Tämä tarkoittaa sitä, että Reactilla voi luoda erinäisiä komponentteja. Komponentteja voidaan sitten käyttää useasti eri puolilla sovellusta, eikä samaa asiaa tarvitse koodata joka paikkaan.

Komponenteille voidaan määrittää komponenttikohtainen logiikka.

Komponentit voidaan jakaa kolmeen eri tyyppiin:

---

### [Luokkakomponentti (Class Component)](https://reactjs.org/docs/react-component.html)

Komponentti luodaan luokkaobjektina, joka perii Reactin sisäänrakennetun Component-luokkan.

Luokka sisältää [render-metodin](https://reactjs.org/docs/react-component.html#render) joka palauttaa komponentin piirrettävät elementit. Luokkaan sisältyy myös monia muita metodeja, joita React suorittaa tietyissä tilanteissa. Näistä voit lukea lisää [täältä](https://reactjs.org/docs/react-component.html#the-component-lifecycle). Luokkiin voi luoda myös omia metodeja.

Esimerkki luokkakomponentin alustamisesta:

```js
import React, { Component } from "react";

export default class App extends Component {
    render() {
        // Komponentin logiikka tähän
        return <div>Tähän tekstiä tai muita elementtejä / komponentteja</div>;
    }
}
```

---

### [Funktiokomponentti (Function Component)](https://reactjs.org/docs/components-and-props.html)

Funktiokomponentit eroavat luokkakomponenteista monella tapaa (joista lisää vähän [myöhemmin](#hooks)), ja ne ovat aloittelijalle helpompia ymmärtää.

Komponentti viedään funktiona, joka palauttaa piirrettävät elementit.

Funktiokomponentti alustetaan seuraavasti:

```js
import React from "react";

export default function App() {
    // Funktion logiikka tähän...

    return <div>Tähän tekstiä tai muita elementtejä / komponentteja</div>;
}
```

---

### Nuolifunktiokomponentti (Arrow Function Component)

Muuten sama kuin normaali funktiokomponentti, mutta alustustapa käyttää uutta ES6-nuolifunktiosyntaksia.

Nuolifunktiokomponentti alustetaan seuraavasti:

```js
import React from "react";

export const App = () => {
    // Funktion logiikka tähän...

    return <div>Tähän tekstiä tai muita elementtejä / komponentteja</div>;
};
```

---

## Komponentin tila (State)

Komponentin tila eli state on kunkin komponentin itse säilömä arvo, jonka avulla komponentin elementtejä voidaan muokata interaktiivisesti, sivua päivittämättä. Komponentti siis päivittyy joka kerta, kun sen state muuttuu. Laskuriesimerkki säilyttää laskurin nykyisen arvon laskurikomponentin statessa ja päivittää sitä sinne.

---

## Hooks

Suurin ero ja funktiokomponettien välillä on funktiokomponenttien tukemat hookit, eli funktiot, jotka tarjoavat pääsyn stateen ja muihin Reactin ominaisuuksiin ilman tarvetta luokille. Hookit on tehty täyttämään luokkakomponenttien metodien toiminnallisuus funktiokomponenteissa.

---

## State-esimerkki

Luokkakomponentissa state alustetaan seuraavasti:

```js
class Count extends React.Component {
    constructor(props) {
        super(props);
        // State määritetään alla
        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        );
    }
}
```

Seuraavaksi sama komponentti nuolifunktiomuodossa, hookkeja hyödyntäen:

```js
const Count = () => {
    // State määritetään alla, useState hookin avulla.
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};
```

---

## Props

Komponenteille vietyjä muuttujia kutsutaan propseiksi. Propseilla voi muuttaa saman komponentin dataa "ulkoa päin".

Nuolifunktiokomponenteissa propsit saadaan funktion argumenteista seuraavasti:

```js
const Welcome = (props) => {
    <h1>Hei {props.name}!</h1>;
};
```

Luokkakomponenteissa propseihin pääsee käsiksi this-muuttujan kautta:

```js
class Welcome extends React.Component {
    render() {
        return <h1>Hei, {this.props.name}!</h1>;
    }
}
```

Komponenttiin viedään propseja määrittämällä arvot komponentin parametreiksi:

```js
<Welcome name="Leevi" />
// Tämä tulostaa H1-otsikon tekstillä "Hei Leevi!"
```

Komponentit päivittyvät propsien päivittyessä.

Laskuri-esimerkissä laskurin state ja sen asettamisfunkiot annetaan CounterButtons-komponentille propsien kautta, jotta painikkeet voisivat muuttaa Counter-komponentin statea.

---

## Reactsivusto verkkoon

Reactilla tehty sivu täytyy kompiloida normaaliksi HTML- ja JavaScript-koodiksi ennen kun sen saa julkisesti verkkoon.

Kompilointi onnistuu `npm start build` tai `yarn build` komennoilla.

Komento luo projektin juurihakemistoon build-kansion, jonka sisältö on valmis staatinen verkkosivu, joka voidaan siirtää verkkopalvelimelle ja jakaa sieltä.

---

## Muuta

## React Native

React Native on Reactin pohjalta luotu kehys mobiilisovelluskehitystä varten.
