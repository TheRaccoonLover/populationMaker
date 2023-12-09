let generations = 0;
let familyArray = [];
let populationTree = [];

function getRandomArbitrary(average) {
    let max = average + average;
    let min = average - average;
    let decimal = (Math.random() * (max - min) + min); //Gets a random number between the 0 and two times the average
    let roundedNumber = Math.round(decimal);
    //console.log(roundedNumber);
    return roundedNumber;
    
}

function sumArray(array) {
    let sum = 0; //makes sure sum is 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]; //adds the value of each thing in the array together
    }

    return sum;
}

function getGenerationPop(population, average, lifespan) {
    currentValue = 0; //sets the current value to 0
    const generationArray = [];

    while (currentValue < population) {
        const randomValue = getRandomArbitrary(average); //calls the random number function, getting the number of children
        familyArray.push(randomValue); //gets the number of people in a family and pushes it to the family array
        generationArray.push(randomValue); //also pushes the number of people in the family to the generation array
        currentValue = sumArray(familyArray); //sets the current value to the sum of everything, to get the current population
        console.log("Population: " + population);
        console.log("Sum of the array: " + sumArray(familyArray));
        console.log("Generations: " + generations);
        console.log("Family Array Length: " + familyArray.length);
        
    }
    
    findGenAge(currentValue, lifespan);
    populationTree.push(generationArray); //pushes the array into a two dimensional array hopefully holding the entire 
    //population of the given city

}

function calculateGenerations(population, startingPopulation, average, lifespan) {
    populationTree = []; //makes sure population tree array is empty

    while (population > startingPopulation) { //runs until reached the initial generation

        getGenerationPop(population, average, lifespan); //gets the families in the generation
        population = familyArray.length * 2; //because each family needs 2 parents, multiply the length times two to get the number
        // of parents in the before generation
        familyArray = []; //resets the family array
        console.log("Family Array Length: " + familyArray.length);
        console.log("Population after first gen: " + population);
        console.log("Generations: " + generations);
        generations++; //adds 1 to the number of generations
    }

    console.log("Population Tree: " + populationTree);
}
