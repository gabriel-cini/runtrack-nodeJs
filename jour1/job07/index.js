const fs = require('fs');

// Lire le contenu du fichier de manière asynchrone
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        // Gérer les erreurs
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }
    
    // Afficher le contenu dans le terminal
    console.log(data);
});
