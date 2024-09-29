// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

const findSmallestInt = (arr) => Math.min(...arr);

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  const diameter = 2 * circle.radius;
  return Math.PI * diameter;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  const arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  const res = [];

  function createFunction(index) {
    return function () {
      return index;
    };
  }

  for (let i = 0; i < n; i++) {
    res.push(createFunction(i));
  }

  return res;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.legs = 0;
    this.status = status;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
    this.status = status;
    this.voice = "Meow meow!";
  }

  introduce() {
    return `${super.introduce()} ${this.voice}`;
  }
}

class Dog extends Cat {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.species = "dog";
    this.master = master;
    this.voice = "Woof woof!";
  }

  introduce() {
    return Animal.prototype.introduce.call(this);
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
