const findMin = (array) => {
    let left = 0 ;
    let right = array.length - 1;

    while (left < right){
        const mid = Math.floor((left+right)/2);

        if(array[mid] > array[right]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return array[left];
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([4, 5, 6, 7, 11, 2]));