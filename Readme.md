 # bical - Binary Calculator and Converter
`bical` is a JavaScript library for binary calculation and conversion. It provides functions to convert binary numbers to decimal, octal, and hexadecimal, as well as perform binary arithmetic operations such as addition, subtraction, multiplication, and division.

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Available Functions](#available-functions)
4. [Contribution](#contribution)
5. [License](#license)

## Installation
To use `bical` in your Node.js project, you can install it,
Using npm:

```bash
  npm i bical
``` 

# Usage
```js
  const bical = require('bical');

  // Example usage
  const binaryNumberFirst = 1100.011;
  const decimalValueFirst = bical.biToDec(binaryNumberFirst);
  console.log(decimalValueFirst); // Output: 12.375

  const binaryNumberSecond = -11.01;
  const decimalNumberSecond = bical.biToDec(binaryNumberSecond);
  console.log(decimalNumberSecond); // Output: -3.25
``` 

# Available Functions
## Arithmetic Operations
- add: Add two or more numbers.
```js
bical.add(binaryNumber1, binaryNumber2, ...);
```
- sub: Subtract two or more numbers.
```js
bical.sub(binaryNumber1, binaryNumber2, ...);
```
- mul: Multiply two or more numbers.
```js
bical.mul(binaryNumber1, binaryNumber2, ...);
```
- div: Divide two numbers.
```js
bical.div(dividend, divisor);
```

## Conversions
- biToDec: Binary to Decimal.
```js
  bical.biToDec(binaryNumber);
```
- biToOct: Binary to Octal.
```js
  bical.biToOct(binaryNumber);
```
- biToHex: Binary to Hexadecimal.
```js
  bical.biToHex(binaryNumber);
```
- decToBi: Decimal to Binary.
```js
  bical.decToBi(decimalNumber);
```
- octToBi: Octal to Binary.
```js
  bical.octToBi(decimalNumber);
```
- hexToBi: Hexadecimal to Binary.
```js
  bical.hexToBi(decimalNumber);
```

# Contribution
If you encounter any issues or have suggestions for improvement, feel free to open an issue. Contributions are welcome!

# License
This project is licensed under the MIT License.