const reverseKElements = (array, k) => {
    const queue = [];
    let i = 0;
    while (i != k){
        queue.unshift(array[0]);
        array.shift()
        i++;
    }
    return queue.concat(array);
};

const array = [ 1,2,3,4,5,6,7];
const result = reverseKElements(array, 3);
console.log('Reversed queue:', result);