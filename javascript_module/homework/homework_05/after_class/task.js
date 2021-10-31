let productsList = [];

let action = prompt('Você deseja mexer no sistema de registros de produto da loja?')

while (action !== 'no'){
    let option = prompt('O que você quer fazer?')

if (option === 'add') {
    let id = parseInt(prompt('Informe um id para o produto'));
    let description = prompt('Informe o nome do produto');
    let value = parseInt(prompt('Informe um valor para produto'));


//This function adds a product to the list of products
    let registerProduct = (list,id,description,value) => {
    list.forEach((element) => {
        if (id === element.id) {
            alert('Um produto com esse mesmo id já existe');
        } 
    } ) 
    
    list.push({id : id , description : description , value : value})

}
    registerProduct(productsList,id,description,value);
}


//This function deletes an specific product by taking its id as an argument
else if (option === 'delete'){
    let deleteProduct = (arr) => {
        let  id = parseInt(prompt('Informe um id para o produto'));
        arr = arr.filter(product => product.id !== id);
        console.log(arr);
    
    }
    deleteProduct(productsList)
}


//This function finds an specific product by its id
else if(option === 'find'){
    let findProduct = () => {
        let id  = parseInt(prompt('Informe um id para o produto'));
        let productFound = productsList.find(product => product.id === id );
        console.log(productFound);
    }
    findProduct();
}

//This function lists all items
else if (option === 'list') {
    let listProducts = (list) => {
        list.forEach(product => {
        console.log(product);
        });
    }
    listProducts(productsList);
}

//This function sums the total value of all products in the store
else if (option === 'total'){
   let total =  productsList.reduce((currentValue , product ) => {
    return currentValue + product.value;
    }, 0);
    console.log(total)
}

action = prompt('Você ainda pretende fazer mais alguma coisa?')
}




//Apesar de fazer esse em português  , mantive as strings dos ifs em inglês , pra ficar mais curto pra digitar e mais facil pra vc testar ( Olha como sou bonzinho :) kkkkkkk)