var uiController = (function() {
  //   console.log("This is uiController anonymous function");
  var x = 140;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function(a) {
      a = add(a);
      console.log("боловсруулсан утга : " + a);
    }
  };
})();

var financeController = (function() {
  //   console.log("That is financeController anonymous function");
})();

var appController = (function(uiController, financeController) {
  uiController.publicAdd(150);
  //   console.log("This is appController anonymous function");
})(uiController, financeController);

// var hunController = (function() {
//   // data encapsulation
//   // private data
//   var bodol = "Javascript толгой эргүүлмээр юм...";
//   // private function
//   function tsusGuih() {}
//   function huchilturugchiigAgaaraasSorjTsusruuOruulah() {}

//   return {
//     yarih: function() {
//       bodol = "Javascript бол лаг";
//       huchilturugchiigAgaaraasSorjTsusruuOruulah();
//       tsusGuih();
//       console.log("hi " + bodol);
//     }
//   };
// })();

// hunController.yarih();
