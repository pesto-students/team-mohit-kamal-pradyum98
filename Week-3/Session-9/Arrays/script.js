const divideArray = (numbers) => {
    console.log('Even numbers:')
    const even = numbers.filter((e) => e % 2 == 0).sort().forEach((e) => console.log(e));
    console.log('Odd numbers:');
    const odd = numbers
        .filter((e) => e % 2 == 1)
        .sort()
        .forEach((e) => console.log(e));
}