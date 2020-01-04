function Materi(color, size) {
  this.color = color;
  this.size = size;
  this.name = "биет";
}

Materi.prototype.seen = function() {
  console.log(
    this.color + " өнгөтэй " + this.size + " " + this.name + " харагдлаа"
  );
};

var m1 = new Materi("ягаан", "том");
m1.seen();

function Animal(name, color, size) {
  Materi.call(this, color, size);
  this.name = name;
}

Animal.prototype = Object.create(Materi.prototype);

var cat = new Animal("муур", "эрээн", "бяцхан");
console.log(cat.name);
console.log(cat.color);
cat.seen();

function Person(name, job, color, size) {
  Animal.call(this, job, color, size);
  this.name = name;
  this.job = job;
}

Person.prototype = Object.create(Animal.prototype);
Person.prototype.speak = function(word) {
  console.log(
    this.name +
      " нэртэй " +
      this.job +
      " мэргэжилтэй " +
      this.color +
      " арьстай " +
      this.size +
      ' нуруутай хүн "' +
      word +
      '" гэж хэллээ...'
  );
};

var p1 = new Person("Батаа", "хөгжүүлэгч", "шар", "өндөр");
p1.speak("JS лайтай юмаа");
