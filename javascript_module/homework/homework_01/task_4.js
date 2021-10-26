let firstNumber = parseInt(prompt('What is the first number?'),10);
let secondNumber = parseInt(prompt('What is the second number?'),10);


if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let operation = prompt(`What kind of operation do you wanna do? \n  1 - ${firstNumber} + ${secondNumber}  \n  2 - ${firstNumber} - ${secondNumber}  \n  3 - ${firstNumber} * ${secondNumber}  \n  4 - ${firstNumber} / ${secondNumber} ?`)


    if (operation.trim() === '1') {
        let add = firstNumber + secondNumber;
        alert('The result is ' + add)
    } else if (operation.trim() === '2') {
        let subtract = firstNumber - secondNumber;
        alert('The result is ' + subtract);
    } else if (operation.trim() === '3') {
        let multiply = firstNumber * secondNumber;
        alert('The result is ' + multiply);
    } else if (operation.trim() === '4') {
        if (secondNumber === 0) {
            alert('You cannot divide a number by zero');
        } else {
            let divide = firstNumber / secondNumber
            alert('The result is ' + divide);
        }
    } else {
        alert('This is not a valid operation')
    }
} else {
    alert('You need to inform valid numbers');
}