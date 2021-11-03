let blocks = document.getElementsByClassName("block");
let h1 = document.querySelector('h1');
let Xh2 = document.querySelector('#playerX');
let Oh2 = document.querySelector('#playerO');
let currentPlayer = document.querySelector('#current');

let block1 = document.querySelector('#block1');
let block2 = document.querySelector('#block2');
let block3 = document.querySelector('#block3');
let block4 = document.querySelector('#block4');
let block5 = document.querySelector('#block5');
let block6 = document.querySelector('#block6');
let block7 = document.querySelector('#block7');
let block8 = document.querySelector('#block8');
let block9 = document.querySelector('#block9');

let win = false;
let alter = true;
let clicks = 0;
let player1Score = 0;
let player2Score = 0;

let arrayBlocks = [block1,block2,block3,block4,block5,block6,block7,block8,block9];

let resetGame = document.querySelector('#reset');
let resetScore = document.querySelector('#resetScore');
let player1 = 'X';
let player2 = 'O';
let playerTurn = player1;

for(let i = 0; i< blocks.length ; i++){
blocks[i].addEventListener('click', () => {
    if((blocks[i].innerText === '') && (playerTurn === player1)){
       if(alter){
        blocks[i].innerText = 'X';
        blocks[i].style.color = 'red'
        currentPlayer.style.color = 'red';
        currentPlayer.innerText = `Current Player : Player 1`
        playerTurn = player2;
        checkForWin();
       }
    }
    else if ((blocks[i].innerText) === '' && (playerTurn === player2)) {
       if(alter){
        blocks[i].innerText = 'O';
        blocks[i].style.color = 'blue'
        currentPlayer.style.color = 'blue';
        currentPlayer.innerText = 'Current Player : Player 2 ';
        playerTurn = player1;
        checkForWin();
       }
    }
})}

const checkForWin = () =>{
        clicks++;

       if (((block1.innerText === 'X' && block2.innerText === 'X' && block3.innerText === 'X')) || ((block1.innerText === 'O' && block2.innerText === 'O' && block3.innerText === 'O'))) {
           
           win = true;
           if(win === true && playerTurn === player2){
               h1.innerText = `${player1} is the winner`;
               player1Score++;
               alter = false;
               h1.style.color = 'red';
               Xh2.innerText = `Player X Score : ${player1Score}`;
           }
           else{
            h1.innerText = `${player2} is the winner`;
            player2Score++;
            h1.style.color = 'blue';
            Oh2.innerText = `Player O Score : ${player2Score}`;
            alter = false;
           }
       }
       else if ((block1.innerText === 'X' && block4.innerText === 'X' && block7.innerText === 'X') || (block1.innerText === 'O' && block4.innerText === 'O' && block7.innerText === 'O') )    {
        
        win = true;
        if(win === true && playerTurn === player2){
            h1.innerText = `${player1} is the winner`;
            player1Score++;
            alter = false;
            h1.style.color = 'red';
            Xh2.innerText = `Player X Score : ${player1Score}`;
        }
        else{
         h1.innerText = `${player2} is the winner`;
         player2Score++;
         h1.style.color = 'blue';
         Oh2.innerText = `Player O Score : ${player2Score}`;
         alter = false;
        }
       }
       else if ((block1.innerText === 'X' && block5.innerText === 'X' && block9.innerText === 'X') || (block1.innerText === 'O' && block5.innerText === 'O' && block9.innerText === 'O'))  {
        
        win = true;
        if(win === true && playerTurn === player2){
            h1.innerText = `${player1} is the winner`;
            player1Score++;
            alter = false;
            h1.style.color = 'red';
            Xh2.innerText = `Player X Score : ${player1Score}`;
        }
        else{
         h1.innerText = `${player2} is the winner`;
         player2Score++;
         h1.style.color = 'blue';
         Oh2.innerText = `Player O Score : ${player2Score}`;
         alter = false;
        }
       }

       else if ((block2.innerText === 'X' && block5.innerText === 'X' && block8.innerText === 'X') || (block2.innerText === 'O' && block5.innerText === 'O' && block8.innerText === 'O'))  {
        
        win = true;
        if(win === true && playerTurn === player2){
            h1.innerText = `${player1} is the winner`;
            player1Score++;
            alter = false;
            h1.style.color = 'red';
            Xh2.innerText = `Player X Score : ${player1Score}`
        }
        else{
         h1.innerText = `${player2} is the winner`;
         player2Score++;
         h1.style.color = 'blue';
         Oh2.innerText = `Player O Score : ${player2Score}`;
         alter = false;
        }
       }

       else if ((block4.innerText === 'X' && block5.innerText === 'X' && block6.innerText === 'X') || (block4.innerText === 'O' && block5.innerText === 'O' && block6.innerText === 'O'))  {
        
        win = true;
        if(win === true && playerTurn === player2){
            h1.innerText = `${player1} is the winner`;
            player1Score++;
            alter = false;
            h1.style.color = 'red';
            Xh2.innerText = `Player X Score : ${player1Score}`;
        }
        else{
         h1.innerText = `${player2} is the winner`;
         player2Score++;
         h1.style.color = 'blue';
         Oh2.innerText = `Player O Score : ${player2Score}`;
         alter = false;
        }
       }

       else if ((block7.innerText === 'X' && block5.innerText === 'X' && block3.innerText === 'X') || (block7.innerText === 'O' && block5.innerText === 'O' && block3.innerText === 'O') )  {
      
        win = true;
        if(win === true && playerTurn === player2){
            h1.innerText = `${player1} is the winner`;
            player1Score++;
            alter = false;
            h1.style.color = 'red';
            Xh2.innerText = `Player X Score : ${player1Score}`;
        }
        else{
         h1.innerText = `${player2} is the winner`;
         player2Score++;
         h1.style.color = 'blue';
         Oh2.innerText = `Player O Score : ${player2Score}`;
         alter = false;
        }
       }
       else if ((block7.innerText === 'X' && block8.innerText === 'X' && block9.innerText === 'X') || block7.innerText === 'O' && block8.innerText === 'O' && block9.innerText === 'O')  {
        
            win = true;
            if(win === true && playerTurn === player2){
                h1.innerText = `${player1} is the winner`;
                player1Score++;
                alter = false;
                h1.style.color = 'red';
                Xh2.innerText = `Player X Score : ${player1Score}`;
            }
            else{
             h1.innerText = `${player2} is the winner`;
             player2Score++;
             h1.style.color = 'blue';
             Oh2.innerText = `Player O Score : ${player2Score}`;
             alter = false;
            }
       }
       else if ((block3.innerText === 'X' && block6.innerText === 'X' && block9.innerText === 'X') || (block3.innerText === 'O' && block6.innerText === 'O' && block9.innerText === 'O') )  {
        
            win = true;
            if(win === true && playerTurn === player2){
                h1.innerText = `${player1} is the winner`;
                player1Score++;
                alter = false;
                h1.style.color = 'red';
                Xh2.innerText = `Player X Score : ${player1Score}`;
            }
            else{
             h1.innerText = `${player2} is the winner`;
             player2Score++;
             h1.style.color = 'blue';
             Oh2.innerText = `Player O Score : ${player2Score}`;
             alter = false;
            }
       }
       else if( clicks === 9 && win === false){
           h1.innerText = 'DRAW';
           h1.style.color = 'black';
       }
       
}

resetGame.addEventListener('click', () => {
    arrayBlocks.forEach(b => b.innerText = '');
    clicks = 0;
    h1.innerText = '';
    currentPlayer.innerText = 'Current Player :';
    currentPlayer.style.color = 'black';
    win = false;
    alter = true;
    playerTurn = player1;
    
})

resetScore.addEventListener('click', () =>{
    let reset = confirm(' Do you wanna reset the score ?\n Remember: All points and progress in the game will be gone');
    if(reset === true){
        arrayBlocks.forEach(b => b.innerText = '');
        Xh2.innerText = 'Player X Score : 0';
        Oh2.innerText = 'Player O Score : 0';
        currentPlayer.innerText = 'Current Player : ';
        currentPlayer.style.color = 'black';
        h1.innerText = '';
        player1Score = 0;
        player2Score = 0;
        alter = true;
    }
    else {
        alert('Ok, but be careful with the buttons! ;)');
    }
})

