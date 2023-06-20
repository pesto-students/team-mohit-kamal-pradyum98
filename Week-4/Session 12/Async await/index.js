async function getExchangeRate(currencyCode) {
    try {
        const response = await fetch('https://api.exchangeratesapi.io/latest?base=EUR');
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        const exchangeRate = data.rates[currencyCode];

        if (exchangeRate === undefined) {
            return null;
        }
        console.log(exchangeRate, 'exchangeRate');
        console.log(exchangeRate.toFixed(4), 'exchangeRate.toFixed(4)');
        return Number(exchangeRate.toFixed(4));
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch exchange rates');
    }
}

getExchangeRate('USD')
    .then((rate) => {
        console.log(rate); // Output: 1.2133
    })
    .catch((error) => {
        console.error(error);
    });
