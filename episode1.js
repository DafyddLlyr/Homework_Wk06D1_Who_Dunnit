// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction
// Miss Scarlet is the murderer, as nothing will change or mutate this value.

// Result
// "The murderer is Miss Scarlet."
