let frontEndStudents1 = ['Lucas','Victor', 'Ana','Samuel', 'Leandro','Suzy',];
let frontEndStudents2 = ['Tamara','Fernanda','Thiago','Deiverson','Augusto','Breno']

let vemSer = (array1,array2) =>{
    let frontEndClass = array1.concat(array2);
    for(student of frontEndClass){
        console.log(student);
    }
}

vemSer(frontEndStudents1,frontEndStudents2);