// Tests pour l'application To-DoStud
console.log(" Démarrage des tests unitaires...");

// Test 1 : Vérification basique
function testAddition() {
  const result = 1 + 1;
  const expected = 2;
  if (result === expected) {
    console.log(" Test 1 passé : 1 + 1 = 2");
    return true;
  } else {
    console.log(" Test 1 échoué");
    return false;
  }
}

// Test 2 : Vérification des données
function testTodos() {
  const app = require('../src/index.js');
  if (app.todos && app.todos.length > 0) {
    console.log(` Test 2 passé : ${app.todos.length} tâches trouvées`);
    return true;
  } else {
    console.log(" Test 2 échoué : aucune tâche trouvée");
    return false;
  }
}

// Test 3 : Vérification du serveur
function testServer() {
  const app = require('../src/index.js');
  if (app.server && typeof app.server.listen === 'function') {
    console.log(" Test 3 passé : Serveur correctement configuré");
    return true;
  } else {
    console.log(" Test 3 échoué : Serveur non configuré");
    return false;
  }
}

// Exécution de tous les tests
console.log("\n=== EXÉCUTION DES TESTS ===");
const test1 = testAddition();
const test2 = testTodos();
const test3 = testServer();

console.log("\n=== RÉSUMÉ DES TESTS ===");
console.log(`Tests passés: ${[test1, test2, test3].filter(Boolean).length}/3`);

// Sortie avec code approprié pour CI
if (test1 && test2 && test3) {
  console.log("\n🎉 TOUS LES TESTS SONT PASSÉS !");
  process.exit(0); // Succès
} else {
  console.log("\n CERTAINS TESTS ONT ÉCHOUÉ");
  process.exit(1); // Échec
}