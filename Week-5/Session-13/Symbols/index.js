const generate = () => {
    let id = 0;
    return () => {
        id++;
        return Symbol(`TRANSACTION_ID_${id}`)
    }
}

const generateTransaction = generate();

const transaction1 = generateTransaction();
const transaction2 = generateTransaction();
const transaction3 = generateTransaction();

console.log(transaction1, 'transaction1');
console.log(transaction2, 'transaction2');
console.log(transaction3, 'transaction3');