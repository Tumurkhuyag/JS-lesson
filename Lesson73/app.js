var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

a.addEventListener("click", function(event) {
  // Функц -ийн дамжуулж буй event parameter хойно .target.id гэж бичиж өгсөнөөр ямар id -тай элемент дээр дарж буй нь харагдах болно
  console.log(event.target.id + " дарагдлаа");
});

// b.addEventListener("click", function(event) {
//   console.log("B дарагдлаа");
// });

// c.addEventListener("click", function(event) {
//   console.log("C дарагдлаа");
// });

// d.addEventListener("click", function(event) {
//   console.log("D дарагдлаа");
// });
