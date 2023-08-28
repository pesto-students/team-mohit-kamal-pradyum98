const findStartingPetrolPump = (array) => {
    let start = 0;
    let n = array.length;
    let end = 1;
    let petrol = array[start][0] - array[start][1];
    while (end !== start || petrol < 0) {
        while (petrol < 0 && start !== end) {
            petrol -= array[start][0] - array[start][1];
            start = (start + 1) % n;

            if (start == 0) {
                return -1;
            }
        }

        petrol += array[end][0] - array[end][1];
        end = (end + 1) % n;
    }
    return start;
};

const petrolPumps = [
    [6, 4],
    [3, 6],
    [7, 3]
];
const startingPump = findStartingPetrolPump(petrolPumps);
console.log('Starting petrol pump:', startingPump);
