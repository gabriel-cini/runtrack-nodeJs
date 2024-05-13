const fs = require('fs');

// Nouveau contenu à écrire dans le fichier
const nouveauContenu = "Je manipule les fichiers avec un module node !";

// Écrire le nouveau contenu dans le fichier
fs.writeFile('data.txt', nouveauContenu, (err) => {
    if (err) {
        // Gérer les erreurs
        console.error("Erreur lors de l'écriture dans le fichier :", err);
        return;
    }
    console.log("Le contenu du fichier a été modifié avec succès !");
});
