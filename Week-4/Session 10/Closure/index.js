const counter = () => {
    let count = 0;
    const add = () =>{
        return ++count;
    }
    return add; 
}

const firstCounter = counter();
const secondCounter = counter();
const firstCounterResult = [];
const secondCounterResult = [];

for (let i in [1,2,3,4,5]){
    firstCounterResult.push(firstCounter());
}

for (let i in [1, 2, 3]) {
    secondCounterResult.push(secondCounter());
}

console.log(firstCounterResult, 'firstCounterResult');
console.log(secondCounterResult, 'secondCounterResult');
