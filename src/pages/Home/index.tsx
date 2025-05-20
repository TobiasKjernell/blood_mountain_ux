import styles from './home.module.css'
const Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.bloodText}>
                    <span>Blood</span>
                    <span>Maiden</span>
                </div>

                <a href='#' className={styles.trailerBtn}><span className={styles.trailerTitle}>Watch the trailer</span></a>
            </div>
            <div className={styles.rightSide}>


            </div>
        </div>

    )
}

export default Home;

