// - A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() in the constructor)
// - A method render() which will output HTML that represents the Hero
// - You can render a simple `<img>` tag if you'd like! Find any old "hero" image on google
// - Make sure to show the "health" of the hero too

class Hero extends Person {
    constructor(name) {
        super(name)
    }

    render() {
        $(".heroes").html(`<div class="hero-card" style="width: 200px;">
        <img class="hero-card-img-top" src="images/hero-flash.jpg" alt="Hero card image cap" height="300px" width="200px">
        <div class="hero-card-body">
            <h3 class="hero-card-title">Hero Name: ${this.name}</h3>
            <p class="hero-card-health">Health: ${this.health}</p>
            <p class="hero-card-weapon">Weapon: ${this.weapon.name}</p>
        </div>`)
    }
}

// $(document).ready(() => {
// hero1 = new Hero("Flash");
// hero1.equipWeapon("Super Speed");
// console.log(hero1);
// hero1.render();
// })