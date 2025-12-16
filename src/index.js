const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur To-DoStud App!',
    version: '1.0.0',
    endpoints: ['GET /', 'GET /health', 'GET /todos', 'POST /todos']
  });
});

// Route santé
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Simulation de données To-Do
let todos = [
  { id: 1, task: 'Configurer Git', completed: true },
  { id: 2, task: 'Créer le workflow CI', completed: false },
  { id: 3, task: 'Dockeriser l\'app', completed: false }
];

// GET tous les todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST un nouveau todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task || 'Nouvelle tâche',
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Démarrer le serveur
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Serveur To-DoStud démarré sur le port ${PORT}`);
    console.log(`🌐 http://localhost:${PORT}`);
  });
}

module.exports = app;