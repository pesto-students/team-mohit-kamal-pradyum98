const temperatureData = {
 'New York': 20,
 'London': 18,
 'Paris': 22,
 'Tokyo': 25,
 'Sydney': 28,
};

const getTemperatureForCity = (city) => {
    const cache = {}

    return (city) => {
        if (cache[city]) {
            console.log('returned from cache')
            return cache[city];
        } else {
            console.log('returned from API');
            cache[city] = temperatureData[city];
            return temperatureData[city];
        }
    };
}

const getTemp = getTemperatureForCity();

console.log(getTemp('New York'));
console.log(getTemp('New York'));
console.log(getTemp('Paris'));
console.log(getTemp('Paris'));