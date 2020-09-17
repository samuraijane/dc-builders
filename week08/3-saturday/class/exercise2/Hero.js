class Hero extends Person {
    talk () {
        console.log('Hero Class')
    }
    // constructor {

    // }
    // render () {

    // }
    heroIntro () {
    console.log(`${this.name}'s health = ${this.health}`);
    };
};



george = new Hero("George")
george.heroIntro();