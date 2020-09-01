// - When the page loads, prompt the user for the name of the Hero and the name of the Villain
// - Create a new Hero and a new Villain, render them to the screen
// - Create two new Weapons, and have the Hero and Villain each equip one
// - Provide two buttons on the screen: one that will let the Hero attack the Villain and another button that will let the Villain attack the Hero
// - When the Hero's health goes below 1, show "Game over"
// - When the Villain's health goes below 1, show "Victory!"

$(document).ready (() => {
    let userHero = new Hero(prompt("Choose a hero!"));
    let userVillian = new Villian(prompt("Choose a villian!"));

    let superSpeed = new Weapon("Super Speed");
    let superEvil = new Weapon("Super Evil");

    userHero.equipWeapon(superSpeed);
    userVillian.equipWeapon(superEvil);

    userHero.render();
    userVillian.render();

    $("#attack-buttons")
        .append(`
            <button class="hero-attack" type="button">Hero Attack</button>
            <button class="villian-attack type="button">Villian Attack</button>
            `)

    let bigRedX = `<img class="red-x" src="images/red-x.png" alt="Big Red X over Hero for loss">`

    $(".hero-attack").click(() => {
        userHero.attack(userVillian);
        userVillian.render();
        if (userVillian.health < 1) {
            $(".hero-attack").attr("disabled", true);
            $(".villian-attack").attr("disabled", true);
            alert("Victory to the Heroes!")
            userVillian.health = 0;
            userVillian.render();
            $(".villian-card").append(bigRedX);
        }
        // console.log(userVillian.health);
        // console.log(userHero.weapon.damage);
        // console.log(userVillian);
    })

    $(".villian-attack").click(() => {
        userVillian.attack(userHero);
        userHero.render();
        if (userHero.health < 1) {
            $(".hero-attack").attr("disabled", true);
            $(".villian-attack").attr("disabled", true);
            alert("Game over, the Villians have won this time!")
            userHero.health = 0;
            userHero.render();
            $(".hero-card").append(bigRedX);
        }
        // console.log(userHero.health);
        // console.log(userVillian.weapon.damage);
        // console.log(userHero);
    })
})