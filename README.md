# About Cebrify

- Cebrify is a small npm package for calculating some features.

- Cebrify can calculate averages.

- install cebrify with the following command

        npm install cebrify

- cebrify have this functions available.

        cebrify.calcBMI
        cebrify.toggler
        cebrify.averageRatingCalc
        cebrify.exchangeRate

## calcBMI

- for using this function write the following code to your own code.

        cebrify.calcBMI(weight, height)

## toggler

- for using this function write the following code to your own code.

        cebrify.toggler(actualStatus, value1, value2)

## averageRatingCalc

- for using this function write the following code to your own code.

        cebrify.averageRatingCalc(object)

- Data structure of object must be as follows :

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

# exchangeRate

- for using this function write the following code to your own code.

        cebrify.averageRatingCalc(amount, rate, currency, tocurrrency)

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
