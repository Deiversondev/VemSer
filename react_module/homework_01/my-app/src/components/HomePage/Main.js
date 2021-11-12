import styles from './Main.module.css'

function Main(){
    return (
        <div>
            <div className={styles.main_title}>
                <h1>Estamos aprendendo React com o melhor professor de todos</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.carachters}>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/eb/Mario_%28personagem%29.png" alt="" />
                    <p>Mario</p>
                </div>

                <div className={styles.carachters}>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/4/48/Yoshi.png/200px-Yoshi.png" alt="" />
                    <p>Yoshi</p>
                </div>

                <div className={styles.carachters}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png" alt="" />
                    <p>Toad</p>
                </div>

                <div className={styles.carachters}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png" alt="" />
                    <p>Luigi</p>
                </div>

                <div className={styles.carachters}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/16/Princess_Peach_Stock_Art.png" alt="" />
                    <p>Princess Peach</p>
                </div>

                <div className={styles.carachters}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/92/Bowser_Stock_Art_2021.png" alt="" />
                    <p>Bowser</p>
                </div>

            </div>
        </div>
    )
}

export default Main;