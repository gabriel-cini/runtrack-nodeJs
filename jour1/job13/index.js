const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    // Récupérer l'URL demandée
    const url = req.url;

    // Déterminer quelle page renvoyer en fonction de l'URL
    let pageFilePath = '';
    if (url === '/') {
        pageFilePath = 'index.html';
    } else if (url === '/about') {
        pageFilePath = 'about.html';
    } else {
        // Si l'URL n'est ni '/' ni '/about', renvoyer une erreur 404
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page non trouvée');
        return;
    }

    // Lire le fichier correspondant à l'URL demandée
    fs.readFile(path.join(__dirname, pageFilePath), (err, data) => {
        if (err) {
            // En cas d'erreur, envoyer une réponse d'erreur
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erreur interne du serveur');
            return;
        }

        // Spécifier le code de réponse et le type de contenu
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        // Envoyer le contenu du fichier en réponse
        res.end(data);
    });
});

// Écouter sur le port 8888
const port = 8888;
server.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
