export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array
}

export function randomRange(amount, maxLen) {
    const indexes = []

    while (indexes.length < amount) {
        const index = Math.floor(Math.random() * maxLen)

        if (!indexes.includes(index)) {
            indexes.push(index)
        }
    }

    return indexes
}