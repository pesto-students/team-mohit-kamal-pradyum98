const evaluateRPN = (array) => {
    const stack = [];
    for (let i of array) {
        if (!isNaN(i)) {
            stack.push(parseInt(i));
        } else {
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            if (i == '+') {
                stack.push(operand1 + operand2);
            } else if (i == '*') {
                stack.push(operand1 * operand2);
            } else if (i == '-') {
                stack.push(operand1 - operand2);
            } else if (i == '/') {
                stack.push(Math.trunc(operand1 / operand2));
            }
        }
    }
    return stack.pop();
};

const tokens = ['1', '2', '+', '3', '4', '5', '*', '+', '*'];
const result = evaluateRPN(tokens);
console.log('Result:', result);
