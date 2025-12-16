// Simple tests for CI/CD pipeline
console.log("Running tests...");

// Test 1: Basic calculation
function testBasicMath() {
  const result = 2 + 2;
  const expected = 4;
  if (result === expected) {
    console.log("PASS: 2 + 2 = 4");
    return true;
  }
  console.log("FAIL: Basic math");
  return false;
}

// Test 2: Check application module
function testAppModule() {
  try {
    const app = require('../src/index.js');
    if (app.tasks && Array.isArray(app.tasks)) {
      console.log(`PASS: Found ${app.tasks.length} tasks`);
      return true;
    }
  } catch (error) {
    console.log("FAIL: Could not load app module");
  }
  return false;
}

// Test 3: Check server
function testServer() {
  try {
    const app = require('../src/index.js');
    if (app.server) {
      console.log("PASS: Server object exists");
      return true;
    }
  } catch (error) {
    console.log("FAIL: Server check");
  }
  return false;
}

// Run all tests
const testResults = [
  testBasicMath(),
  testAppModule(),
  testServer()
];

const passed = testResults.filter(result => result).length;
const total = testResults.length;

console.log(`\nTest Summary: ${passed}/${total} passed`);

if (passed === total) {
  console.log("ALL TESTS PASSED");
  process.exit(0);
} else {
  console.log("SOME TESTS FAILED");
  process.exit(1);
}