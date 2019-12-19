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
