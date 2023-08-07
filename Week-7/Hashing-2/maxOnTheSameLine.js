const maxPointsOnTheSameLine = (array) => {
    const map = new Map();
    let max = 0;
    for (let e of array){
        let slope = e[1]/e[0];
        if(map.has(slope)){
            const freq = map.get(slope) + 1;
            map.set(slope, freq);
            if(freq > max){
                max = freq;
            }
        } else {
            map.set(slope, 1);
        }
    }
    return max;
}

console.log(
    maxPointsOnTheSameLine([
        [1, 1],
        [2, 2],
        [3, 3]
    ])
);

console.log(
    maxPointsOnTheSameLine([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 6],
        [6, 7]
    ])
);