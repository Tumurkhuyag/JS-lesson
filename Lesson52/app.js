console.log("Working");

// p1 гэдэг объект үүсгэе
var p1 = {
  name: "Bold",
  job: "developer",
  greeting: function() {
    console.log(this.name + " is " + this.job + ".");
  }
};

p1.greeting();

// Доорх кодчилол дээрх кодчилолыг орлох боломжтойгоос гадна JS -ийг бусад хэлнээс илүү хүчирхэг болгодог
var p2 = {};

p2.name = "Tom";
p2.job = "designer";
p2.greeting = function() {
  console.log(this.name + " is " + this.job + ".");
};

p2.greeting();

// Дээрх кодчилолыг ашиглан ямар нэг объект ирэх үед түүнийг өргөтгөж сайжруулах боломжтой
// p2 объектийг өртгөтгөе

p2.lifestyle = function() {
  console.log(this.name + " likes healthy and minimal lifestyle.");
};

p2.lifestyle.prototype.lf1 = "Minimal";
console.log(p2.lifestyle.__proto__);
console.log(p2.lifestyle.prototype);

p2.age = 30;

p2.clothes = {};

p2.lifestyle();
console.log(p2.age);
console.log(p2.clothes);

console.log(p2);

// typeof гэдэг функц ашиглан аливаа хувьсагчийн төрлийг таних боломжтой
console.log(typeof p2);
console.log(typeof p2.lifestyle);
console.log(typeof p2.name);
console.log(typeof p2.age);
console.log(typeof p2.clothes);
console.log(
  "p2.clothes.constructor.prototype бол " +
    typeof p2.clothes.constructor.prototype
);
console.log("p2.clothes.__proto__ бол " + typeof p2.clothes.__proto__);

console.log(p2.clothes.constructor.name);

// String function -ийг өргөтгөе
String.prototype.sainuu = function() {
  console.log("Good afternoon!!!!!");
  return "sainuu function -ийн утга";
};

console.log("Энэ бол string".sainuu());

console.log(typeof String.prototype.sainuu);
console.log(String.prototype.sainuu.__proto__);
console.log(String.prototype.sainuu.prototype);
console.log(String.prototype);
console.log(String);
console.log(
  "String.prototype нь " +
    String.prototype +
    " бөгөөд type нь " +
    typeof String.prototype +
    " юм"
);
console.log("String нь " + String + " бөгөөд type нь " + typeof String + " юм");

// Объектэйс объект удамшуулах замаар materi -> animal -> person -> developer гэсэн 4 объект үүсгэе
null;
var Object;
var materi = { name: "биет" };
materi.seen = function() {
  console.log(this.name + " харагдлаа");
};

var animal = Object.create(materi);
animal.name = "амьтан";
animal.eat = function() {
  console.log(this.name + " хоололлоо");
};
animal.move = function() {
  console.log(this.name + " хөдөллөө");
};

var person = Object.create(animal);
person.name = "хүн";
person.getOrder = function(order) {
  console.log(this.name + " " + order + " гэсэн тушаал авлаа");
};

var developer = Object.create(person);
developer.name = "Болдоо";
developer.job = "хөгжүүлэгч";
developer.skill = "апп -ын кодыг бичсэн";
developer.developApp = function(appName) {
  console.log(this.name + " " + this.job + " " + appName + " " + this.skill);
};

var designer = Object.create(person);
designer.name = "Төмөрөө";
designer.job = "дизайнер";
designer.skill = "апп -ын дизайныг гаргасан";
designer.designApp = function(appName) {
  console.log(this.name + " " + this.job + " " + appName + " " + this.skill);
};

console.log(developer.name);
console.log(developer);
console.log(developer.__proto__);
console.log(developer.__proto__.__proto__);
console.log(developer.__proto__.__proto__.__proto__);
console.log(developer.__proto__.__proto__.__proto__.__proto__);
console.log(developer.__proto__.__proto__.__proto__.__proto__.__proto__);

developer.seen();
animal.seen();

designer.designApp("MemoWords");
developer.developApp("MemoWords");
