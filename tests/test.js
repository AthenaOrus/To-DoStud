// Simple test file for CI/CD
console.log("Running CI/CD tests...");

// Test 1: Check if 1+1=2
const test1 = 1 + 1 === 2;
console.log(`Test 1 (1+1=2): ${test1 ? 'PASS' : 'FAIL'}`);

// Test 2: Check if file structure exists
const fs = require('fs');
const test2 = fs.existsSync('src/index.js');
console.log(`Test 2 (src/index.js exists): ${test2 ? 'PASS' : 'FAIL'}`);

// Test 3: Check package.json
const test3 = fs.existsSync('package.json');
console.log(`Test 3 (package.json exists): ${test3 ? 'PASS' : 'FAIL'}`);

// Summary
const allTests = [test1, test2, test3];
const passed = allTests.filter(t => t).length;
const total = allTests.length;

console.log(`\nSummary: ${passed}/${total} tests passed`);

if (passed === total) {
  console.log("SUCCESS: All tests passed!");
  process.exit(0);
} else {
  console.log("FAILURE: Some tests failed");
  process.exit(1);
}