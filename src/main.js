const averageKids = 5; //When average kids are too low, program takes too long / too many generations so average kids needs to be above 2 
// because 2 is the best number to replace parents so the tree wouldn't shrink
const startingPop = 54; // Starting population should be above 30
const lifeSpan = 45; //Self explanatory, average lifespan

document.addEventListener('DOMContentLoaded', function() {
    var optionsMenu = document.getElementsByClassName('optionsMenu');

    Array.from(optionsMenu).forEach(function(optionsMenu) {
        optionsMenu.addEventListener('click', function() {
            optionsMenu.classList.toggle('clicked');
            
            calculateGenerations(12519, startingPop, averageKids, lifeSpan);
        });
    });
});