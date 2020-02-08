var uiController = (function() {
    var DOMstrings = {
      totalIncomeLabel: ".budget__income--value",
      totalExpenseLabel: ".budget__expenses--value",
      balanceLabel: ".budget__value",
      expenseRatioLabel: ".budget__expenses--percentage"
    };
}),

showBalance = function(balance) {
  document.querySelector(DOMstrings.balanceLabel).textContent = balance.balance;
  document.querySelector(DOMstrings.totalIncomeLabel).textContent =
    balance.totalInc;
  document.querySelector(DOMstrings.totalExpenseLabel).textContent =
    balance.totalExp;
  document.querySelector(DOMstrings.expenseRatioLabel).textContent =
    balance.expenseRatio + "%";
},

var appController = (function(uiController, financeController) {
    var ctrlAddItem = function() {
      // 1. Оруулах өгөгдлийг дэлгэцнээс олж авна.
      var input = uiController.getInput();
  
      if (input.description !== "" && input.value !== "") {

        // 6. Тооцоог дэлгэцэнд гаргана
        uiController.showBalance(balance);
        console.log(balance);
      }
    };
  
    return {
      init: function() {
        uiController.showBalance({
          // Програм эхэлхэд дэлгэцэнд харагдах балансын утгуудыг нойллох
          balance: 0,
          expenseRatio: 0,
          totalInc: 0,
          totalExp: 0
        });
      }
    };
  })(uiController, financeController);
  
  appController.init();