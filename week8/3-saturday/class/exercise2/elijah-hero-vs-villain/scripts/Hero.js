class Hero extends Person{
    constructor(inputName) {
        super(inputName);
    }
    render(heroName) {
        let heroHTML = `<h2 class="player-name" id="hero-name">The Hero: ${heroName}</h2><img src="https://fromthebalcony.com/wp-content/uploads/2014/01/Hero_anexdu.jpg"><button class="attack" id="attack-the-villain" onclick="attackVillain()">Attack the Villain! --></button><h3>Life Remaining:</h3><p class="life" id="hero-life">100</p>`
        document.getElementById("hero-container").innerHTML = heroHTML;
    }

}
