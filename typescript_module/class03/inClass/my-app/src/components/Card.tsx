import { useContext,useEffect , useState} from "react"
import api from "../api"
import { PessoaContext } from "../context/PessoaContext"
import { AuthContext } from "../context/AuthContext"
import styles from './Card.module.css'

const Card = () => {

const {list,setList,setEdit, userEdit,setUserEdit} = useContext(PessoaContext)
const {handleLogin, navigate} = useContext<any>(AuthContext);



async function Deletar(id:number) {
    await api.delete(`/pessoa/${id}`)
   
        window.location.reload()

}
// async function Updat(id:number) {
//     const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`)
//     setUserEdit(data);
//     console.log(userEdit);
//  }


useEffect(() =>{
    (async()=>{
        const {data} = await api.get('/pessoa');
        console.log(data);
        setList(data)
        console.log(list)
    })();
},[])

    return (
        <div>
            <div className={styles.cards}>
            { list && (
                list.map(pessoa => (
                    <div className={styles.card} >
                        <h3>{pessoa.nome}</h3>
                        <div className={styles.card_content}>
                        <p><span>Data de Nascimento: </span> {pessoa.dataNascimento}</p>
                        <p><span>Email: </span>{pessoa.email}</p>
                        <p><span>CPF: </span>{pessoa.cpf}</p>
                        </div>

                       <div className={styles.card_btn}>
                       <button onClick={() => {Deletar(pessoa.idPessoa)}}>Apagar</button>
                        <button onClick={() => {setUserEdit(pessoa);navigate('/update')}}>Atualizar</button>
                       </div>
                       <br />
                    </div>
                    ))
            )}
            </div>
        </div>
    )
}

export default Card
