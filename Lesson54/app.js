function hi() {
  console.log("Sain uu");
}

hi();

console.log(hi.__proto__);
console.log(hi.__proto__.bind);

var img = {
  file: "c:/images/a123.jpg",
  content: "муур",
  zuragTanih: function(color, size) {
    console.log(
      "Энэ зураг дээр " +
        color +
        " өнгөтэй " +
        size +
        " хэмжээтэй " +
        this.content +
        " байгаа нь танигдлаа"
    );
  }
};

img.zuragTanih("алаг эрээн", "бяцхан");

var myImg = {
  file: "c:/images/a456.jpg",
  content: "нохой"
};

var herImg = {
  file: "c:/images/a456.jpg",
  content: "загас"
};

// BIND
mySuperZuragTanihFunction = img.zuragTanih.bind(myImg, "хар", "үлэмж");
mySuperZuragTanihFunction();
mySuperZuragTanihFunction();
mySuperZuragTanihFunction();

// CALL
img.zuragTanih.call(herImg, "алтан шаргал", "том");

// APPLY
var args = ["цэнхэр", "аварга"];
img.zuragTanih.apply(herImg, args);
