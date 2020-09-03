class Villian extends Person {
        talk () {
            console.log('Villian Class')
        }
        // constructor {
    
        // }
        // render () {
        //     heroStats = heroArray.map( () => {
        //         return `<div class="card" style="width: 18rem;">
        //         <img class="card-img-top"id="image" src="img/sVen.jpg" alt="Card image cap">
        //         <div class="card-body">
        //           <h5 class="card-title" id="title">${this.name}</h5>
        //           <p class="card-text" id="release-date">${this.health}</p>
        //           <a href="#" class="btn btn-primary" id="imdb">${this.weapon}</a>
        //         </div>`
        //     });
            
        //     $('#hero').html(heroStats.join(' '))
    
        // }
        villianIntro () {
        console.log(`${this.name}'s health = ${this.health}`);
        };
    };
    
    
    Evilin = new Villian("Evilin")
    Evilin.talk();
    Evilin.villianIntro();
    Cruela = new Villian("Cruela")
    Cruela.villianIntro();
