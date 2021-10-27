let letter = 'k';
let letters = ['j','k','k','o','k'];

function removeLetter(letters, letter) { 
    
        return letters.filter(function(value){ 
            return value != letter; 
        });
    }

    removeLetter(letters,'k');