var updateBalance = function() {
  // 4. Төсвийг тооцоолно
  financeController.calculateBalance();

  // 5. Эцсийн үлдэгдлийг тооцоолно
  var balance = financeController.getBalance();

  // 6. Тооцоог дэлгэцэнд гаргана
  uiController.showBalance(balance);
  console.log(balance);
};

updateBalance();
