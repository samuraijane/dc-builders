# Hero vs. Villain
In this exercise, you'll be using ES6 classes to create a simple hero vs villain game! The hero and the villain will be able to equip a weapon and start attacking each other. The HTML and CSS should be relatively simple - instead, we want to focus on how we structure our Object Oriented code. Instead of using `var`, start getting used to using `let`. 

## Step 1
In a new project, create these files: index.html, script.js, Person.js, Hero.js, Villain.js, Weapon.js. Include all of these script tags in the `<head>` of your html, making sure script.js is last.

## Step 2

Implement the Person class in Person.js. A Person should have these characteristics:

- A property "name" which is a string passed in through the constructor
- A property "health" which is hardcoded to 100 initially
- A property "weapon" which is null initially
- A method equipWeapon(weapon), which will take a weapon object and attach it to the "weapon" property
- A method attack(person), which will deduct health from the target based on what weapon this person has equipped

## Step 3

Implement the Hero class in Hero.js. A Hero should have these characteristics:

- A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() in the constructor)
- A method render() which will output HTML that represents the Hero
- You can render a simple `<img>` tag if you'd like! Find any old "hero" image on google
- Make sure to show the "health" of the hero too

## Step 4

Implement the Villain class in Villain.js. A Villain should have these characteristics:

- A Villain should be a subclass of Person (hint: use "extend", and don't forget to use super() in the constructor)
- A method render() which will output HTML that represents the Villain
- You can render a simple `<img>` tag if you'd like! Find any old "villain" image on google
- Make sure to show the "health" of the villain too

## Step 5

Implement the Weapon class in Weapon.js. A Weapon should have these characteristics:

- A property called "name", which is a string passed in through the constructor
- A property called "damage", which is a random number between 10 and 20

## Step 6

Time to tie all of your classes together! script.js is going to control the gameplay itself:

- When the page loads, prompt the user for the name of the Hero and the name of the Villain
- Create a new Hero and a new Villain, render them to the screen
- Create two new Weapons, and have the Hero and Villain each equip one
- Provide two buttons on the screen: one that will let the Hero attack the Villain and another button that will let the Villain attack the Hero
- When the Hero's health goes below 1, show "Game over"
- When the Villain's health goes below 1, show "Victory!"