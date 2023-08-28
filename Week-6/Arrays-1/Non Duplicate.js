const findNonDuplicate = (array) => {
    const freqMap = new Map();
    let uniqueKey = null;
    array.forEach((e) => {
        if (freqMap.has(e)) {
            const freq = freqMap.get(e) + 1;
            freqMap.set(e, freq);
        } else {
            freqMap.set(e, 1);
        }
    });

    freqMap.forEach((value, key) => {
        if (value == 1) {
            uniqueKey = key;
        }
    });
    return uniqueKey || -1;
};

console.log(findNonDuplicate([1, 1, 2, 2, 3, 3]));
