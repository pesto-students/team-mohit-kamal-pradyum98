const reconstructionQueue = (queue) => {
    const sortedPeople = queue.sort((a,b) => {
        if(a[0] !== b[0]){
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    const reconstructedQueue = [];
    for(let people of sortedPeople){
        reconstructedQueue.splice(people[1],0, people);
    }

    return reconstructedQueue;
}

const people = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
];
const reconstructedQueue = reconstructionQueue(people);
console.log('Reconstructed queue:', reconstructedQueue);