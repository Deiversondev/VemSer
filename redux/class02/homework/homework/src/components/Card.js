import moment from "moment";
import styles from './Card.module.css'


function Card({dispatch,erase,editPerson,person,goToPage}) {
    return (
        <div className={styles.cards_container}>
            {
                person && person.map(p => (
                    <div className={styles.card}>
                        <h3>{p.nome}</h3>
                        <p>{moment(p.dataNascimento).format('DD/MM/YYYY')}</p>
                        <p>{p.email}</p>
                        <p>{p.cpf}</p>
                        <button onClick={() => {editPerson(dispatch,p.idPessoa);goToPage()}}>Get me</button>
                        <button onClick={() =>erase(p.idPessoa)}>Delete me</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
