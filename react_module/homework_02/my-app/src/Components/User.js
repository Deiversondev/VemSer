import { useState } from 'react';
import styles from './User.module.css'

const User = () => {

    function sendInfo(e){
        e.preventDefault();
        if (nome && email && profissao) {
            users.push({nome:nome,email:email,profissao:profissao})
            alert('Cadastro feito!')
        }
        else{
            alert('Preecha todos os campos!')
        }
    
       setNome('')
       setEmail('')
       setProfissao('')
    }
    function removeEmployee(nome){
       setUsers(users.filter(user => user.nome !== nome)) 
       alert(`Usuário ${nome} foi removido!` )
    }

    const [users,setUsers] = useState([]);
    const [nome,setNome] = useState();
    const [email,setEmail] = useState();
    const [profissao,setProfissao] = useState();

    return (

        <div>

            <h1>Trabalhadores</h1>
           <form >
           <div>
                 <input onChange={(e)=> setNome(e.target.value)} type="text" placeholder="Digite seu nome" value={nome}/>
            </div>

            <div>
                 <input onChange={(e) =>setEmail(e.target.value)} type="text" placeholder="Digite seu email" value={email} />
            </div>    

            <div>
                <input onChange={(e) => setProfissao(e.target.value)} type="text" placeholder="Digite sua profissão"  value={profissao}/>
            </div>
            
            <button type="submit" onClick={sendInfo}>Adicionar</button>
           </form>
            
            {users.length > 0 && (
                users.map(user => {
                   return (
                    <div className={styles.employee}>
                    <h3>Usuário: {user.nome}</h3>
                    <p>Email: {user.email}</p>
                    <p>Profissão: {user.profissao}</p>
                    <button className={styles.button} type='submit' onClick={() => removeEmployee(user.nome)}>Remover</button>
               </div>
                   )
                 })
            )}

        </div>
    )
}

export default User
