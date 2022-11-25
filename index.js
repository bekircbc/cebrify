import lodash from "lodash";

exports.calcBMI = function (weight, height) {
  const BMI = weight / height ** 2;
  return BMI;
};

exports.toggler = function (boolean) {
  value ? !value : value;
};

exports.averageCalc = function (array) {
  array.forEach(function (element) {
    if (array.review.length === 0) element.averageRating = 0;
    else {
      const averageRating = Math.ceil(
        ((element.reviews.reduce((acc, review) => (acc += review.rating), 0) /
          element.reviews.length) *
          100) /
          100
      );
    }
  });
};
