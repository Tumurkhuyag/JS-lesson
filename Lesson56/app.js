// var math = {
//   abs: function(number) {
//     if (number < 0) return 0 - number;
//     else return number;
//   }
// };

// console.log(typeof Math);
// console.log(Math.abs(-20));

// console.log(math.abs(-300));

// console.log(Math.floor(12.4));
// console.log(Math.ceil(12.4));
// console.log(Math.round(12.4));

// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 10) + 1);

// --------------------------------------------------------------------------------

// var birthYears = [1982, 2005, 1990, 1988, 1985, 1955];

// // Насыг нь тодорхойлно
// var ages = findAges();

// function findAges() {
//   var ages = [];
//   for (i = 0; i < birthYears.length; i++) {
//     ages.push(new Date().getFullYear() - birthYears[i]);
//   }
//   return ages;
// }
// console.log(ages);

// // Насанд хүрсэн үгүйг нь шалгана (18 буюу түүнээс дээш настай бол насанд хүрсэн)
// function isAdult() {
//   var isOver18 = [];
//   for (i = 0; i < ages.length; i++) {
//     isOver18.push(18 <= ages[i]);
//   }
//   return isOver18;
// }
// console.log(isAdult());

// // Тэтгэвэрт гарсан үгүйг нь тодорхойлно (65 буюу түүнээс дээш настай бол тэтгэвэрт гарсан)
// function isRetired() {
//   var isOver64 = [];
//   for (i = 0; i < ages.length; i++) {
//     isOver64.push(65 <= ages[i]);
//   }
//   return isOver64;
// }
// console.log(isRetired());

// --------------------------------------------------------------------------------

var birthYears = [1951, 2005, 1990, 1988, 1985, 1955];
var bodyHeight = [170, 150, 180, 167, 157, 153];
var bodyWeight = [80, 45, 75, 62, 63, 65];
var isMale = [true, false, true, true, false, false];
var ages = processArray(birthYears, findOutAges);

// console.log(processArray(ages, checkAdult));
var bmr = processArray(isMale, findBMR);

// Array болон функцийн утгыг дамжуулж шинэ array үүсгэх үндсэн функц
function processArray(myArr, fn) {
  var arr = [];
  for (i = 0; i < myArr.length; i++) {
    arr.push(fn(myArr[i], i));
  }
  return arr;
}

// Нас олох функц
function findOutAges(el) {
  return new Date().getFullYear() - el;
}

// Насанд хүрсэн эсэхийг шалгах функц
function checkAdult(el) {
  return 18 <= el;
}

// Тэтгэвэрт гарсан эсэхийг шалгах anonymous функц
var isRetired = processArray(ages, function(el) {
  return 65 <= el;
});
// console.log(isRetired);

// Basal Metabolic Rate (BMR) олох функц
// Women: BMR = 655 + (9.6 * weight in kg) + (1.8 * height in cm) - (4.7 * age in years)
// Men: BMR = 66 + (13.7 * weight in kg) + (5 * height in cm) - (6.8 * age in years)
function findBMR(el, i) {
  if (el)
    return Math.round(
      66 + 13.7 * bodyWeight[i] + 5 * bodyHeight[i] - 6.8 * ages[i]
    );
  else return 655 + 9.6 * bodyWeight[i] + 1.8 * bodyHeight[i] - 4.7 * ages[i];
}

function calorieAdvice() {
  for (i = 0; i < bmr.length; i++) {
    if (isMale[i]) person = "эрэгтэй";
    else person = "эмэгтэй";

    console.log(
      birthYears[i] +
        " онд төрсөн " +
        ages[i] +
        " настай " +
        bodyHeight[i] +
        "см өндөртэй " +
        bodyWeight[i] +
        "кг жинтэй " +
        person +
        " өдөрт ойролцоогоор " +
        bmr[i] +
        " калориос ихгүй хоол хүнс хэрэглэвэл зохино"
    );
  }
}

calorieAdvice();
