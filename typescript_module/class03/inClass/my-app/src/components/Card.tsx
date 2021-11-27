import { useContext,useEffect , useState} from "react"
import { PessoaDTO } from "../model/PessoaDTO"
import api from "../api"
import { PessoaContext } from "../context/PessoaContext"
import { AuthContext } from "../context/AuthContext"

const Card = () => {

const {list,setList,setEdit, userEdit,setUserEdit} = useContext(PessoaContext)
const {handleLogin, navigate} = useContext<any>(AuthContext);



async function Deletar(id:number) {
    await api.delete(`/pessoa/${id}`)
   
        window.location.reload()

}
async function Updat(id:number) {
    const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`)
    setUserEdit(data);
    console.log(userEdit);
 }


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
            <div>
            { list && (
                list.map(pessoa => (
                    <div >
                        <p>{pessoa.nome}</p>
                        <p>{pessoa.dataNascimento}</p>
                        <p>{pessoa.email}</p>
                        <p>{pessoa.cpf}</p>
                        <button onClick={() => {Deletar(pessoa.idPessoa)}}>Apagar</button>
                        <button onClick={() => {setUserEdit(pessoa);navigate('/update')}}>Atualizar</button>
                       <br />
                    </div>
                    ))
            )}
            </div>
        </div>
    )
}

export default Card
