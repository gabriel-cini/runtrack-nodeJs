// index.js
const { startServer } = require('./server');

const PORT = process.env.PORT || 8888;

const server = startServer(PORT);

// Vérifier si le serveur a bien été démarré avant d'utiliser la méthode use()
if (server) {
  // Assurez-vous que le chemin d'accès à routes.js est correct
  server.use('/api', require('./route.js')); // Correction du chemin d'accès pour importer les routes
} else {
  console.error('Erreur lors du démarrage du serveur.');
}

