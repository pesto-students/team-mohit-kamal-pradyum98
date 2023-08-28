const reverseQueue = (queue) => {
    const stack = [];

    for(let i of queue){
        stack.unshift(i)
    };

    return stack;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const result = reverseQueue(array);
console.log('Reversed queue:', result);