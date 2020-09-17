class Hero extends Person {

    constructor(inputName) {
        super(inputName)
    }

    render(heroURL) {
        let heroImg = document.createElement("img");
        heroImg.setAttribute("src", heroURL);
        heroImg.setAttribute("width", "250");
        heroImg.setAttribute("alt", "Hero");
        console.log("Here is your hero.");
        document.body.appendChild(heroImg);
      }

}

let superMan = new Hero("superman");
console.log(superMan);

superMan.render("https://cdn.britannica.com/61/177761-050-F38C22B1/Christopher-Reeve-Superman-Richard-Donner.jpg");