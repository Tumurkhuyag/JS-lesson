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

// new гэдэг оператор ашиглан шинээр object үүсгэж бичиглэлээ илүү цэвэрхэн болгосон
function Animal(ner) {
  this.name = ner;
  this.eat = function() {
    console.log(this.name + " is eating grass.");
  };
}

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
console.log(Person.prototype);
