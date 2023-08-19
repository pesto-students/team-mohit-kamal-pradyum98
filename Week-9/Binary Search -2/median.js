const median = (arr1, arr2) => {
    if (arr2.length > arr1.length) {
        [arr1, arr2] = [arr2, arr1];
    }
    let low = 0;
    let high = arr1.length;

    while (low <= high) {
        const mid1 = Math.floor(low + high / 2);
        const mid2 = Math.floor((arr1.length + arr2.length) / 2) - mid1;

        const maxLeft1 = mid1 === 0 ? -Infinity : arr1[mid1 - 1];
        const maxLeft2 = mid2 === 0 ? -Infinity : arr1[mid2 - 1];
        const maxRight1 = mid1 === arr1.length ? -Infinity : arr1[mid1];
        const maxRight2 = mid2 === arr2.length ? -Infinity : arr2[mid2];

        if(maxLeft1 <= maxRight2 && maxLeft2 <= maxRight1){
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else {
            if(maxLeft1 > maxRight2){
                high = mid1 -1  
            } else {
                low = mid1 + 1
            }
        }
    }

};
