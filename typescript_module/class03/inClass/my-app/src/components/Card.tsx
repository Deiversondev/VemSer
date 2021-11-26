import { useContext,useEffect } from "react"
import { PessoaDTO } from "../model/PessoaDTO"
import api from "../api"
import { PessoaContext } from "../context/PessoaContext"

const Card = () => {

const {list,setList} = useContext(PessoaContext)

async function Deletar(id:number) {
    await api.delete(`/pessoa/${id}`)
    await api.get('/pessoa/')
}
async function Updat(id:number) {
    const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`)
    console.log(data)
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
                        <button onClick={() => {Updat(pessoa.idPessoa)}}>Atualizar</button>
                       <br />
                    </div>
                    ))
            )}
            </div>
        </div>
    )
}

export default Card
