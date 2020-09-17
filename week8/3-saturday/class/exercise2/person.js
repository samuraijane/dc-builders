class Person {

    constructor(personName) {
        this.name = personName;
        this.health = 100;
        this.weapon = null;
    }

    set equipWeapon(weapon) {
        return this.weapon = weapon;
    }

    attack(person) {
        return person.health - this.weapon;
    }

}