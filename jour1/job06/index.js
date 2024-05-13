const fs = require('fs');

try {
    // Lire le contenu du fichier de manière synchrone
    const data = fs.readFileSync('data.txt', 'utf8');
    
    // Afficher le contenu dans le terminal
    console.log(data);
} catch (err) {
    // Gérer les erreurs
    console.error("Erreur lors de la lecture du fichier :", err);
}
