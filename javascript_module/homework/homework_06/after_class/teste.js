let buttons = document.querySelectorAll('button');
var btnsArr = Array.from(buttons);
let playerArr = [];
let compArr = [];
let winConditions = [
    ['boxOne', 'boxTwo', 'boxThree'],
    ['boxFour', 'boxFive', 'boxSix'],
    ['boxSeven', 'boxEight', 'boxNine'],
    ['boxOne', 'boxFour', 'boxSeven'],
    ['boxTwo', 'boxFive', 'boxEight'],
    ['boxThree', 'boxSix', 'boxNine'],
    ['boxOne', 'boxFive', 'boxNine'],
    ['boxThree', 'boxFive', 'boxSeven']
];

buttons.forEach(function (btn) {

    btn.addEventListener('click', function play() {

        if (btn.innerText === "" && btn.innerText != 'O' && btn.innerText != 'X' && btnsArr.length > 1) {
            btn.innerHTML = 'X';
            btn.setAttribute('class', 'playerChose');
            var spot = btnsArr.indexOf(btn);
            btnsArr.splice(spot, 1);
            playerArr.push(btn.id);
            checkForWin(playerArr);
            if (checkForWin(playerArr)) {
                console.log("winner player x");
            };

            let compMove = btnsArr[Math.floor(Math.random() * btnsArr.length)];
            compMove.innerHTML = 'O'
            compMove.setAttribute('class', 'compChose');
            let compChose = btnsArr.indexOf(compMove);
            btnsArr.splice(compChose, 1);
            compArr.push(compMove.id);
            checkForWin(compArr);
            if (checkForWin(compArr)) {
                console.log("winner player O");
            };

        } else if (btn.innerText === "" && btn.innerText != 'O' && btn.innerText != 'X' && btnsArr.length == 1) {
            btn.innerHTML = 'X';
            btn.setAttribute('class', 'playerChose');
            var spot = btnsArr.indexOf(btn);
            btnsArr.splice(spot, 1);
            playerArr.push(btn.id);
            checkForWin(playerArr);
            checkForWin(compArr);
            if (checkForWin(playerArr)) {
                console.log(" 2.winner player X");
            } else if (checkForWin(compArr)) {
                console.log("2.winner player O");
            } else {
                console.log("new game");
            }
        } else {
            console.log("try again");

        }

    });
});

function checkForWin(whichPlayer) {
    //iterate over the winConditions array, each of which 
    //represents a single winCondition.
    for (let i = 0; i < winConditions.length; i++) {
        for (var j = 0; j < winConditions[i].length; j++) {
            //console.log(winConditions[i][j]);
            //console.log(whichPlayer);
            if (whichPlayer.includes(winConditions[i][0]) && whichPlayer.includes(winConditions[i][1]) && whichPlayer.includes(winConditions[i][2]) && whichPlayer.length >= 3) {
                return true;
            } else if (!whichPlayer.includes(winConditions[i][0]) && whichPlayer.includes(winConditions[i][1]) && whichPlayer.includes(winConditions[i][2]) && whichPlayer.length >= 3) {
                break;
            } else {
                false;
            }
        }
    }
    // For each winCondition, check if each value is present 
    //anywhere in the whichPlayer. 
    // If it is not, drop out of the loop, this not a win
    // If all the values of this winCondition are present in 
    //whichPlayer, then we can return a win!
    // If we loop through all the winConditions and fall out the bottom, no win.
}
