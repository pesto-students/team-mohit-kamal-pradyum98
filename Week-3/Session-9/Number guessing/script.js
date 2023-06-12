const playGuessingGame = (numToGuess, totalGuesses = 10) => {
    let promptText = 'Enter a number between 1 and 100.';
    let userInput;
    let numGuesses = 0;

    while (numGuesses < totalGuesses) {
        userInput = prompt(promptText);

        if (userInput === null || userInput === '') {
            return 0;
        }

        if (isNaN(userInput)) {
            promptText = 'Please enter a number.';
            continue;
        }

        var guess = parseInt(userInput, 10);

        if (guess < numToGuess) {
            promptText = guess + ' is too small. Guess a larger number.';
        } else if (guess > numToGuess) {
            promptText = guess + ' is too large. Guess a smaller number.';
        } else {
            return numGuesses + 1;
        }

        numGuesses++;
    }

    return 0;
};
