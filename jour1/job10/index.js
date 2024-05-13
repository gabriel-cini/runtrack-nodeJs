const url = require('url');

// Définir la constante URL
const URL = "https://www.google.com&search=nodejs";

// Récupérer le protocole utilisé
const parsedURL = url.parse(URL);
console.log("Protocole utilisé:", parsedURL.protocol);

// Récupérer le nom d'hôte
console.log("Nom d'hôte:", parsedURL.hostname);

// Récupérer les paramètres de l’URL
console.log("Paramètres de l'URL:", parsedURL.query);

// Reformater l’URL en une nouvelle URL valide en modifiant le nom d'hôte
const nouvelleURL = url.format({
    ...parsedURL,
    hostname: 'www.laplateforme.io'
});
console.log("Nouvelle URL avec le nom d'hôte modifié:", nouvelleURL);

// Ajouter à cette nouvelle URL un paramètre
const nouvelleURLAvecParametre = nouvelleURL + '.html';
console.log("Nouvelle URL avec paramètre ajouté:", nouvelleURLAvecParametre);
