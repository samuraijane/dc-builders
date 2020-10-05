class Weapon { 
    constructor(name) {
        this.name = name
        console.log(this.name)
    }
    damage () {
        this.dmage = Math.floor((Math.random() * (20-10)) + 10);
        console.log(this.dmage);
    }
    
}

Mace = new Weapon('Mace')
Mace.damage();