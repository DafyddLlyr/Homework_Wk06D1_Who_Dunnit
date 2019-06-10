// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction
// Professor Plum is the murderer as it is set to be a constant variable. Nothing will be able to mutate this and the changeMurderer() function will not execute.

// Result
// "The murderer is Professor Plum."
