// Tests unitaires pour l'application To-DoStud
const assert = require('assert');

console.log('=== DEBUT DES TESTS UNITAIRES ===');

// Test 1: Test de base
console.log('Test 1: Vérification mathématique');
assert.strictEqual(1 + 1, 2, '1+1 doit égaler 2');

// Test 2: Vérification du module
console.log('Test 2: Vérification de la structure');
const fs = require('fs');
assert.ok(fs.existsSync('src/index.js'), 'src/index.js doit exister');
assert.ok(fs.existsSync('package.json'), 'package.json doit exister');

// Test 3: Test de l'application
console.log('Test 3: Test de l\'application');
const app = require('../src/index.js');
assert.ok(app.tasks, 'L\'application doit avoir des tâches');
assert.ok(Array.isArray(app.tasks), 'Les tâches doivent être un tableau');
assert.ok(app.server, 'L\'application doit avoir un serveur');

// Test 4: Vérification des données
console.log('Test 4: Vérification des données');
assert.ok(app.tasks.length > 0, 'Il doit y avoir au moins une tâche');
const firstTask = app.tasks[0];
assert.ok(firstTask.id, 'La tâche doit avoir un id');
assert.ok(firstTask.name, 'La tâche doit avoir un nom');

console.log('=== TESTS TERMINÉS AVEC SUCCÈS ===');
console.log('✅ Tous les tests sont passés');