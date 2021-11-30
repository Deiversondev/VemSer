import { useContext} from "react"
import api from "../api"
import { PessoaContext } from "../context/PessoaContext"
import { AuthContext } from "../context/AuthContext"
import styles from './Card.module.css'
import { FiEdit } from 'react-icons/fi';
import {RiDeleteBin2Line} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {BsCalendarDate} from  'react-icons/bs'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {TiBusinessCard} from 'react-icons/ti'
import {BsHouseDoor} from 'react-icons/bs'
import moment from "moment"


const Card = () => {

const {list,setList, setUserEdit} = useContext(PessoaContext)
const { navigate} = useContext<any>(AuthContext);

// function getPeople(){
//     api.get('/pessoa')
// }
async function getPeople(){
    const {data} =  await api.get('/pessoa')
    setList(data)
}

function searchCep(){
    window.location.href = '/address'
}


async function Deletar(id:number) {

    let beSure = window.confirm('Você tem certeza que deseja excluir esse usuário?')
    if (beSure) {
        await api.delete(`/pessoa/${id}`)
        getPeople()
        setTimeout(()=>{
            alert('Usuário deletado com sucesso!')
        },1100)

    }
    else{
        alert('Operação cancelada')
    }

}

    return (
        <div>
            <div className={styles.cards}>
            { list && (
                list.map((pessoa,index) => (
                    <div key={index} className={styles.card} >
                        <h3 className={styles.user_circle}><FaUserCircle/></h3>
                        <h3>{pessoa.nome}</h3>
                        <div className={styles.card_content}>
                        <p><span><BsCalendarDate/> Data de Nascimento: </span> {moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
                        <p><span><MdOutlineAlternateEmail/> Email: </span>{pessoa.email}</p>
                        <p><span><TiBusinessCard/> CPF: </span>{pessoa.cpf}</p>
                        
                        </div>
                        
                       <div className={styles.card_btn}>
                        <button onClick={() => {setUserEdit(pessoa);navigate('/update')}}>Editar <FiEdit/></button>
                        <button onClick={searchCep}>Endereço <BsHouseDoor/></button>
                        <button onClick={() => {Deletar(pessoa.idPessoa)}}>Apagar <RiDeleteBin2Line/></button>
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
