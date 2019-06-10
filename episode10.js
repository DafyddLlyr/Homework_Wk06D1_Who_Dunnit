// Episode 10 - What do you think will happen?

const scenario = {
  location: "Billiards Room",
  weapon: "Dagger",
  murderer: "Reverend Green"
}

const changeLocation = function(location) {
  scenario.location = location;
}

const changeMurderer = function(murderer) {
  const scenario.murderer = murderer;
}

const changeWeapon = function(weapon) {
  let scenario.weapon = weapon;
}

changeMurderer("Colonel Mustard");
changeWeapon("Rope");
changeLocation("Conservatory");

const declareMurderer = function() {
  return `The crime was commited in the ${scenario.location} by ${scenario.murderer} using the ${scenario.weapon}.`
}

const verdict = declareMurderer();
console.log(verdict);

// Result
// As the const and let notation on lines 14 and 18 respecively stop the functions from running the values do not get updated. These need to be removed for the details to update and change.
