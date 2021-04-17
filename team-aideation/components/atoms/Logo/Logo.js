import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img
        className={styles.br_logo}
        src="https://img.br.de/9e956cb2-64e7-4c2d-8918-aa9422a6967d.png?rect=108%2C43%2C1024%2C1024&_v=1561046865881&w=500"
      />

      {/* <div className={styles.Banner}>
          <h1>BR Instagram-stories generator</h1>
          <p>Place your BR article in the text field and get some nice stories!</p>
      </div> */}
    </div>
  );
};

export default Logo;





