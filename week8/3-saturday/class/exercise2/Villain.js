class Villain extends Person {
    constructor(name, health, weapon){
        super(name, health)
        this.weapon = weapon
        this.image = "https://vignette.wikia.nocookie.net/fallout/images/4/48/FNV_super_mutant.png/revision/latest?cb=20180105145530"
    }
    render(){
        $('.people').append(`<div class="villain"><img src="${this.image}"></div>`);
    }
}