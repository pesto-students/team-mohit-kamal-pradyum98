const subSeqUtil = (string , answer, res) => {
    if (string.length == 0) {
        res.push(answer);
        return res;
    }
    subSeqUtil(string.substring(1), answer + string[0], res);
    subSeqUtil(string.substring(1), answer, res);
}

const subSeq = (string) => {
    const res = [];
    subSeqUtil(string,'', res);
    return res;
}

console.log(subSeq('abcd'));