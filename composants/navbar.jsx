import styles from "@/styles/Home.module.css";

function Composant1({message}) {
    return (<header className={styles.header}>
        <div className={styles.name}>
          <h2 className={styles.h2name}><font color="#EE4A1D">Maxime Studio</font></h2>
        </div>
        <div className={styles.navbar}>
          <a href="/">Home</a>

          <a href="./about">About</a>

          <a href="./contact">Contact</a>
        </div>

      </header>);
}


export default Composant1;