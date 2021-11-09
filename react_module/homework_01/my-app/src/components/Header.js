import styles from './Header.module.css'


function Header(){
    return(
        <div>
            <header>
                <nav>
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            <img src="https://i.pinimg.com/originals/dd/7b/4f/dd7b4fbcc65372f7bfdb967082d0358f.png" alt="" />
                        </div>
                        <div className={styles.title}>
                            <h3>Melhores alunos do VemSer de todos os tempos</h3>
                        </div>
                        <div className={styles.nav_links}>
                            <a href="">Home</a>
                            <a href="">Sobre</a>
                            <a href="">Contato</a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}


export default Header
