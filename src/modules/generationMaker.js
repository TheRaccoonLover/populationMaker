let generations = 0;
let familyArray = [];
let populationTree = [];

function getRandomArbitrary(average) {
    let max = average + average;
    let min = average - average;
    let decimal = (Math.random() * (max - min) + min);
    let roundedNumber = Math.round(decimal);
    //console.log(roundedNumber);
    return roundedNumber;
    
}

function calculateAverage(array) {
    var sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    var average = sum / array.length;

    //console.log(average);
}

function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function getGenerationPop(population, average) {
    let currentValue = 0;
    const generationArray = [];

    while (currentValue < population) {
        const randomValue = getRandomArbitrary(average);
        familyArray.push(randomValue);
        generationArray.push(randomValue);
        currentValue = sumArray(familyArray);
        console.log("Population: " + population);
        console.log("Sum of the array: " + sumArray(familyArray));
        console.log("Generations: " + generations);
        console.log("Family Array Length: " + familyArray.length);
        if (population > 50000) {
            throw new Error("No work :(");
        }
    }

    populationTree.push(generationArray);

}

function calculateGenerations(population, startingPopulation, average) {
    populationTree = [];

    while (population > startingPopulation) {

        getGenerationPop(population, average);
        population = familyArray.length * 2;
        familyArray = [];
        console.log("Family Array Length: " + familyArray.length);
        console.log("Population after first gen: " + population);
        console.log("Generations: " + generations);
        generations++;
    }

    console.log("Population Tree: " + populationTree);
}
