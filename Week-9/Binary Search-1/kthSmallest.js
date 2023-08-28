const kthSmallest = (arr1, arr2, k) => {
    const m = arr1.length - 1;
    const n = arr2.length - 1;

    let high = Math.max(arr1[m - 1], arr2[n - 1]);
    let low = Math.min(arr1[0], arr2[0]);

    while(low <= high){
        const mid = low + Math.floor((high - low) / 2);
        let i = 0;
        let j = 0;
        let count = 0;

        while( i < m){
            if(arr1[i] <= mid){
                count++;
                i++;
            } else {
                break;
            }
        }

        while (j < n) {
            if (arr2[j] <= mid) {
                count++;
                j++;
            } else {
                break;
            }
        }

        if(count < k){
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return low;
}

console.log(kthSmallest([2 ,4 ,6 ,8 ,10 ],[1 ,3 ,5 ,7 ,9 ,11],10));