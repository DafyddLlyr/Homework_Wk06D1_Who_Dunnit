// Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction
// Mr. Green is the murderer as he is assigned to this variable in the highest level of the function changeMurderer(). The changes to Colonel Mustard and Miss Scarlet take place within a seperate block on a seperate variable also names murderes.

// Result
// "The murderer is Mr. Green."
