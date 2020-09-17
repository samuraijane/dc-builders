// - A Villain should be a subclass of Person (hint: use "extend", and don't forget to use super() in the constructor)
// - A method render() which will output HTML that represents the Villain
// - You can render a simple `<img>` tag if you'd like! Find any old "villain" image on google
// - Make sure to show the "health" of the villain too

class Villian extends Person {
    constructor(name) {
        super(name)
    }

    render() {
        $(".villians").html(`<div class="villian-card" style="width: 200px;">
        <img class="villian-card-img-top" src="images/villian-ursula.jpg" alt="Villian card image cap" height="300px" width="200px">
        <div class="villian-card-body">
            <h3 class="villian-card-title">Villian Name: ${this.name}</h3>
            <p class="villian-card-health">Health: ${this.health}</p>
            <p class="villian-card-weapon">Weapon: ${this.weapon.name}</p>
        </div>`)
    }
}

// $(document).ready(() => {
// villian1 = new Villian("Ursula");
// villian1.equipWeapon("Mimicry");
// console.log(villian1);
// villian1.render();
// })