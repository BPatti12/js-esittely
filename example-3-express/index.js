const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
// Staattisten sivujen jakelu / middleware
app.use(express.static("static"));

// GET-pyyntö
app.get("/api", (req, res) => {
    // Vastauksen lähettäminen
    res.json({
        message: "Hello World!",
        description: "Tässä Express.js API-esimerkki.",
    });
});

// POST-pyyntö
app.post("/api", (req, res) => {
    console.log(req.body);
    // Muuttujan destrukturointi
    const { message } = req.body;

    if (!message) {
        // Virheilmoituksen palautus
        return res.json({
            error: "Et antanut viestiä!",
        });
    }
    
    res.json({
        description: "Viestisi!",
        message,
        info: {
            charCount: message.length,
        },
    });
});

/* Kuuntelu
    Palvelin kuuntelee funktion ensimmäisessä parametrissa määritelyä porttia  
*/
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
