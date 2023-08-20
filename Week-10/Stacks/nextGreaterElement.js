const nextGreaterElements = (array) => {
    const stack = [];
    let result = new Array(array.length).fill(-1);

    for (let i = 0; i < array.length; i++) {
        while (stack.length > 0 && array[i] > array[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return result;
};

const nums = [4, 5, 2, 10];
const nextGreater = nextGreaterElements(nums);
console.log('Next greater elements:', nextGreater);
