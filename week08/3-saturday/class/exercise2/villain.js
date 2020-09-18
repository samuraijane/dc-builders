class Villain extends Person {

    constructor(inputName) {
        super(inputName)
    }

    render(villainURL) {
        let villainImg = document.createElement("img");
        villainImg.setAttribute("src", villainURL);
        villainImg.setAttribute("width", "250");
        villainImg.setAttribute("alt", "Hero");
        console.log("Here is your villain.");
        document.body.appendChild(villainImg);
      }

}