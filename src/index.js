// Application To-DoStud - Point d'entrée principal
console.log("========================================");
console.log(" To-DoStud Application v1.0.0");
console.log(" Gestionnaire de tâches avec CI/CD");
console.log("========================================");

// Configuration
const PORT = process.env.PORT || 3000;

// Données de test
const todos = [
  { id: 1, task: "Configurer Git et GitHub", completed: true },
  { id: 2, task: "Créer le workflow CI/CD", completed: true },
  { id: 3, task: "Dockeriser l'application", completed: false },
  { id: 4, task: "Déployer automatiquement", completed: false }
];

// Afficher les tâches
console.log("\n Liste des tâches :");
todos.forEach(todo => {
  const status = todo.completed ? " " : " ";
  console.log(`${status} ${todo.id}. ${todo.task}`);
});

// Simulation serveur web
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/') {
    res.end(JSON.stringify({
      app: "To-DoStud",
      version: "1.0.0",
      message: "Bienvenue sur l'API To-DoStud!",
      endpoints: ["GET /", "GET /todos", "GET /health"]
    }, null, 2));
  } else if (req.url === '/todos') {
    res.end(JSON.stringify(todos, null, 2));
  } else if (req.url === '/health') {
    res.end(JSON.stringify({ status: "healthy", timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Endpoint non trouvé" }));
  }
});

// Démarrer le serveur
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`\n Serveur démarré sur le port ${PORT}`);
    console.log(`🔗 http://localhost:${PORT}`);
    console.log(`🔗 http://localhost:${PORT}/todos`);
    console.log(`🔗 http://localhost:${PORT}/health`);
    console.log("\n Prêt pour le CI/CD!");
  });
}

module.exports = { server, todos };