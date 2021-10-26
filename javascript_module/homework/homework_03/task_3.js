let n1 = parseInt(prompt('Insert first number'));

if (!isNaN(n1)) {
    let n2 = parseInt(prompt('Insert second number'));

if (!isNaN(n2)) {
    function sum (num1,num2){
        let totalSum = num1 + num2;
        console.log(`The total is ${totalSum}`);
    }
    sum(n1,n2)
}
else {
    console.log('In order for the operation to carry on , both numbers need to be valid');
}

}

else{
    console.log('Please, insert valid numbers');
}