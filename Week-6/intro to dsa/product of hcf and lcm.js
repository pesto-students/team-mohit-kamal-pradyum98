const calculateHCF = (a, b) => {
    if (b === 0) {
        return a;
    }
    return calculateHCF(b, a % b);
};

const calculateLCM = (a, b) => {
    const hcf = calculateHCF(a, b);
    const lcm = (a * b) / hcf;
    return lcm;
};
const productLcmHcf = (num1, num2) => {
    const lcm = calculateLCM(num1, num2);
    const hcf = calculateHCF(num1, num2);

    const product = lcm * hcf;
    return product;
};

console.log(productLcmHcf(15,25));
