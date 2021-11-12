import styles from './Content.module.css'

const Content = () => {
    return (
        <div>
            <div className={styles.about_video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h9HiHkEar-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className={styles.content}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sapiente temporibus! Hic repellendus ut omnis eligendi minus vero nemo, perferendis sint error quo sequi dolor molestias aliquam corrupti, nulla vitae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Esse, amet mollitia nesciunt repellat impedit incidunt! Commodi velit reiciendis doloremque, ad adipisci cupiditate eos maiores odio doloribus sint voluptatem nam ex.
        </p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur soluta debitis optio eos dolorem culpa et est iste officiis quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis praesentium molestias consectetur eaque
            natus, expedita voluptatibus placeat eos unde odit quidem molestiae animi deserunt temporibus aliquid mollitia id sit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem sapiente itaque quam sint asperiores, impedit quae assumenda tempore dolorem provident ipsum ea illum non eos? Voluptatum praesentium cumque enim.</p>
    </div>

        </div>
    )
}

export default Content
