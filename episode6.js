// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction
// Mrs. White is the murderer as the changeMurderer() function has changed the variable from Colonel Mustard, to Mr. Green, and then Mrs. White. This function is called prior to the verdict being given and takes effect.

// Result
// "The murderer is Mrs. White."
