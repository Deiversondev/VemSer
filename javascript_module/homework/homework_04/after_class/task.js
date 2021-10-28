// 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string 
//    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';

let phrase = prompt('What do you wanna say?').toLowerCase();
let vowels = 0;
let consonants = 0;
let chars = 0;
let number = 0;

let countVowelsAndConsonants = (string) =>{
let vowelsArray = [];
let consonantsArray = [];
let otherChars = [];

        for(let i = 0; i < string.length ; i++){
        if ((string[i] === 'a') || (string[i] === 'e') || (string[i] === 'i') || (string[i] === 'o') || (string[i] === 'u') ) {
            vowelsArray.push(string[i]);
            vowels++;
        }
        else if ((string[i] === 'b') || (string[i] === 'c') || (string[i] === 'd') || (string[i] === 'f') || (string[i] === 'g') || (string[i] === 'h') || (string[i] === 'j') || (string[i] === 'k') || (string[i] === 'l') || (string[i] === 'm') || (string[i] === 'n') || (string[i] === 'p') || (string[i] === 'q') || (string[i] === 'r') || (string[i] === 's') || (string[i] === 't') || (string[i] === 'v') || (string[i] === 'w') || (string[i] === 'x') || (string[i] === 'y') || (string[i] === 'z') ) {
            consonantsArray.push(string[i]);
            consonants++
        }

        else if( (string[i] !== ' ')) {
            otherChars.push(string[i])
                chars++;
        }
    }

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
