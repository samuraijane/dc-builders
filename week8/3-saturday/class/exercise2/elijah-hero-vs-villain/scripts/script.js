window.addEventListener("load", function() {
    heroName = prompt("Enter the name of the HERO.");
    villainName = prompt("Enter the name of the VILLAIN.");
    newHero = new Hero(heroName);
    newHero.render(heroName);
    newVillain = new Villain(villainName);
    newVillain.render(villainName);
})

function attackHero() {
    document.getElementById("villain-container").style.backgroundColor = "white";
    document.getElementById("hero-container").style.backgroundColor = "red";
    let attackHeroWeapon = new Weapon;
    let heroLife = document.getElementById("hero-life");
    lowerLife = heroLife.innerHTML - attackHeroWeapon.damage;
    heroLife.innerHTML = lowerLife;
    if (heroLife.innerHTML < 1) {
        alert("Villain wins!")
    }
}

function attackVillain() {
    document.getElementById("hero-container").style.backgroundColor = "white";
    document.getElementById("villain-container").style.backgroundColor = "red";
    let attackVillainWeapon = new Weapon;
    let villainLife = document.getElementById("villain-life");
    lowerLife = villainLife.innerHTML - attackVillainWeapon.damage;
    villainLife.innerHTML = lowerLife;
    if (villainLife.innerHTML < 1) {
        alert("Hero wins!")
    }
}