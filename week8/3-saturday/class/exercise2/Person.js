class Person {
    constructor(name) {
        this.name = name
        this.health = 100
        this.weapon = null
    }

    equipWeapon(weapon) {
         this.weapon = weapon
    }
    attack(person) {
        person = this.health - this.weapon
    }
};

rob = new Person('Rob');

console.log(rob);