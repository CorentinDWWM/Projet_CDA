import logo from "../assets/images/senscritique.webp";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <div className="flex-fill">
        <img src={logo} alt="logo" />
      </div>
      <i className="fa-solid fa-bars mr-15"></i>
      <ul className={`${styles.navbar}`}>
        <button className="mr-5 btn btn-reverse-primary">
          <span>Favoris</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}
