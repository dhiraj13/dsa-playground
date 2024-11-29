/**
 *  In this section we will learn three concepts
 *  1. reference type
 *  2. context
 *  3. instantation
 */

// 1. reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

var compareObj1AndObj2 = object1 === object2;
var compareObj1AndObj3 = object1 === object3;

// 2. context vs scope
const object4 = {
  a: function () {
    console.log(this);
  },
};

// 3. instantation
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

console.log({ compareObj1AndObj2, compareObj1AndObj3 });

const player1 = new Player("Dhiraj", "Warrior");
player1.introduce();

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
wizard1.play();
wizard1.introduce();
wizard2.play();
