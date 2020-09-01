class Weapon {
    constructor(name){
        this.name = name;
        this.damage = Math.floor(Math.random() * (20-10 + 1) + 10);
    }
}