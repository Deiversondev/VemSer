function erro(){
    console.error('What you typed is not a number')
}
let n1 = parseInt(prompt('Insert first number'));
let n2 = parseInt(prompt('Insert second number'));

function sum (num1,num2,err){
    if (!isNaN(num1) && !isNaN(num2)) {
        let totalSum = num1 + num2;
        console.log(`The total is ${totalSum}`);
    }
    else {
        err();
    }
}

sum(n1,n2,erro)