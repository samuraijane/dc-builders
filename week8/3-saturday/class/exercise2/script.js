$(() => {
    let heroName = window.prompt("Hero Name", "");
    let villainName = window.prompt("Villain Name", "");

    let hero = new Hero(heroName);
    let villain = new Villain(villainName);
    let weaponOne = new Weapon("Sword of Truth");
    let weaponTwo = new Weapon("Battleaxe of Shadows");

    $(".people").append(hero.render());
    $(".hero").append(`<p>${hero.name}</p><p class="hero-health">Health: ${hero.health}</p><button class="attack-villain">Attack Villain</button>`);
    $(".people").append(villain.render());
    $(".villain").append(`<p>${villain.name}</p><p class="villain-health">Health: ${villain.health}</p><button class="attack-hero">Attack Hero</button>`);

    hero.equipWeapon(weaponOne);
    villain.equipWeapon(weaponTwo);

    $(".attack-villain").click(function(e){
        e.preventDefault();
        hero.attack(villain);
        $(".villain-health").text(`Health: ${villain.health}`);
        if(villain.health < 1){
            alert("Victory!");
        }
    });

    $(".attack-hero").click(function(e){
        e.preventDefault();
        villain.attack(hero);
        $(".hero-health").text(`Health: ${hero.health}`);
        if(hero.health < 1){
            alert("Game Over");
        }
    });
});