
import styles from '../styles/Collections.module.scss'

const Collections = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.womens}>
        <p>women's</p>
      </div>
      <div className={styles.mens}>
        <p>men's</p>
      </div>
      <div className={styles.accessories}>
        <p>accessories</p>
      </div>
    </section>
  );
}

export default Collections;