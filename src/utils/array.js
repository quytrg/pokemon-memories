const shuffle = (array) => {
    // method 1
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array;

    // method 2
    // return array.sort(() => Math.random() - 0.5);
}

export { shuffle };