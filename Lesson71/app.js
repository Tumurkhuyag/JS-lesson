// Санхүүтэй ажиллах контроллор
var financeController = (function() {
  // private function
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // private function
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Зардал болон орлогуудын нийлбэрийг олдог функц
  var calculateTotals = function(type) {
    var sum = 0;
    data.items[type].forEach(function(el) {
      sum = sum + el.value;
    });

    data.totals[type] = sum;
  };

  // private data
  var data = {
    items: {
      inc: [],
      exp: []
    },

    totals: {
      // Нийт орлого
      inc: 0,

      // Нийт зардал
      exp: 0
    },

    // Үлдэгдлийн дүн
    balance: 0,

    // Орлогогд эзлэх зардлын хувь
    expRatio: 0
  };

  return {
    calculateBalance: function() {
      // Орлогуудын нийлбэрийг олсон
      calculateTotals("inc");

      // Зардлуудын нийлбэрийг олсон
      calculateTotals("exp");

      // Балансыг тооцоолсон
      data.balance = data.totals.inc - data.totals.exp;

      // Орлогод эзлэх зардлын хувийг тооцоолсон
      data.expRatio = Math.round((data.totals.exp / data.totals.inc) * 100);
    },

    getBalance: function() {
      return {
        // Аль болох хамгийн бага өгөгдлийг бусдад ил болгосноор цаашид алдаа гарахгүй байх давуу талтай
        balance: data.balance,
        expenseRatio: data.expRatio,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp
      };
    },

    addItem: function(type, desc, val) {
      var item, id;

      if (data.items[type].length === 0) {
        id = 1;
      } else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);

      return item;
    },

    seeData: function() {
      return data;
    }
  };
})();

// Програмын холбогч контроллор
var appController = function(uiController, financeController) {
  var ctrlAddItem = function() {
    // 1. Оруулах өгөгдлийг дэлгэцнээс олж авна.
    var input = uiController.getInput();

    if (input.description !== "" && input.value !== "") {
      // 2. Олж авсан өгөгдлөө санхүүгийн контроллорт дамжуулж, тэнд хадгална
      var item = financeController.addItem(
        input.type,
        input.description,
        input.value
      );
      // 3. Олж авсан өгөгдлөө веб дээр тохирох хэёэгт нь гаргана
      uiController.addListItem(item, input.type);
      uiController.clearFields();

      // 4. Төсвийг тооцоолно
      financeController.calculateBalance();

      // 5. Эцсийн үлдэгдлийг тооцоолно
      var balance = financeController.getBalance();

      // 6. Тооцоог дэлгэцэнд гаргана
      console.log(balance);
    }
  };
};
