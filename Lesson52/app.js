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
