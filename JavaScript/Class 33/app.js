// console.log("Hello");

// Methods in Objects

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6, 7],
  calcAnnual: function (percentIfDisc) {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
      if (plan1.discountMonths[i] === thisMo) {
        bestPrice = plan1.price * percentIfDisc;
        break;
      }
    }
    return bestPrice * 12;
  },
};

var annualPrice = plan1.calcAnnual(0.85);

console.log(annualPrice);

// Using This (Keyword)

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6, 7],
  calcAnnual: function (percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] === thisMo) {
        bestPrice = this.price * percentIfDisc;
        break;
      }
    }
    return bestPrice * 12;
  },
};
