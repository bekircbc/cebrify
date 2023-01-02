module.exports.calcBMI = function (weight, height) {
  const BMI = weight / height ** 2;
  return BMI;
};

module.exports.togglerStatus = function (actualStatus, value1, value2) {
  return actualStatus === value1 ? value2 : value1;
};

module.exports.togglerBoolean = function (value) {
  value = !value;
  return value;
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

module.exports.dateFormatter = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

module.exports.startLogOutTimer = function (time) {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
      localStorage.setItem("currentUser", JSON.stringify({}));
    }

    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
