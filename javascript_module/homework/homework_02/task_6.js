let sum = 0;
let i = 0;
do {
    
    let userNumber = parseInt(prompt('Type a number, whatever one you want'));
    sum+=userNumber;
    i++;

}while (i < 5)
console.log('The final value is ' + sum);