class Wizard {
    #health;
    #mana;

    constructor(name, startingHealth, startingMana) {
        this.name = name;
        this.#health = startingHealth;
        this.#mana = startingMana;
        this.maxHealth = startingHealth;
        this.maxMana = startingMana
    }
    isAlive() {
        return this.#health > 0;
    }
    getStatus() {
        return {
            name: this.name,
            health: this.#health,
            mana: this.#mana
        };
    }

    receiveDamage(amount) {
        if (amount <= 0) {
            return;
        }
        this.#health -= amount;
        if (this.#health < 0) {
            this.#health = 0;
        }
    }

    spendMana(cost){
        if( cost <= 0){
            return false;

        }
        if (this.#mana< cost){
            return false;
        }
        if(this.#mana = this.#mana - cost){
            return true;
        }
        
    }

    castSpell(opponent){
        console.log(`${this.name} tries to cast a generic spell`);
    }

}


class FireWizard extends Wizard {
  castSpell(opponent) {
    if (!this.isAlive()) {
      console.log("cannot act");
      return;
    }
    if (!opponent.isAlive()) {
      console.log("opponent already defeated");
      return;
    }

    const manaCost = 15;
    const damage = 25;

    if (!this.spendMana(manaCost)) {
      console.log("not enough mana");
      return;
    }

    opponent.receiveDamage(damage);
    console.log(`${this.name} casts FIRE on ${opponent.getStatus().name} for ${damage} damage`);
  }
}

class IceWizard extends Wizard {
  castSpell(opponent) {
    if (!this.isAlive()) {
      console.log("cannot act");
      return;
    }
    if (!opponent.isAlive()) {
      console.log("opponent already defeated");
      return;
    }

    const manaCost = 12;
    const damage = 18;
    const extraDamage = 4;

    if (!this.spendMana(manaCost)) {
      console.log("not enough mana");
      return;
    }

    opponent.receiveDamage(damage + extraDamage);
    console.log(
      `${this.name} casts ICE on ${opponent.getStatus().name} for ${damage + extraDamage} damage`
    );
  }
}

class Duel {
  constructor(wizardA, wizardB) {
    this.wizardA = wizardA;
    this.wizardB = wizardB;
    this.roundNumber = 1;
  }

  printRoundStatus() {
    console.log(this.wizardA.getStatus());
    console.log(this.wizardB.getStatus());
  }

  run() {
  console.log("Duel begins!");
  this.printRoundStatus();

  while (this.wizardA.isAlive() && this.wizardB.isAlive()) {
    console.log(`Round ${this.roundNumber}`);

    const beforeA = this.wizardA.getStatus().health;
    const beforeB = this.wizardB.getStatus().health;

    this.wizardA.castSpell(this.wizardB);
    if (!this.wizardB.isAlive()) break;

    this.wizardB.castSpell(this.wizardA);

    const afterA = this.wizardA.getStatus().health;
    const afterB = this.wizardB.getStatus().health;

    this.printRoundStatus();

    if (beforeA === afterA && beforeB === afterB) {
      console.log("Duel ends in a draw: no damage can be dealt anymore.");
      return;
    }

    this.roundNumber += 1;
  }

  if (this.wizardA.isAlive()) {
    console.log("Winner: " + this.wizardA.name);
  } else {
    console.log("Winner: " + this.wizardB.name);
  }
}
}


const wizard1 = new FireWizard("Selan", 100,100);
const wizard2 = new IceWizard("Nadeen", 100, 200);

const duel = new Duel(wizard1, wizard2);
duel.run();

