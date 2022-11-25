# About Cebrify

![logo](Cebrify.png)

- Cebrify is a small npm package for calculating some features.

- Cebrify can calculate averages.

- install cebrify with the following command

        npm install cebrify

- cebrify have this functions available.

        import pkg from "cebrify";

        const { calcBMI, toggler, averageRatingCalc, exchangeRate } = pkg;

        pkg.calcBMI
        pkg.toggler
        pkg.averageRatingCalc
        pkg.exchangeRate

## calcBMI

- for using this function write the following code to your own code.

- for calculating the BMI of a human with 77 kg weight and 1.78 m height.

        pkg.calcBMI(77, 1.78)

## toggler

- for using this function write the following code to your own code.

        pkg.toggler(development, deployment, development)

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

- for using this function write the following code to your own code.

          pkg.averageRatingCalc(data.products)

# exchangeRate

- for using this function write the following code to your own code.

- for exchanging 100 USD to EUR with exchannge rate : 1.14

        pkg.averageRatingCalc(100, 1.14, "USD", "EUR")

# About npm Packages

- create your own package

- npm publish

- sign up to npm

- npm login ---

- after login npm publish

## scoped and unscoped modules

- npm init --scope=@scope-name

- npm init (unscopped)

## updating

-- npm version patch

-- npm publish

## for more info

- (Contributing packages to the registry)[https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry]
