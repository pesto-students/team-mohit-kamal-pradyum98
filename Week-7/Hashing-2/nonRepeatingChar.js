const nonRepeating = (string) => {
    const map = new Map();
    for (let i = 0; i< string.length ; i++){
        if(map.has(string[i])){
            map.set(string[i], 2);
        } else {
            map.set(string[i],1);
        }
    }
    for (let i = 0; i< string.length ; i++){
        if(map.get(string[i]) == 1){
            return string[i];
        }
    }
    return false;
}

console.log(nonRepeating('abcdabcde'));
console.log(nonRepeating('aabbccd'));