// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction
// Professor Plum is the murderer. The conditional statement declared a new variable murderer only within it's own block and does not effect the originally assigned murderer.

// Result
// "The murderer is Professor Plum."
