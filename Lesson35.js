// console.log(this);

// hello();

// function hello() {
//   console.log("Hello функц ажиллаж байна.");
//   console.log(this);
//   console.log(globalThis);
// }

var person1 = {
  name: "Tom",
  printThis: function() {
    console.log(this);

    function secondFunction() {
      console.log("secondFunction ажиллалаа: " + this);
    }

    secondFunction();
  }
};

var person2 = {
  name: "Uno"
};

person2.printThis = person1.printThis;

person2.printThis();
person1.printThis();
