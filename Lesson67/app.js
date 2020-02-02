var data = {
  items: {
    inc: [],
    exp: []
  },

  totals: {
    inc: 0,
    exp: 0
  }
};

var type = "exp";
var desc = "Цалин";
var value = 20000000;

data.items[type].push(desc);

console.log(data.items[type]);
