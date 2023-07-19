const maxMinSum = (array) => {
    let minValue = Number.MAX_VALUE; 
    let maxValue = Number.MIN_VALUE; 

    array.forEach((e) => {
        if(e > maxValue){
            maxValue = e
        }
        if(e < minValue){
            minValue = e;
        }
    })

    return maxValue + minValue;
}

console.log(maxMinSum([-10,0,100,-50,20]))
console.log(maxMinSum([5,2,9,1,7]));