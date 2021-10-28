let letter = 'k';
let letters = ['j','k','k','o','k'];

for(let i = 0; i < letters.length ; i++){
    const index = letters.indexOf(letter);
    if (index > -1) {
     letters.splice(index, 1);
  }
}

console.log(letters); 