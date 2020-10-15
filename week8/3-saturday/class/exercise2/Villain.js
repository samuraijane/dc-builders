// Implement the Villain class in Villain.js. A Villain should have these characteristics:

// - A Villain should be a subclass of Person (hint: use "extend", and don't forget to use super() in the constructor)
// - A method render() which will output HTML that represents the Villain
// - You can render a simple `<img>` tag if you'd like! Find any old "villain" image on google
// - Make sure to show the "health" of the villain too

class villain extends Person {
  constructor(name) {
    super(name);

    this.health = 100;
  }
  render() {
    return (
      <div>
        <img
          src="https://www.montgomeryschoolsmd.org/uploadedImages/Coronavirus/Coronavirus2Square.jpg"
          height="100"
          width="100"
        />
      </div>
    );
  }
}

console.log(villain.render());
