// Simple todo application
console.log("To-DoStud Application - Docker Ready");

const tasks = [
  { id: 1, name: "Set up Git repository", done: true },
  { id: 2, name: "Create CI pipeline", done: true },
  { id: 3, name: "Add Docker support", done: false },
  { id: 4, name: "Deploy to Docker Hub", done: false }
];

console.log("Current tasks:");
tasks.forEach(task => {
  const status = task.done ? "[DONE]" : "[TODO]";
  console.log(`${status} ${task.id}. ${task.name}`);
});

// Simple web server for testing
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('To-DoStud API v1.0');
});

const PORT = 3000;

// NE démarrer le serveur QUE si exécuté directement
// Pas pendant le build Docker
if (require.main === module && process.env.NODE_ENV !== 'docker-build') {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { server, tasks };