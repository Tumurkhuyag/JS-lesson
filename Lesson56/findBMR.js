var birthYears = [1951, 2005, 1990, 1988, 1985, 1955];
var bodyHeight = [170, 150, 180, 167, 157, 153];
var bodyWeight = [80, 45, 75, 62, 63, 65];
var isMale = [true, false, true, true, false, false];
var ages = processArray(birthYears, function(el) {
  return new Date().getFullYear() - el;
});

var bmr = processArray(isMale, findBMR);

function processArray(myArr, fn) {
  var arr = [];
  for (i = 0; i < myArr.length; i++) {
    arr.push(fn(myArr[i], i));
  }
  return arr;
}

function findBMR(el, i) {
  // Men: BMR = 66 + (13.7 * weight in kg) + (5 * height in cm) - (6.8 * age in years)
  if (el)
    return Math.round(
      66 + 13.7 * bodyWeight[i] + 5 * bodyHeight[i] - 6.8 * ages[i]
    );
  // Women: BMR = 655 + (9.6 * weight in kg) + (1.8 * height in cm) - (4.7 * age in years)
  else
    return Math.round(
      655 + 9.6 * bodyWeight[i] + 1.8 * bodyHeight[i] - 4.7 * ages[i]
    );
}
