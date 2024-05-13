const path = require('path');

// Chemin du fichier
const cheminFichier = "/jour1/job05/index.js";

// Récupérer le nom du fichier
const nomFichier = path.basename(cheminFichier);
console.log("Nom du fichier:", nomFichier);

// Récupérer l'extension du fichier
const extensionFichier = path.extname(nomFichier);
console.log("Extension du fichier:", extensionFichier);

// Récupérer le répertoire parent du fichier
const repertoireParent = path.dirname(cheminFichier);
console.log("Répertoire parent du fichier:", repertoireParent);
