import styles from "./Footer.module.css";

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <h3>Escreva sobre o que der vontade!</h3>
        <p>Mini Blog &copy; {current_year} </p>
      </div>
    </footer>
  );
};

export default Footer;
