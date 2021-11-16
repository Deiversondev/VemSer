import styles from './SayMyName.module.css'

function SayMyName(props){
    const numero = props.calcular(6)
    return (
        <div className={styles.sayMyName}>
            <h1>{numero}</h1>
        </div>
    )
}

export default SayMyName;