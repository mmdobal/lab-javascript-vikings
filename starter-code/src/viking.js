/* eslint-disable class-methods-use-this */
// Soldier

class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return 'A Saxon has died in combat';
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  getRandomSoldier(army) {
    const randomIndex = Math.floor(Math.random() * Math.floor(army.length));
    const randomSoldier = army[randomIndex];

    return [randomSoldier, randomIndex];
  }

  vikingAttack() {
    const randomViking = this.getRandomSoldier(this.vikingArmy)[0];
    const randomSaxon = this.getRandomSoldier(this.saxonArmy)[0];
    const saxonIndex = this.getRandomSoldier(this.saxonArmy)[1];

    randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      saxonArmy.splice(saxonIndex, 1);
    }

    return randomSaxon.receiveDamage(randomViking.strength);
  }

  saxonAttack() {
    const randomSaxon = this.getRandomSoldier(this.saxonArmy)[0];
    const randomViking = this.getRandomSoldier(this.vikingArmy)[0];
    const vikingIndex = this.getRandomSoldier(this.vikingArmy)[1];

    randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      vikingArmy.splice(vikingIndex, 1);
    }

    return randomViking.receiveDamage(randomSaxon.strength);
  }

  showStatus() {
    if (this.saxonArmy === []) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy === []) {
      return 'Saxons have fought for their lives and survive another day...';
    }

    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
