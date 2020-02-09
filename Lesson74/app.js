var a = ["cat", "mouse", "bird", "sun", "moon"];
// console.log(a.indexOf('bird'));
// console.log(a);
// a.splice(a.indexOf('mouse'), 1)
// a.splice(a.indexOf('sun'), 1)

a.splice(a.indexOf("5555"));

console.log(a);

var Expense = function(id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var e1 = new Expense(32, "Хүнс", 15000);
var e2 = new Expense(21, "Гутал", 25000);
var e3 = new Expense(7, "Лизинг", 1500000);

var e = [e1, e2, e3];

// console.log(e);
// ID = 2 хайж олж устгах ?
//var ids = [3, 2, 78];
//e.splice(ids.indexOf(78), 1);

// var ids = e.map(function(el, index, array){
//   return Math.round(el.value/2712)+'$';
// });

var ids = e.map(function(el) {
  return el.id;
});

console.log(e);
var index = ids.indexOf(7);

if (index !== -1) e.splice(index, 1);

console.log(ids);

console.log(e);
