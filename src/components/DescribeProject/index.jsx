import styles from "./describeProject.module.css"

const DescribeProject = () => {
    return (
        <section className={styles.container}>
            <div className={styles.containerTitulo}>
                <p className={styles.titulo}>Descrição do projeto</p>
            </div>

            <div className={styles.containerTextos}>
                <p className={styles.textos}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat temporibus tempora ab placeat repudiandae blanditiis dolor accusantium, impedit doloremque repellendus esse optio doloribus illum ducimus deleniti, veniam natus commodi cum!</p>

                <p className={styles.textos}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, velit aliquam obcaecati maiores hic molestias labore ad veniam ipsum consequuntur illo sit minima atque. Ut molestias repudiandae itaque fugiat omnis!</p>

                <p className={styles.textos}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet adipisci quos minima dolore! Sapiente voluptatum reprehenderit deleniti autem dignissimos tenetur nesciunt animi officia provident sunt, magnam maiores eos asperiores est.</p>

                <p className={styles.textos}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias, nam velit modi ratione, reiciendis id vero neque odit dolorum recusandae, eos ullam corrupti. Excepturi laudantium numquam reprehenderit id aliquam.</p>
            </div>
        </section>
    )
}

export default DescribeProject