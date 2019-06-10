// Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Prediction
// "The weapon is the Revolver" - this is because the function changeWeapon() can mutate the object "scenario" despite it being a constant. As the function changeWeapon() has already been called it will have already mutated the object.

// Result
// "The weapon is the Revolver."
