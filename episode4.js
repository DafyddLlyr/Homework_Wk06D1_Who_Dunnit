// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Prediction
// "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard."
// Colonel Mustard is declared as suspectThree within the function declareAllSuspects() and will be assigned to the variable within this scope.
// "Suspect three is Mrs. Peacock"
// The final console.log() is within the same scope as the original assignment of suspectThree to Mrs. Peacock

// Result
// "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard."
// "Suspect three is Mrs. Peacock."
