function Materi(color) {
  this.color = color;
  this.name = "биет";
}

Materi.prototype.seen = function() {
  console.log(this.color + " өнгөтэй " + this.name + " харагдлаа");
};

var m1 = new Materi("ягаан");
m1.seen();
