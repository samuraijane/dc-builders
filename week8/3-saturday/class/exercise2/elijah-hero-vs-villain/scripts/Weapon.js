class Weapon {
    constructor(weaponName) {
        this.name = weaponName;
        this.damage = randomDamage();
    }
}

function randomDamage() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}
