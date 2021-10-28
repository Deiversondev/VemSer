let todoList = [];
let userName = prompt('Heeeey, tell me your name ;)');
let answer = prompt('Would you like to do something?')
while(answer !== 'no') {
    
let input = prompt('What would you like to do?')

if (input === 'add') {
    let todoItem = prompt('What would you like to add to the list?')
    let todoIn = (item) => {
        todoList.push(item)
    }
    todoIn(todoItem);
}

else if (input === 'remove') {
    
    let todoOut = () => {
        let removedItem = todoList.pop()
        console.log(`You just removed ${removedItem} from your list`);
        
    }
    todoOut();
}

else if (input === 'show') {
    let todoShow = (todoList) =>{
        for(item of todoList){
            console.log(item);
        }
    }
todoShow(todoList);
}
  answer = prompt('Would you like to do something more?')
}


let goodBye = () =>{
    console.log(`Hey ${userName}, thank you sooooo much for using our list! Hope you come back soon!`)
    console.log('By the way, here is your list : ')
    for(item of todoList){
        console.log(item);
    }
    console.log('Byeeeeeeee ' + userName);
}


goodBye();