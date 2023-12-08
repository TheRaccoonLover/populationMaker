const averageKids = 5; //When average kids are too low, program takes too long / too many generations so average kids needs to be above 2 
// because 2 is the best number to replace parents so the tree wouldn't shrink
const startingPop = 54; // Starting population should be above 30

document.addEventListener('DOMContentLoaded', function() {
    var optionsMenu = document.getElementsByClassName('optionsMenu');

    Array.from(optionsMenu).forEach(function(optionsMenu) {
        optionsMenu.addEventListener('click', function() {
            optionsMenu.classList.toggle('clicked');
            
            try {
                const startTime = performance.now();
                calculateGenerations(12519, startingPop, averageKids);
                const endTime = performance.now();
                const duration = endTime - startTime;
                const durationInSeconds = Math.round(duration / 1000);
                console.log("Function took " + durationInSeconds + " seconds");
            } catch (error) {
                console.error(error.message);
            }
        });
    });
});