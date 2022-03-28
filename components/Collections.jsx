
import styles from '../styles/Collections.module.scss'

const Collections = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.womens}>
        <div className={styles.text}>
        <p>women's</p>
        </div>
      </div>
      <div className={styles.mens}>
        <div className={styles.text}>
        <p>men's</p>
        </div>
      </div>
      <div className={styles.accessories}>
        <div className={styles.text}>
        <p>accessories</p>
        </div>
      </div>
    </section>
  );
}

export default Collections;