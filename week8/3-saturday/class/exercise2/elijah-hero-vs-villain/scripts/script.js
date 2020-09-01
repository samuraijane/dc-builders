window.addEventListener("load", function() {
    heroName = prompt("Enter the name of the HERO.");
    villainName = prompt("Enter the name of the VILLAIN.");
    newHero = new Hero(heroName);
    newHero.render(heroName);
    newVillain = new Villain(villainName);
    newVillain.render(villainName);
    attackVillain = document.getElementById("attack-the-villain");
    attackHero = document.getElementById("attack-the-hero");
    attackVillain.addEventListener("click", );
    attackHero.addEventListener("click", );
})
