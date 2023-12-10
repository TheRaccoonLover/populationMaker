let generationAge = 0;
let allAges = [];
let generationAges = [];

function randomLifespan(lifeSpan) {
    let basePercent = 20 / 100;
    let max = lifeSpan + basePercent * lifeSpan;

    if (Math.random() < 0.001) {
        let extraPercent = 20;
        max += extraPercent / 100 * lifeSpan;
    }

    let min = lifeSpan - basePercent * lifeSpan;
    let decimal = (Math.random() * (max - min) + min);
    let roundedNumber = Math.round(decimal);
    return roundedNumber;
}

function findGenAge(population, lifespan) {
    generationAge = 0;
    allAges = [];

    for (let i = 0; i < population; i++) {
        allAges.push(randomLifespan(lifespan));
    }

    for (let i = 0; i < allAges.length; i++) {
        if (allAges[i] > generationAge) {
            generationAge = allAges[i];
        }
    }
    console.log("Generation Age: " + generationAge);
    generationAges.push(generationAge);
    console.log("Generation Ages: " + generationAges);
    console.log("Total timespan: " + sumArray(generationAges));
}

function sumArray(array) {
    let sum = 0; //makes sure sum is 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]; //adds the value of each thing in the array together
    }

    return sum;
}