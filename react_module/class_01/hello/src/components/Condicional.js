import {useState} from 'react';

function Condicional(){

const [nome,setNome] = useState('');
const isLogged = true;

    return(
        <div>
            <h1>Qual o seu nome?</h1>
            <input type="text" placeholder="Test" onChange={(e) => setNome(e.target.value)}/>
            {isLogged && (
                <p>{nome}</p>
            )}
        </div>
    )
   
}

export default Condicional














































 // const [email,setEmail] = useState();
    // const [userEmail, setUserEmail] = useState();
    // function enviarEmail(e){
    //     e.preventDefault();
    //     setUserEmail(email);
    // }


    // function limparEmail(){
    //     setEmail('');
    //     setUserEmail('');
    // }

    // return (
    //     <>
    //      <h2>Register your email</h2> 
    //      <form >
    //          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" />
    //          <button onClick={enviarEmail} type="submit">Enviar Email</button>
    //       </form>  
    //       {userEmail && (
    //           <div>
    //               <p>O email do usuário é{userEmail}</p>
    //           <button onClick={limparEmail}>Limpar Email</button>

    //           </div>
    //       )}

    //     </>
       
    // )