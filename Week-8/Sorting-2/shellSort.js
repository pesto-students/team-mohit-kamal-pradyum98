const shellSort = (array) => {
    let gap = Math.floor(array.length / 2);
    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i;

            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }

            array[j] = temp;
        }
        gap = Math.floor(gap/2);
    }

    return array;
};

console.log(shellSort([64, 34, 25, 12, 22, 11, 90]));
