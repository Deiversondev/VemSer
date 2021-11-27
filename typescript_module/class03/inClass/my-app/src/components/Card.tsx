import { useContext,useEffect , useState} from "react"
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


const Card = () => {

const {list,setList,setEdit, userEdit,setUserEdit} = useContext(PessoaContext)
const {handleLogin, navigate} = useContext<any>(AuthContext);



async function Deletar(id:number) {
    await api.delete(`/pessoa/${id}`)
   
        window.location.reload()

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
                        <p><span><BsCalendarDate/> Data de Nascimento: </span> {pessoa.dataNascimento}</p>
                        <p><span><MdOutlineAlternateEmail/> Email: </span>{pessoa.email}</p>
                        <p><span><TiBusinessCard/> CPF: </span>{pessoa.cpf}</p>
                        
                        </div>
                        
                       <div className={styles.card_btn}>
                       <button onClick={() => {Deletar(pessoa.idPessoa)}}>Apagar <RiDeleteBin2Line/></button>
                        <button onClick={() => {setUserEdit(pessoa);navigate('/update')}}>Editar <FiEdit/></button>
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
