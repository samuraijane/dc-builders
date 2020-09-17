//   /$$$$$$  /$$                                                 
//  /$$__  $$| $$                                                 
// | $$  \__/| $$  /$$$$$$   /$$$$$$$ /$$$$$$$  /$$$$$$   /$$$$$$$
// | $$      | $$ |____  $$ /$$_____//$$_____/ /$$__  $$ /$$_____/
// | $$      | $$  /$$$$$$$|  $$$$$$|  $$$$$$ | $$$$$$$$|  $$$$$$ 
// | $$    $$| $$ /$$__  $$ \____  $$\____  $$| $$_____/ \____  $$
// |  $$$$$$/| $$|  $$$$$$$ /$$$$$$$//$$$$$$$/|  $$$$$$$ /$$$$$$$/
// \______/ |__/ \_______/|_______/|_______/  \_______/|_______/                                   
//
// http://patorjk.com/software/taag/                                                       

// 1. Constructors 
// 2. Methods and Members
// 3. Getters and Setters
// 4. Inheritance + super()
// 5. Babel
              
class Pet {

    constructor(inputName){
        this.leg = 4
        this.arms = 0
        this.dob = 2018
        this.name = inputName
    }

    greeting(punctation){
        console.log("Hello, " + this.name + punctation)
    }

    get age(){
        return 2020-this.dob
    }

    set age(newAge){
        this.dob= 2018+newAge
    }
}

class Cat extends Pet {
    meow(){
        console.log('Meow!')
    }
}

class Dog extends Pet {

    constructor(inputName, owner){
        super(inputName)
        this.owner = owner
    }

    bark(){
        console.log('Bark!')
    }
}

aliCat = new Cat("Francis")
heatherCat = new Cat("Albi")
lewisCat = new Cat("Parsley")
eliCat = new Cat("BingBing");

rudyDog = new Dog("Sully", "Rudy");

console.log(eliCat)
console.log(eliCat.name)
console.log(eliCat.age)
eliCat.age = 4
console.log(eliCat.age)
eliCat.greeting("?")
eliCat.meow()


console.log(rudyDog)
rudyDog.bark()
