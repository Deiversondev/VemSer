import moment from "moment";
import styles from './Card.module.css'


function Card({dispatch,erase,editPerson,person,goToPage}) {
    return (
        <div className={styles.cards_container}>
            {
                person && person.map(p => (
                    <div className={styles.card}>
                        <div className={styles.card_content}>
                            <h3>{p.nome}</h3>
                            <p><span>Data de Nascimento: </span>{moment(p.dataNascimento).format('DD/MM/YYYY')}</p>
                            <p><span>Email: </span>{p.email}</p>
                            <p><span>CPF: </span>{p.cpf}</p>
                        </div>
                      <div className={styles.card_btns}>
                      <button onClick={() => {editPerson(dispatch,p.idPessoa);goToPage()}}>Editar</button>
                        <button onClick={() =>erase(p.idPessoa)}>Excluir</button>
                      </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
