import styles from './cover.module.scss'

export default function Cover () {
    return (
        <div className={styles.cover}>
            <div className={styles.limited_width}>
                <div className={styles.container_text}>
                    <p>Preços baixos em</p>
                    <h1>ÓCULOS DE GRAU E DE SOL</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
        </div>
    )
}