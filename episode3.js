// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Prediction
// firstVerdict() = Mrs. Peacock as declareMurderer() updates the variable when it is run.
// secondVerdict() = Professor Plum, as the "let murderer" inside declareMurderer() does not escape this and update the variable.

// Result
// "First Verdict:  The murderer is Mrs. Peacock."
// "Second Verdict:  The murderer is Professor Plum."
