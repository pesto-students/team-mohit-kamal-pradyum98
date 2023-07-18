function* symbolGenerator(array){
    for (let e of array){
        yield Symbol(e)
    }
};

const symGen = symbolGenerator(['hi','hello','where','how']);

console.log(symGen.next());
console.log(symGen.next());
console.log(symGen.next());
console.log(symGen.next());
console.log(symGen.next());
