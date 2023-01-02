# About Cebrify

![logo](Cebrify.png)

- Cebrify is a small npm package for calculating some features.

- Install cebrify with the following command

        npm install cebrify

- Create a index.js file and add the following code for using cebrify.

        import pkg from "cebrify";

        const { calcBMI, togglerStatus,togglerBoolean, averageRatingCalc, exchangeRate, dateFormatter, startLogOutTimer } = pkg;

- Cebrify has this functions available.

        pkg.calcBMI
        pkg.togglerStatus
        pkg.togglerBoolean
        pkg.averageRatingCalc
        pkg.exchangeRate
        pkg.dateFormatter
        pkg.startLogOutTimer

## calcBMI

- Write the following code for using calcBMI function.

- Calculate the BMI of a human with 77 kg weight and 1.78 m height.

        pkg.calcBMI(77, 1.78)

## toggler

- Write the following code for using toggler function .

        pkg.togglerStatus(development, deployment, development)

- togglerBoolean

        pkg.togglerBoolean(isVisible)

## averageRatingCalc

- Data structure of object has to be as follows :

        const data = {
          products: [
          {
              name: "iPhone 9",
              category: "smartphones",
              price: 549,
              stock: 94,
              reviews: [
                 {
                name: "lover64",
                rating: 1,
                comment:"Esse",
              },
              ],
            averageRating: 0,
            description: "An apple mobile",
            discountPercentage: 12.96,
            },

- Write the following code for using averageRatingCalc function .

          pkg.averageRatingCalc(data.products)

## exchangeRate

- Write the following code for using this function .

        pkg.averageRatingCalc(100, 1.14, "USD", "EUR")

        // Exchange 100 USD to EUR with exchange rate : 1.14

## dateFormatter

- Write the following code for using this function .

        pkg.dateFormatter(19.01.2022)

        // Format date for especially bank apps..

## startLogOutTimer

- Write the following code for using this function .

        pkg.startLogOutTimer(300)

        // Start log out timer for 5 minute

# About npm Packages

- create your own package

- npm publish

- sign up to npm

- npm login ---

- after login, npm publish

## scoped and unscoped modules

- npm init --scope=@scope-name (scopped)

- npm init (unscopped)

## updating

-- npm version patch

-- npm publish

## for more information

- (Contributing packages to the registry)[https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry]
