const LPS = (string) => {
    let hashArray = new Array(string.length).fill(0);

     for(let i = 0; i< string.length ; i++){
        hashArray[string[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i; 
    };

    let start = 0;
    let end = 0;

    for(let i = 0; i< string.length ; i++){
        if(hashArray[string[i].charCodeAt(0) - 'a'.charCodeAt(0)] > 0){
            const len = hashArray[string[i].charCodeAt(0) - 'a'.charCodeAt(0)] - i;

            let isPalindrome = true;
            for(j = 0;j<len ; j++){
                if(string[i+j] !== string[hashArray[string[i].charCodeAt(0) - 'a'.charCodeAt(0)] - j]){
                    isPalindrome = false;
                    break;
                }
            }

            if(isPalindrome && end - start < len){
                start = i;
                end = hashArray[string[i].charCodeAt(0) - 'a'.charCodeAt(0)];
            }
        }
    }

    return string.substring(start, end+1);
}

console.log(LPS('bbababbabbad'));