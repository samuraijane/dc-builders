$(()=> {
    let heroName = window.prompt("Hero Name", "");
    let villainName = window.prompt("Villain Name", "");
    let hero = new Hero(heroName);
    let villain = new Villain(villainName);
    let weaponOne = new Weapon;
    let weaponTwo = new Weapon;
    weaponOne.name = "Sword of Truth";
    weaponTwo.name = "Battleaxe of Shadows";

    $(".people").append(hero.render());
    $(".hero").append(`<p>${hero.name}</p><p>Health: ${hero.health}</p><button class="attack-villain">Attack Villain</button>`)
    $(".people").append(villain.render());
    $(".villain").append(`<p>${villain.name}</p><p>Health: ${villain.health}</p><button class="attack-hero">Attack Hero</button>`)
    hero.equipWeapon(weaponOne);
    villain.equipWeapon(weaponTwo);

    $(".attack-villain").click(function(e){
        e.preventDefault();
        hero.attack(villain);
        console.log(villain.health);
        if(villain.health < 1){
            alert("Victory!");
        }
    });

    $(".attack-hero").click(function(e){
        e.preventDefault();
        villain.attack(hero);
        console.log(hero.health);
        if(hero.health < 1){
            alert("Game Over");
        }
    })
});