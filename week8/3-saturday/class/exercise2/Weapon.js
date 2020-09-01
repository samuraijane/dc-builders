// Implement the Weapon class in Weapon.js. A Weapon should have these characteristics:

// - A property called "name", which is a string passed in through the constructor
// - A property called "damage", which is a random number between 10 and 20

class Weapon {
    constructor(name) {
        this.name = name
        this.damage = rand(10, 20)
    }
}

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }
