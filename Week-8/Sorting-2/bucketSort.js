const bucketSort = (array) => {
    let even = [];
    let odd = [];

    for(let num of array){
        if(num % 2 == 0){
            even.push(num);
        } else {
            odd.push(num)
        }
    }

    even = even.sort((a,b) => a -b);
    odd = odd.sort((a, b) => a - b);
    const result = even.concat(odd);
    return result;
}

console.log(bucketSort([4 ,2 ,6 ,9 ,7 ,5]))