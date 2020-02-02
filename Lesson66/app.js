var Income = function(id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var Expense = function(id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var i1 = new Income(1, "Цалин", 2500000);
var i2 = new Income(1, "Сугалаа хожсон", 25000000);

// console.log(i1);
// console.log(i2);

// var incomes = [];
// var expenses = [];

// incomes.push(i1);
// incomes.push(i2);

// console.log(incomes);

// console.log(incomes[1].value)

var data = {
  allItems: {
    inc: [],
    exp: []
  },

  totals: {
    inc: 1000,
    exp: 500
  }
};

data.allItems.inc.push(i1);

console.log(data.allItems.inc[0]);
