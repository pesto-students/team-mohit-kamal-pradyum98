const lcs = (array) => {
    const map = new Set(array);
    let maxLength = 0;
    array.forEach((e) => {
        if(!map.has(e-1)){
            let j = e;
            while(map.has(j)){
                j++;
            }
            ans = Math.max(maxLength,  j - e);
        }
    })
    return ans;
}

console.log(lcs([100,4,200,1,3,2]));
console.log(lcs([10,5,7,3,4,8,9]));