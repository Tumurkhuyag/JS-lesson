// var a = [];

// a.push(34);
// a.push("hello");

// a.push(function() {
//   console.log("Сайн уу, массив дотроос мэндчилж байна...");

//   return function() {
//     console.log("Сайн уу, массив доторх функц доторх функцээс хэвлэв...");
//     return function() {
//       console.log("... Inception!!!! ...");
//     };
//   };
// });

// a[2]()()();

function prepareSimple() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  console.log("i бол давталт дууссаны дараа: " + i);

  return arr;
}

var massive1 = prepareSimple();

massive1[0]();
massive1[1]();
massive1[2]();

function prepare() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }

  console.log("i бол давталт дууссаны дараа: " + i);

  return arr;
}

var massive = prepare();

massive[0]();
massive[1]();
massive[2]();
