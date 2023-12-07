const averageKids = 2;
const startingPop = 2;

document.addEventListener('DOMContentLoaded', function() {
    var optionsMenu = document.getElementsByClassName('optionsMenu');

    Array.from(optionsMenu).forEach(function(optionsMenu) {
        optionsMenu.addEventListener('click', function() {
            optionsMenu.classList.toggle('clicked');
            
            try {
                calculateGenerations(12519, startingPop, averageKids);
            } catch (error) {
                console.error(error.message);
            }
        });
    });
});