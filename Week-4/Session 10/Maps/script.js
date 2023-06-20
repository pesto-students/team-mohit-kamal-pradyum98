function calcWordFrequencies() {
    const promptInput = prompt('Enter your string input');
    const wordArray = promptInput.split(' ');
    const frequencyCounter = new Map();

    wordArray.forEach((e) => {
        if (frequencyCounter.has(e)) {
            const currentCount = frequencyCounter.get(e);
            frequencyCounter.set(e, currentCount + 1);
        } else {
            frequencyCounter.set(e, 1);
        }
    });

    frequencyCounter.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}