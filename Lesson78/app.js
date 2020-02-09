Expense.prototype.calcPercentage = function(totalIncome) {
  if (totalIncome > 0) {
    this.percentage = Math.round((this.value / totalIncome) * 100);
  } else this.percentage = 0;
};

Expense.prototype.getPercentage = function() {
  return this.percentage;
};

function calculatePercentages() {
  data.items.exp.forEach(function(el) {
    el.calcPercentage(data.totals.inc);
  });
}

function getPercentages() {
  var allPercentages = data.items.exp.map(function(el) {
    return el.getPercentage();
  });

  return allPercentages;
}

// 7. Элементүүдийн хувийг тооцоолно
financeController.calculatePercentages();

// 8. Элементүүдийн хувийг хүлээж авна
var allPercentages = financeController.getPercentages();

// 9. Элементүүдийн хувийг дэлгэцэнд гаргана
console.log(allPercentages);
