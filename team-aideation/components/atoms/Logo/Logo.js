import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img
        className={styles.br_logo}
        src="https://png2.cleanpng.com/sh/e4c902691e7f8d8889c9e85539db1959/L0KzQYm3WMExN5lAgZH0aYP2gLBuTfJzaZ9pRd54Z3AwgMP2hQVkfF5pfeVyZ36wcrLChgJqe5RtfeQ2coXxdLf8jvsuaqMyftd7boPoeLb1TcVjPpVoS6U7NHLpQ4m6TsczQWg2T6Y8MUW2Q4q5UMA2OGQ2SaM3cH7q/kisspng-brand-logo-product-design-bayerischer-rundfunk-br-fernsehen-5b6dc3324bf383.7297174315339200503111.png"
      />

      <div className={styles.Banner}>
          <h1>BR Instagram-stories generator</h1>
          <p>Place your BR article in the text field and get some nice stories!</p>
      </div>
    </div>
  );
};

export default Logo;





