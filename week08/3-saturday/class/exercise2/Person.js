class Person {
    constructor(name) {
        this.name = name
        this.health = 100
        this.weapon = null
        console.log(this.name)
    }

    person() {
        console.log(this.name)
    }

    equipWeapon(weapon) {
         this.weapon = weapon
    }
    attack(person) {
        person = this.health - this.weapon
        console.log(person)
    }
};

rob = new Person('Rob');