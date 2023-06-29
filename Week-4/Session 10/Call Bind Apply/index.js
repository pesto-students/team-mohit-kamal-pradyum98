class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}

class ScientificCalculator extends Calculator {
    square(a) {
        return a * a;
    }
    cube(a) {
        return a * a * a;
    }
    power(num, exp) {
        return num ** exp;
    }
}

const sciCalc = new ScientificCalculator();
const addResult = ScientificCalculator.prototype.add.call(sciCalc, 10, 5);
const subtractResult = ScientificCalculator.prototype.subtract.apply(sciCalc, [10, 5]);
const multiplyByTwo = ScientificCalculator.prototype.multiply.bind(null, 2);
const powerOfThree = ScientificCalculator.prototype.power.bind(null, 3);

const resultOfMultiplyByTwo = multiplyByTwo(5);
const resultOfPowerOfThree = powerOfThree(3);

console.log(addResult, 'addResult');
console.log(subtractResult, 'subtractResult');
console.log(resultOfMultiplyByTwo, 'resultOfMultiplyByTwo');
console.log(resultOfPowerOfThree, 'resultOfPowerOfThree');
