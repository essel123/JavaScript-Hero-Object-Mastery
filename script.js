import superheroes from "./superheros.js";
import supervillains from "./supervillains.js";
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

//mapping superheroes
const superheroes_ = superheroes.map(hero => {
  return new Superhero(
    hero.name,
    hero.secretIdentity,
    hero.powers,
    hero.weakness
  );
});

const supervillains_ = supervillains.map(supervillain => {
  return new Superhero(
    supervillain.name,
    supervillain.secretIdentity,
    supervillain.powers,
    supervillain.weakness
  );
});

document.getElementById("hero").addEventListener("click", () => {
  const rand = Math.floor(Math.random() * superheroes_.length);
  createSuperhero(rand);
});

function createSuperhero(rand) {
  const heroIdentity = document.getElementById("hIdenity");
  const heroName = document.getElementById("hName");
  const heroWeakness = document.getElementById("hWeakness");
  const heroPowers = document.getElementById("hPowers");

  heroName.innerText = `${superheroes_[rand].name}`;
  heroIdentity.textContent = `Secret Identity: ${superheroes_[rand]
    .secretIdentity}`;
  heroWeakness.textContent = `${superheroes_[rand].weakness}`;
  heroPowers.textContent = `${superheroes_[rand].powers}`;

  console.log(rand);
}

document.getElementById("villain").addEventListener("click", () => {
  const rand = Math.floor(Math.random() * supervillains_.length);
  createSupervillain(rand);
});

function createSupervillain(rand) {
  const superVIdentity = document.getElementById("sIdenity");
  const superVName = document.getElementById("sName");
  const superVWeakness = document.getElementById("sWeakness");
  const superVPowers = document.getElementById("sPowers");

  superVName.innerText = `${supervillains_[rand].name}`;
  superVIdentity.textContent = `Secret Identity: ${supervillains_[rand]
    .secretIdentity}`;
  superVWeakness.textContent = `${supervillains_[rand].weakness}`;
  superVPowers.textContent = `${supervillains_[rand].powers}`;

  console.log(rand);
}
