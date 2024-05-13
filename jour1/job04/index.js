const fs = require('fs');

// Récupération du chemin du répertoire courant
const currentDirectory = process.cwd();

// Lecture du contenu du répertoire courant
fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du répertoire :", err);
    return;
  }

  // Filtrer les dossiers parmi les fichiers
  const folders = files.filter(file => fs.statSync(file).isDirectory());

  // Afficher les dossiers
  console.log("Les dossiers présents dans le répertoire sont :");
  folders.forEach(folder => console.log(folder));
});
