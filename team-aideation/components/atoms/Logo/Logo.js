import styles from "./Logo.module.css";
import Link from "next/link";
const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Link href="/">
        <img
          className={styles.br_logo}
          src="https://img.br.de/9e956cb2-64e7-4c2d-8918-aa9422a6967d.png?rect=108%2C43%2C1024%2C1024&_v=1561046865881&w=500"
        />
      </Link>
    </div>
  );
};

export default Logo;
