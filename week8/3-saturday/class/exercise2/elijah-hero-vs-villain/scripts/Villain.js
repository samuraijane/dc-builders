class Villain extends Person{
    constructor() {
        super();
    }
    render() {
        let villainHTML = `<h2 class="player-name" id="villain-name">The Villain: ${villainName}</h2><img src="https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1527192850299-O1TSEYT141PKYNL24N6S/ke17ZwdGBToddI8pDm48kBpiV9Y7ITPTlwOYCI_cgaIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dshq0IZLe6nQkHkUnHBavr9sqwwuMPavG2yLPftpXG72ZDqXZYzu2fuaodM4POSZ4w/hero-2002-389.jpg"><button class="attack" id="attack-the-hero" onclick="attackHero()"><-- Attack the Hero!</button><h3>Life Remaining:</h3><p class="life" id="villain-life">100</p>`
        document.getElementById("villain-container").innerHTML = villainHTML;
    }
}