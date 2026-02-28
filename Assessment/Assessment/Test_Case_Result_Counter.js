
let results = ["pass", "pass", "fail", "skip", "pass", "fail", "pass", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;


for (let i = 0; i < results.length; i++) {
  if (results[i] === "pass") {
    passed++;
  } else if (results[i] === "fail") {
    failed++;
  } else if (results[i] === "skip") {
    skipped++;
  }
}


let total = results.length;
let passRate = (passed / total) * 100;


let verdict;
if (failed === 0) {
  verdict = "All passed. Ready for release.";
} else if (failed <= 2) {
  verdict = "Minor failures. Review before release.";
} else {
  verdict = "Multiple failures. Block release.";
}


console.log("=== Test Report ===");
console.log("Total Tests :", total);
console.log("Passed      :", passed);
console.log("Failed      :", failed);
console.log("Skipped     :", skipped);
console.log("Pass Rate   :", passRate.toFixed(2) + "%");
console.log("VERDICT     :", verdict);