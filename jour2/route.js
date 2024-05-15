const express = require('express');
const routes = express.Router(); // Utilisation de express.Router() pour définir les routes
const fs = require('fs');
const data = require('./data.json');

// Récupérer toutes les tâches de la liste
routes.get('/tasks', (req, res) => {
  res.json(data);
});

// Créer une nouvelle tâche
routes.post('/tasks', (req, res) => {
  const newTask = req.body;
  // Générer un nouvel ID pour la tâche
  const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  newTask.id = newId;
  // Ajouter la nouvelle tâche à la liste des tâches
  data.push(newTask);
  // Écrire les données mises à jour dans le fichier JSON
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de l\'écriture des données.' });
    } else {
      res.status(201).json(newTask);
    }
  });
});

// Mettre à jour une tâche existante
routes.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTaskData = req.body;
  // Rechercher la tâche avec l'ID spécifié dans la liste des tâches
  const taskToUpdate = data.find(task => task.id == taskId);
  if (!taskToUpdate) {
    return res.status(404).json({ error: 'Tâche non trouvée.' });
  }
  // Mettre à jour les données de la tâche
  Object.assign(taskToUpdate, updatedTaskData);
  // Écrire les données mises à jour dans le fichier JSON
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de l\'écriture des données.' });
    } else {
      res.status(200).json(taskToUpdate);
    }
  });
});

// Supprimer une tâche existante
routes.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  // Rechercher l'index de la tâche avec l'ID spécifié dans la liste des tâches
  const taskIndex = data.findIndex(task => task.id == taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tâche non trouvée.' });
  }
  // Supprimer la tâche de la liste des tâches
  data.splice(taskIndex, 1);
  // Écrire les données mises à jour dans le fichier JSON
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de l\'écriture des données.' });
    } else {
      res.status(200).json({ message: 'Tâche supprimée avec succès.' });
    }
  });
});

module.exports = routes; // Correction du module.exports pour exporter routes



