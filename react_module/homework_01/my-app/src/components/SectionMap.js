import styles from './SectionMap.module.css'

function SectionMap(){
    return (
        <div>
            <section className={styles.map}>
            <h2>Endereço da DBC</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13818.882964663642!2d-51.177436373290874!3d-30.016174030328205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1sen!2sbr!4v1633973872776!5m2!1sen!2sbr"
            width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </section>
           
        </div>
    )
}

export default SectionMap;