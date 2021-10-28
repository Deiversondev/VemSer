let number = 12345;

function reverse(str){  
    arr = str.toString();
    let reversed = "";      
     for (let i = arr.length - 1; i >= 0; i--){         
       reversed += arr[i];  
     }     
    return parseInt(reversed);
  }

  reverse(number)


  