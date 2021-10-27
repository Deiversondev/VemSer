let numbers = [3,1,4,8,2,7,5]

function sortNumbers(list) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < list.length; i += 1) {
        if (list[i - 1] > list[i]) {
          done = false;
          let position = list[i - 1];
          list[i - 1] = list[i];
          list[i] = position;
        }
      }
    }
  
  }
  
  sortNumbers(numbers);
  console.log(numbers);
