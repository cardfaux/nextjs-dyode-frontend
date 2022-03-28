import styles from '../styles/ShopNow.module.scss';

const ShopNow = ({title, subTitle, buttonText}) => {
  return (
    <section className={styles.shop}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <a href="/shop">
        {buttonText}
      </a>
    </section>
  );
}

export default ShopNow;