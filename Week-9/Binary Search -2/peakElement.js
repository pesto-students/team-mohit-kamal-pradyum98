const peakElement = (array) => {
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        const mid = Math.floor((left +  right)/2);
        if(array[mid] > array[mid + 1]){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return array[left];
}

console.log(peakElement([1, 2, 3, 1]))
