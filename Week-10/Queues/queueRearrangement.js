const rearrange = (array) => {
    let evenPointer = 0;
    let n = array.length;
    for (let currPointer = 0; currPointer < n; currPointer++) {
        if (array[currPointer] % 2 == 0) {
            [array[evenPointer], array[currPointer]] = [array[currPointer], array[evenPointer]];
            evenPointer++;
        }
    }
    return array;
};

const queue = [3, 8, 2, 5, 6, 4, 7];
const result = rearrange(queue);
console.log('Rearranged queue:', result);