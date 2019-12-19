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
