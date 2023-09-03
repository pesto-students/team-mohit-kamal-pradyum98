const heapify = (array, n, i) => {
    let smallest = i;
    const left = 2*i + 1;
    const right = 2*i + 2;

    if (left < n && array[left] < array[smallest]) {
        smallest = left;
    }
    if (right < n && array[right] < array[smallest]) {
        smallest = right;
    }

    if(smallest != i){
        const temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;

        heapify(array, n , smallest);
    }
}

const heapSort = (array) => {
    const n = array.length;
    for(let i = (Math.floor(n/2) - 1); i >=0 ; i--){
        heapify(array, n , i);
    }

    for (let i = n-1 ; i > 0 ; i-- ){
        const temp = array[0];
        array[0]= array[i];
        array[i] = temp;

        heapify(array, i, 0);
    }

    return array;
}

console.log(heapSort(["apple", "banana", "pear", "orange", "kiwi"]));