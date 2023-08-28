const selectionSort = (array) => {
    const length = array.length;

    for(let i = 0 ; i < length ; i++){
        let minIndex = i;
        for(let j = i+1 ; j < length ; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

console.log(selectionSort(["banana", "apple", "grape", "cherry"]));