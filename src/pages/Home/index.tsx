import styles from './home.module.css'
const Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <span>Blood</span>
                <span>Maiden</span>
            </div>
            <div className={styles.rightSide}></div>
        </div>
    )
}

export default Home;

