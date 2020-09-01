class Hero extends Person {
    talk () {
        console.log('Hero Class')
    }
    // constructor {

    // }
    render (heroArray) {
        heroStats = heroArray.map( () => {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top"id="image" src="img/sVen.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="title">${this.name}</h5>
              <p class="card-text" id="release-date">${this.health}</p>
              <a href="#" class="btn btn-primary" id="imdb">${this.weapon}</a>
            </div>`
        });
        
        $('#hero').html(heroStats.join(' '))

    }
    heroIntro () {
    console.log(`${this.name}'s health = ${this.health}`);
    };
};

hero = new Hero(`${$('.heroName').val()} test`)
hero.talk();
hero.heroIntro();
george = new Hero("George")
george.heroIntro();