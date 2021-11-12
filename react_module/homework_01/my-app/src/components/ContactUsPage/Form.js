import styles from './Form.module.css'

const Form = () => {
    return (
        <div>
            
            <form>
        <div className={styles.form}>
            <div>
                <label for="">Digite seu nome</label>
                <input type="text" name="" id="" placeholder="Digite seu nome"/>
            </div>

            <div>
                <label for="">Digite seu email</label>
                <input type="email" name="" id="" placeholder="Digite seu email"/>
            </div>

            <div>
                <label for="">Qual é o assunto ?</label>
                <select name="" id="">
                <option value="Professor João é o melhor professor de Front-End">Professor João é o melhor professor de Front-End</option>
                <option value="Breno e seu feito histórico envolvendo tabelas">Breno e seu feito histórico envolvendo tabelas</option>
                <option value="Opinião sobre o Vem Ser DBC ">Opinião sobre o Vem Ser DBC </option>
                <option value="Zoom vs Microsoft Teams">Zoom vs Microsoft Teams</option>
            </select>
            </div>

            <div>
                <label className={styles.msg} for="">Digite sua mensagem</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
            </div>

            <input type="submit" value="Enviar" className={styles.send_btn}/>
        </div>
    </form>

        </div>
    )
}

export default Form
