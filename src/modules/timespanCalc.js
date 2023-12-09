let generationAge = 0;
let allAges = [];
let generationAges = [];

function randomLifespan(lifeSpan) {
    let percent = 20 / 100;
    let max = lifeSpan + percent * lifeSpan;
    let min = lifeSpan - percent * lifeSpan;
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
}