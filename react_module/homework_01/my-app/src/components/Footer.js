import styles from './Footer.module.css'

function Footer(){
    return (
        <div>
            <footer>
            <div className={styles.footer}>
            <a href="./home.html">Home</a>
            <a href="./about.html">Sobre</a>
            <a href="./contact_us.html">Contato</a></div>
        <address>AV. Andarai 531 - Porto Alegre</address>
            </footer>
        </div>
    )
}

export default Footer;