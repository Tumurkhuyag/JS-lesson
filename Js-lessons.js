/*
// -------------------- Lesson 30 --------------------

var name = "Bat";

function first() {
  var a = "Hello!";
  second();
  var x = a + name;
}

function second() {
  var b = "Hi!";
  third();
  var z = b + name;
}

function third() {
  var c = "Hey!";
  var z = c + name;
}

first();

// -------------------- Lesson 31 --------------------

var a = "hello";

console.log(a);

a = undefined;

console.log(a);

a === undefined
  ? console.log("a нь undefined байна")
  : console.log("a нь утгатай байна");

// -------------------- Lesson 32 --------------------

// x();

// function x() {
//   console.log("x функц дуудагдсан байна");
// }

var name = "Tom";

function y(param) {
  param();
  console.log("y is function declaration." + " And the parameter is " + param);
}

var x = function(p) {
  console.log("x is function expression ");
};

y(x);

// -------------------- Lesson 33 --------------------

PrintAge();

var age = 23;

// console.log(age);

function PrintAge(country, city, age) {
  //   var age = 33;
  console.log(country + " бол улс " + city + " бол хот " + age + " бол нас ");
}

PrintAge("Монгол", "Улаанбаатар", 33);

// -------------------- Lesson 34 --------------------

// function x() {
//   var a = 1;
//   y();
//   function y() {
//     var b = 20;
//     z();
//     function z() {
//       var c = 7;
//       console.log(a + b + c);
//     }
//   }
// }

x();

function x() {
  var a = 1;
  lastResult = y(a);
  console.log(lastResult);
}

function y(q) {
  var b = 20 + q;
  var result = z(b);
  return result;
}

function z(w) {
  var c = 7 + w;
  return c;
}

// -------------------- Lesson 35 --------------------

// console.log(this);

// hello();

// function hello() {
//   console.log("Hello функц ажиллаж байна.");
//   console.log(this);
//   console.log(globalThis);
// }

var person1 = {
  name: "Tom",
  printThis: function() {
    console.log(this);

    function secondFunction() {
      console.log("secondFunction ажиллалаа: " + this);
    }

    secondFunction();
  }
};

var person2 = {
  name: "Uno"
};

person2.printThis = person1.printThis;

person2.printThis();
person1.printThis();

// -------------------- Lesson 36 --------------------

console.log(
  "Git, HTML, CSS, DOM руу хандах, Эвент гэж юу вэ?, Callback & Anonymous function, Тоглоом зохиох, Кодоо git дээр байрлуулах, Интернетэд байрлуулах, Git branch үүсгэх"
);

// -------------------- Lesson 37 - 50 --------------------

("Dice Game хийсэн");

// -------------------- Lesson 51 --------------------


// -------------------- Lesson 52 --------------------

var p1 = {
  name: "Tom",
  job: "програм хөгжүүлэгч",
  info: function() {
    console.log(this.name + " нэртэй хүн " + this.job + " мэргэжилтэй.");
  }
};
p1.info();

var p2 = {};

p2.name = "Erka";
p2.job = "Designer";
p2.info = function() {
  console.log(this.name + " нэртэй хүн " + this.job + " мэргэжилтэй.");
};

p2.info();
String.prototype.sainuu = function() {
  console.log("Өдрийн мэнд!!!");
};

console.log("Dev".sainuu());
*/

// Prototype chain
var substance = { name: "substance" };
var animal = Object.create(substance);
animal.name = "animal";

var human = Object.create(animal);
human.name = "human";

var soldier = Object.create(human);
soldier.name = "soldier";

var regularSoldier = Object.create(soldier);
regularSoldier.id = [];

regularSoldier.id[0] = "Kevin";
regularSoldier.tushaalAvah = function(tushaal) {
  console.log(this.id[0] + " явган цэрэг " + tushaal + " гэсэн тушаал авлаа");
};

console.log(
  regularSoldier.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);

regularSoldier.tushaalAvah("Эзэл!!!");
