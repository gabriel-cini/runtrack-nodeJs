const express = require('express');
const app = express();
const path = require('path');

// Définition des routes
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Gestion de la route pour les erreurs
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
