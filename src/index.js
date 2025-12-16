// Simple todo application
console.log("To-DoStud Application");

const tasks = [
  { id: 1, name: "Set up Git repository", done: true },
  { id: 2, name: "Create CI pipeline", done: true },
  { id: 3, name: "Add Docker support", done: false }
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
  res.end('To-DoStud API');
});

const PORT = 3000;
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { server, tasks };