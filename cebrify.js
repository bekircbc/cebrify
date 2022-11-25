module.exports.calcBMI = function (weight, height) {
  const BMI = weight / height ** 2;
  return BMI;
};

module.exports.toggler = function (actualStatus, value1, value2) {
  return actualStatus === value1 ? value2 : value1;
};

module.exports.averageRatingCalc = function (array) {
  array.forEach(function (element) {
    if (element.reviews.length === 0) element.averageRating = 0;
    else {
      element.averageRating =
        Math.ceil(
          (element.reviews.reduce((acc, review) => (acc += review.rating), 0) /
            element.reviews.length) *
            100
        ) / 100;
    }
    return element.averageRating;
  });
};

module.exports.exchangeRate = function (amount, rate, currency, tocurrency) {
  let ergebnis = (amount * rate).toFixed(2);
  let text = `${amount} currency to ${tocurrency} with actual ${rate} = ${ergebnis} `;
  return [text, ergebnis];
};
