
// Binary to decimal
function biToDec(binary) {
    let binaryString = String(binary);

    // Checking input for valid binary string using Regular expressions
    if (!/^-?[01]+(\.[01]+)?$/.test(binaryString)) {
        return 'Invalid input';
    }
    // Extracting sign
    const sign = binaryString.startsWith('-') ? -1 : 1;
    binaryString = binaryString.replace(/^-?/, ''); // Removing sign

    // Splitting binary string into integer and fractional parts
    const [integerPart, fractionalPart] = binaryString.split('.');
    // Converting integer part to decimal
    const integerDecimal = parseInt(integerPart, 2);
    // Converting fractional part to decimal
    let fractionalDecimal = 0;
    if (fractionalPart) {
        for (let i = 0; i < fractionalPart.length; i++) {
            fractionalDecimal += parseInt(fractionalPart[i]) * Math.pow(2, -(i + 1));
        }
    }
    const decimalValue = sign * (integerDecimal + fractionalDecimal);

    return decimalValue;
}

// Binary to octal
function biToOct(binary) {
    let binaryString = String(binary);

    if (!/^-?[01]+(\.[01]+)?$/.test(binaryString)) {
        return 'Invalid input';
    }
    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    if (binaryString.startsWith('-')) {
        sign = '-';
        binaryString = binaryString.substring(1); // Removing sign
    }
    // Separate integer and fractional parts
    if (binaryString.includes('.')) {
        [integerPart, fractionalPart] = binaryString.split('.');
    } else {
        integerPart = binaryString;
    }

    // Padding to make groups of 3
    while (integerPart.length % 3 !== 0) {
        integerPart = '0' + integerPart;
    }

    // Spliting integer part into groups of 3
    const integerGroups = integerPart.match(/.{1,3}/g);
    // Converting each group of 3 bits to its octal equivalent
    const octalIntegerPart = integerGroups.map(group => parseInt(group, 2).toString(8)).join('');

    // fractional part to octal
    let octalFractionalPart = '';
    if (fractionalPart) {
        while (fractionalPart.length % 3 !== 0) {
            fractionalPart += '0';
        }
        const fractionalGroups = fractionalPart.match(/.{1,3}/g);
        octalFractionalPart = fractionalGroups.map(group => parseInt(group, 2).toString(8)).join('');
    }

    // Joining the octal integer and fractional parts with the sign
    const octalValue = octalFractionalPart ? `${sign}${octalIntegerPart}.${octalFractionalPart}` : `${sign}${octalIntegerPart}`;

    return octalValue;
}


// Binary to hexadecimal
function biToHex(binary) {
    let binaryString = String(binary);
    if (!/^-?[01]+(\.[01]+)?$/.test(binaryString)) {
        return 'Invalid input';
    }

    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    if (binaryString.startsWith('-')) {
        sign = '-';
        binaryString = binaryString.substring(1); // Removing sign
    }

    if (binaryString.includes('.')) {
        [integerPart, fractionalPart] = binaryString.split('.');
    } else {
        integerPart = binaryString;
    }
    while (integerPart.length % 4 !== 0) {
        integerPart = '0' + integerPart;
    }

    // Spliting integer part into groups of 4
    const integerGroups = integerPart.match(/.{1,4}/g);

    // Converting group to hexadecimal
    const hexadecimalIntegerPart = integerGroups.map(group => parseInt(group, 2).toString(16)).join('');

    let hexadecimalFractionalPart = '';
    if (fractionalPart) {
        while (fractionalPart.length % 4 !== 0) {
            fractionalPart += '0';
        }

        const fractionalGroups = fractionalPart.match(/.{1,4}/g);

        hexadecimalFractionalPart = fractionalGroups.map(group => parseInt(group, 2).toString(16)).join('');
    }

    const hexadecimalValue = hexadecimalFractionalPart
        ? `${sign}${hexadecimalIntegerPart}.${hexadecimalFractionalPart}`
        : `${sign}${hexadecimalIntegerPart}`;

    return hexadecimalValue.toUpperCase();
}


// Decimal to binary
function decToBi(decimalNumber) {
    // Checking input
    if (isNaN(decimalNumber) || typeof decimalNumber !== 'number') {
        return 'Invalid input';
    }

    const sign = decimalNumber < 0 ? '-' : '';
    decimalNumber = Math.abs(decimalNumber);

    // Separating integer and fractional parts
    let integerPart = Math.floor(decimalNumber);
    let fractionalPart = decimalNumber - integerPart;

    // integer part to binary
    let binaryInteger = '';
    if (integerPart === 0) {
        binaryInteger = '0';
    } else {
        while (integerPart > 0) {
            binaryInteger = (integerPart % 2) + binaryInteger;
            integerPart = Math.floor(integerPart / 2);
        }
    }

    // fractional part to binary
    let binaryFractional = '';
    if (fractionalPart > 0) {
        binaryFractional = '.';
        let precision = 16; // maximum precision for fractional part
        while (precision > 0 && fractionalPart > 0) {
            fractionalPart *= 2;
            binaryFractional += Math.floor(fractionalPart);
            fractionalPart -= Math.floor(fractionalPart);
            precision--;
        }
    }

    const binaryResult = sign + binaryInteger + binaryFractional;

    return binaryResult;
}


// Octal to binary
function octToBi(octal) {
    let octalString = String(octal);

    if (!/^-?[0-7]+(\.[0-7]+)?$/.test(octalString)) {
        return 'Invalid input';
    }

    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    if (octalString.startsWith('-')) {
        sign = '-';
        octalString = octalString.substring(1);
    }

    // Separating integer and fractional parts
    if (octalString.includes('.')) {
        [integerPart, fractionalPart] = octalString.split('.');
    } else {
        integerPart = octalString;
    }

    let binaryIntegerPart = '';

    // integer part to binary
    for (let i = 0; i < integerPart.length; i++) {
        const octalDigit = parseInt(integerPart[i], 8).toString(2);
        binaryIntegerPart += '000'.substring(octalDigit.length) + octalDigit;
    }

    let binaryFractionalPart = '';

    // fractional part to binary
    if (fractionalPart) {
        for (let i = 0; i < fractionalPart.length; i++) {
            const octalDigit = parseInt(fractionalPart[i], 8).toString(2);
            binaryFractionalPart += '000'.substring(octalDigit.length) + octalDigit;
        }
    }

    const binaryResult = fractionalPart ? `${sign}${binaryIntegerPart}.${binaryFractionalPart}` : `${sign}${binaryIntegerPart}`;

    return binaryResult;
}


// Hexadecimal to binary
function hexToBi(hexadecimal) {
    let hexString = String(hexadecimal).toUpperCase();

    // Checking input for valid hexadecimal string using Regular expressions
    if (!/^-?[0-9A-F]+(\.[0-9A-F]+)?$/.test(hexString)) {
        return 'Invalid input';
    }

    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    // Extracting the sign bit and hexadecimal value
    if (hexString.startsWith('-')) {
        sign = '-';
        hexString = hexString.substring(1); // Removing sign
    }

    // Separate integer and fractional parts
    if (hexString.includes('.')) {
        [integerPart, fractionalPart] = hexString.split('.');
    } else {
        integerPart = hexString;
    }

    let binaryIntegerPart = '';

    // integer part to binary
    for (let i = 0; i < integerPart.length; i++) {
        const hexDigit = parseInt(integerPart[i], 16).toString(2);
        binaryIntegerPart += '0000'.substring(hexDigit.length) + hexDigit;
    }

    let binaryFractionalPart = '';

    // fractional part to binary
    if (fractionalPart) {
        for (let i = 0; i < fractionalPart.length; i++) {
            const hexDigit = parseInt(fractionalPart[i], 16).toString(2);
            binaryFractionalPart += '0000'.substring(hexDigit.length) + hexDigit;
        }
    }

    const binaryResult = fractionalPart ? `${sign}${binaryIntegerPart}.${binaryFractionalPart}` : `${sign}${binaryIntegerPart}`;

    return binaryResult;
}


// Substraction of two or multiple binary numbers
function sub(...binaryNumbers) {

    // Converting each binary number to decimal
    const binaryStrings = binaryNumbers.map(String)
    const decimalNumbers = binaryStrings.map(biToDec);

    const decimalSub = decimalNumbers.reduce((acc, num) => acc - num);

    return decimalSub < 0 ? '-' + decToBi(Math.abs(decimalSub)) : decToBi(decimalSub);

}


// Addition of two or multiple binary numbers
function add(...binaryNumbers) {
    // Converting binary numbers to decimal
    const binaryStrings = binaryNumbers.map(String)
    const decimalNumbers = binaryStrings.map(biToDec);

    // Adding decimal numbers
    const decimalSum = decimalNumbers.reduce((acc, num) => acc + num, 0);

    // Convert the decimalSum to binary
    const binaryResult = decToBi(decimalSum);

    return binaryResult;
}

// Multiplication of two or multiple binary numbers
function mul(...binaryNumbers) {
    // Converting binary numbers to decimal
    const binaryStrings = binaryNumbers.map(String)
    const decimalNumbers = binaryStrings.map(biToDec);

    // Multiplying decimal numbers
    const decimalSum = decimalNumbers.reduce((acc, num) => acc * num, 1);

    // decimal to binary
    const binaryResult = decToBi(decimalSum);

    return binaryResult;
}

// Division of binary numbers
function div(dividend, divisor) {
    let biDividend = String(dividend);
    let biDivisor = String(divisor);
    let decDividend = biToDec(biDividend);
    let decDivisor = biToDec(biDivisor)
    let result
    if (decDivisor !== 0) {
        result = decDividend / decDivisor;
    } else {
        return "Cannot divide by zero";
    }
    return result < 0 ? '-' + decToBi(Math.abs(result)): decToBi(result)
}

module.exports = {add, sub, mul, div, biToDec, biToOct, biToHex, decToBi, octToBi, hexToBi}