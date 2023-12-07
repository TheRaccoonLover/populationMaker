arrayNameUWU = [];
generations = 0;
familyArray = [];

function getRandomArbitrary(average) {
    max = average + 1;
    min = average - 2;
    decimal = (Math.random() * (max - min) + min);
    roundedNumber = Math.round(decimal);
    arrayNameUWU.push(roundedNumber);
    //console.log(roundedNumber);
    return roundedNumber;
    calculateAverage(arrayNameUWU);
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

    while (currentValue < population) {
        familyArray.push(getRandomArbitrary(average));
        currentValue = sumArray(familyArray);
        console.log("Population: " + population);
        console.log("Sum of the array: " + sumArray(familyArray));
        console.log("Generations: " + generations);
        console.log("Family Array Length: " + familyArray.length);
        if (population > 50000) {
            throw new Error("No work :(");
        }
    }

}

function calculateGenerations(population, startingPopulation, average) {

    while (population > startingPopulation) {

        getGenerationPop(population, average);
        population = familyArray.length * 2;
        familyArray = [];
        console.log("Family Array Length: " + familyArray.length);
        console.log("Population after first gen: " + population);
        console.log("Generations: " + generations);
        generations++;
    }
}
