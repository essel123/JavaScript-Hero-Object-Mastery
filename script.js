import superheros from "./superheros.js";

const superhero = {
  name: String,
  secretIdentity: String,
  powers: Array,
  weakness: String,
  usePower: function(powerName) {
    const random = Math.floor(Math.random() * this.powers.length);
    powerName = this.powers[random];
    console.log(` ${this.name}'s power is '${powerName}'`);
  },

  revealIdentity: function() {
    console.log(this.secretIdentity);
  }
};

function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

Superhero.prototype = Object.create(superhero);

const superhero1 = new Superhero(
  "Hulk",
  "Bruce Banner",
  [
    "Superhuman strength (increases with rage)",
    "Regenerative healing factor",
    "Immense durability",
    "Gamma radiation resistance",
    "Uncontrollable rage"
  ],
  "Bruce Banner's emotional state, inability to control Hulk"
);
//    superhero.usePower.bind(superhero1)()

const superhero2 = new Superhero(
  "Black Widow",
  "Natasha Romanoff",
  [
    "Peak human physical condition",
    "Expert hand-to-hand combatant",
    "Martial arts expertise",
    "Espionage and infiltration",
    "Expert marksmanship"
  ],
  "Human vulnerability, reliance on technology and gadgets"
);
//   console.log("--------------------------------------------")
// superhero1.usePower();

// superhero2.usePower();
// console.log("--------------------------------------------")
// superhero1.revealIdentity();

// superhero2.revealIdentity();
// console.log("--------------------------------------------")

let superheros_ = null
superheros.forEach(element => {
     superheros_ =  new Superhero(element.name,element.secretIdentity,element.powers,element.weakness)
});


console.log(superheros_);

