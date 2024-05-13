const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    // Lire le fichier index.html
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            // En cas d'erreur, envoyer une réponse d'erreur
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erreur interne du serveur');
            return;
        }

        // Spécifier le code de réponse et le type de contenu
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        // Envoyer le contenu du fichier index.html en réponse
        res.end(data);
    });
});

// Écouter sur le port 8888
const port = 8888;
server.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
