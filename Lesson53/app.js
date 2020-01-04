// Amitan гэдэг функц дотор шинээр object үүсгэлээ.
function Amitan(ner) {
  var obj = Object.create(Amitan.prototype);
  obj.name = ner;
  obj.eat = function() {
    console.log(obj.name + " is eating grass.");
  };
  return obj;
}

a1 = Amitan("Cow");
a1.eat();

// this гэдэг түлхүүр үг ашиглан шинээр object үүсгэж бичиглэлээ илүү цэвэрхэн болгосон
function Animal(ner) {
  this.name = ner;
  this.eat = function() {
    console.log(this.name + " is eating grass.");
  };
}

// new гэдэг түлхүүр үг ашигласнаар үүнийг функцийн 2 дахь төрөл буюу байгуулагч функц (construction function) гэж нэрэлдэг
a1 = new Animal("Horse");
a1.eat();

// Функц дотор ашигласан this гэдэг operator нь window object -ийг зааж байгааг батлав
function a() {
  console.log(this);
}

a();

// Шинээр a2, a3 гэсэн object -ууд үүсгэв.
a2 = new Animal("Sheep");
a2.eat();

a3 = new Animal("Goat");
a3.eat();

console.log(a2);
console.log(a2.__proto__);
console.log(a3.__proto__);
console.log(a2.__proto__ === a3.__proto__);
console.log(Animal.prototype);
console.log(a2.__proto__ === Animal.prototype);

// Үр ашиггүй функцийг сайжруулая
function Person(ner) {
  this.name = ner;
}

Person.prototype.drink = function() {
  console.log(this.name + " is drinking.");
};

var p1 = new Person("Tom");
p1.drink();

console.log(p1);
console.log(p1.__proto__);
console.log(Person.prototype + "Энэ хүрсэн");

// var materi = {
//   name: "биет"
// };

// var plant = Object.create(materi);
// plant.name = "ургамал";

// console.log(plant.name);

function Animal1(ner) {
  this.name = ner;
  this.eat = function() {
    console.log(this.name + " is eating grass.");
    console.log(Animal1.prototype);
    console.log(this);
    console.log(this === a4);
  };
}

function Animal2() {
  this.obj = function() {
    console.log(this);
    console.log(this === a5);
  };
}

a4 = new Animal1("Zebra");
a4.eat();

a5 = new Animal2();
a5.obj();

console.log(a4.__proto__.__proto__.constructor.prototype);
console.log(Animal1.prototype.__proto__.constructor.prototype);

console.log(
  a4.__proto__.__proto__.constructor.prototype === Animal1.prototype.__proto__
);

console.log(Animal1.prototype);

function Hi(ner) {
  var obj = Object.create(Hi.prototype);
  obj.name = ner;
  console.log(obj);
  return obj;
}

Hi.prototype.greeting = function() {
  console.log(this.name + " hello");
  console.log(this);
  console.log(this.__proto__);
};

g1 = Hi("Muugii");
g1.greeting();
