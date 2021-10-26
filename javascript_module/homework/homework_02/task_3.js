let timesTable = [1,2,3,4,5,6,7,8,9,10];
let userNumber = parseInt(prompt('What number would you like to see a multiplication table of?'));

if(!isNaN(userNumber)){
    for(let i = 0; i< timesTable.length; i++){
        console.log(timesTable[i] * userNumber);
    }
}
else{
    alert('Sorry, thats not a valid number');
}