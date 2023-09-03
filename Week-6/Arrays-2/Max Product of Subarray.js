// Kadane's Algorithm
const maxProductSubarray = (array) => {
    let maxEndingHere = array[0];
    let minEndingHere = array[0];
    let maxProduct = array[0];
    const arrayExcludingFirst = array.slice(1);
    for (let e of arrayExcludingFirst) {
        if(e < 0){
            [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere]
        }
        maxEndingHere = Math.max(e, maxEndingHere * e);
        minEndingHere = Math.min(e, minEndingHere * e);

        maxProduct = Math.max(maxProduct, maxEndingHere)
    }

    return maxProduct;
};

console.log(maxProductSubarray([2,3,-2,4,5]))
console.log(maxProductSubarray([-1,-2,-3,-4]));

