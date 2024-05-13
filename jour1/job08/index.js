const fs = require('fs');

// Lire le contenu du fichier de manière asynchrone
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        // Gérer les erreurs
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }

    // Parcourir chaque caractère du contenu
    for (let i = 0; i < data.length; i += 2) {
        // Afficher chaque lettre sur deux
        process.stdout.write(data[i]);
    }
});
