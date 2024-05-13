const http = require('http');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    // Spécifier le code de réponse et le type de contenu
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Envoyer la réponse avec "Hello World !"
    res.end('Hello World !\n');
});

// Écouter sur le port 8888
const port = 8888;
server.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
