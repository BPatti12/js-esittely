# Esimerkki 2 - Node.js ja NPM

Tässä esimerkissä tutustumme [Node.js](https://nodejs.org/en/)- ajoympäristöön ja NPM (Node Package Manager)-paketinhallintaohjelmaan.

## Node.js

Node.js, tunnetummin pelkkä Node on palvelinkäyttöön tarkoitettu JavaScript-ympäristö. Node mahdollistaa JS-koodin suorittamisen ilman selainta.

## NPM

NPM eli Node Package Manager on Noden mukaan pakattu paketinhallintajärjestelmä. NPM mahdollistaa erilaisten apukirjastojen asentamisen projektiin. Kirjastoja asennetaan [NPM-rekisteristä](https://www.npmjs.com/).

Ennen NPM:n käyttämistä projektissa, tulee luoda package.json- tiedosto. Tämä onnistuu helpoiten komennolla: `npm init`. Ohjelma kysyy tietoja projektistasi ja luo niiden perusteella package.json- tiedoston automaattisesti.

NPM-paketin asentaminen onnistuu seuraavalla komennolla:
`npm install [paketin nimi]`

Asennetut kirjastot löytyvät projektin juurihakemistosta _node-modules_- kansiosta.

> node-modules-kansion sisältöä ei tule seurata Gitissä, sen suuren koon takia.

Jos NPM-projekti ladataan muualta kuten GitHubista, voi paketit ladata yksinkertaisesti seuraavalla komennolla: `npm install`. Komento tarkistaa package.json-tiedostossa määritetyt riippuvuudet, ja asentaa tarvittavat paketit.

<p style="text-align: center;"> &copy Leevi Laukka 2021 </p>
