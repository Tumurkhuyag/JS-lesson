// IIFE = Immedietely Invoked Function Expression

// Function statement
function hi() {
  console.log("hi!");
}

// Hoisting -с үүдэлтэй function expression -г зарлагдсан байхаас нь өмнө дуудаж болдоггүй
// hello();

// Function expression
var hello = function() {
  console.log("hello!");
};

// Энэхүү бичилтийн давуу тал нь тухайн функц доторх variable бусад коднуудад нөлөөлөхгүй зөвхөн функц дотроо л ашиглагдах боломжтой болдог. (private, data incapsulation, data protection)
(function() {
  var name = "Сараа";
  console.log(name + ", Энэ бол нэн даруй дуудагдаж буй нэргүй функц!");
  (function() {
    var name = "Tom";
    console.log(name + ", This is IIFE!");

    console.log(name + ", Cool");
  })();
  console.log(name + ", Бусад variable үүнд нөлөөлж чадахгүй");
})();
