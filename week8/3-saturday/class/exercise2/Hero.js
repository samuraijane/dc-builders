// ## Step 3

// Implement the Hero class in Hero.js. A Hero should have these characteristics:

// - A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() in the constructor)
// - A method render() which will output HTML that represents the Hero
// - You can render a simple `<img>` tag if you'd like! Find any old "hero" image on google
// - Make sure to show the "health" of the hero too

class Hero extends Person {
  constructor(name) {
    super(name);

    this.health = 100;
  }
  render() {
    return (
      <div>
        <img
          src="https://cdnmundo1.img.sputniknews.com/img/109074/06/1090740634_0:166:1200:815_1000x541_80_0_0_7756c4a7f524064b9e7920eb1e369980.png"
          height="100"
          width="100"
        />
      </div>
    );
  }
}
