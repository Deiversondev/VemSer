import styles from './Footer.module.css'


function Footer({Link}){
    return (
        <div>
            <footer>
            <div className={styles.footer}>
            <a href="">
                <Link to= "/">Home</Link>
            </a>
            <a href="">
            <Link to= "/about">About</Link>
            </a>
            <a href=""> 
                <Link to= "/contactUs">Contato</Link>
            </a>
            </div>
        <address>AV. Andarai 531 - Porto Alegre</address>
            </footer>
        </div>
    )
}

export default Footer;