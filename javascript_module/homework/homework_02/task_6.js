let sum = 0;
let i = 0;
do {
    let userNumber = 0;
    if (!isNaN(userNumber)) {
    userNumber = parseInt(prompt('Type a number, whatever one you want'));
    sum+=userNumber;
    i++;
    }
    else {
        alert('This is not a valid number!')
        break;
    }

}while (i < 5)
console.log('The final value is ' + sum);