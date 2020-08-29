class Hero extends Person {
    talk () {
        console.log('Hero Class')
    }
    constructor {

    }
    console.log(`${this.name}'s health = ${this.health}`);
};

bob = new Hero("bob")
bob.talk();