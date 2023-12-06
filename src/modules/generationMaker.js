arrayNameUWU = [];

function getRandomArbitrary(average) {
    max = average + 1;
    min = average - 1;
    decimal = (Math.random() * (max - min) + min);
    roundedNumber = Math.round(decimal);
    arrayNameUWU.push(roundedNumber);
    console.log(roundedNumber);
    calculateAverage(arrayNameUWU);
}

function calculateAverage(array) {
    var sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    var average = sum / array.length;

    console.log(average);
}
