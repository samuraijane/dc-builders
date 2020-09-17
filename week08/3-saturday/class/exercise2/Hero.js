class Hero extends Person {
    constructor(name, health, weapon){
        super(name, health)
        this.weapon = weapon
        this.image = "https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235"
    }
    render = function(){
        $('.people').append(`<div class="hero"><img src="${this.image}"></div>`);
    }
}