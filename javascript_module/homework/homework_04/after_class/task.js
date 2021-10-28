// 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string 
//    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';

let phrase = prompt('What do you wanna say?').toLowerCase();
let vowels = 0;
let consonants = 0;
let chars = 0;
let number = 0;
let numbers = [];

let countVowelsAndConsonants = (string) =>{
let vowelsArray = [];
let consonantsArray = [];
let otherChars = [];
let numbers = [];

        for(let i = 0; i < string.length ; i++){
        if ((string[i] === 'a') || (string[i] === 'e') || (string[i] === 'i') || (string[i] === 'o') || (string[i] === 'u') ) {
            vowelsArray.push(string[i]);
            vowels++;
        }
        else if ((string[i] === 'b') || (string[i] === 'c') || (string[i] === 'd') || (string[i] === 'f') || (string[i] === 'g') || (string[i] === 'h') || (string[i] === 'j') || (string[i] === 'k') || (string[i] === 'l') || (string[i] === 'm') || (string[i] === 'n') || (string[i] === 'p') || (string[i] === 'q') || (string[i] === 'r') || (string[i] === 's') || (string[i] === 't') || (string[i] === 'v') || (string[i] === 'w') || (string[i] === 'x') || (string[i] === 'y') || (string[i] === 'z') ) {
            consonantsArray.push(string[i]);
            consonants++
        }

        else if( (string[i] !== ' ') && (string[i] !== '0') && (string[i] !== '1') && (string[i] !== '2') && (string[i] !== '3') && (string[i] !== '4') && (string[i] !== '5') && (string[i] !== '6') && (string[i] !== '7') && (string[i] !== '8') && (string[i] !== '9')) {
            otherChars.push(string[i])
                chars++;
        }

        else if((string[i] === '0') || (string[i] === '1') || (string[i] === '2') || (string[i] === '3') || (string[i] === '4') || (string[i] === '5') || (string[i] === '6') || (string[i] === '7') || (string[i] === '8') || (string[i] === '9')){
            numbers.push(string[i]);
            number++
        }
    }
    // console.log(vowels , consonants) 


    if ((vowels > 0) && (consonants > 0) && (chars > 0)) {
        console.log(`The string '${phrase}' has ${vowels} vowels and ${consonants} consonants`);
        console.log(`The vowels are :`) ;
        console.log(vowelsArray);
        console.log(`and, the consonants are :`);
        console.log(consonantsArray);
        console.log(`Also, besides letters, there are ${chars} characters and they are :`);
        console.log(otherChars);
    }
    
    else if ((vowels > 0) && (consonants > 0) && (chars === 0)) {
        console.log(`The string '${phrase}' has ${vowels} vowels and ${consonants} consonants`);
        console.log(`The vowels are :`) ;
        console.log(vowelsArray);
        console.log(`and, the consonants are :`);
        console.log(consonantsArray);
    }
    
    else if ((vowels === 0) && (chars === 0) && (consonants > 0)) {
        console.log(`The string '${phrase}' has no vowels and ${consonants} consonants`);
    
        console.log(`The consonants are :`);
        console.log(consonantsArray);
    }
    
    else if ((vowels === 0) && (chars > 0 ) && (consonants > 0)) {
        console.log(`The string '${phrase}' has no vowels and ${consonants} consonants`);
    
        console.log(`The consonants are :`);
        console.log(consonantsArray);
        console.log(`Also, besides consonants, there are ${chars} characters and they are :`);
        console.log(otherChars);
    }
    
    else if ((chars === 0 ) && (consonants === 0)){
        console.log(`The string '${phrase}' has ${vowels} vowels and no consonants`);
        console.log(`The vowels are :`) ;
        console.log(vowelsArray);
    }
    
    else if ((consonants === 0) && (chars > 0)){
        console.log(`The string '${phrase}' has ${vowels} vowels and no consonants`);
        console.log(`The vowels are :`) ;
        console.log(vowelsArray);
        console.log(`Also, besides vowels, there are ${chars} characters and they are :`);
        console.log(otherChars);
    }
    
    else if ((vowels === 0) && (consonants === 0) && (chars > 0)) {
        console.log(`Are you crazy???? Well , anyways ...`)
        console.log(`There are ${chars} characters and they are :`);
        console.log(otherChars);
    }

}

countVowelsAndConsonants(phrase);

if (number > 0){
    console.log(`Hey man, gotta tell you , you are not really supposed to type numbers there, but since you did ...`)
    console.log(`There is ${number} numbers, and here are your numbers :`)
    console.log(numbers)
}

// else if ((string[i] !== ' ') && (string[i] !== '!') && (string[i] !== '.') && (string[i] !== '?') && (string[i] !== '@')) {
//     consonants++
// }