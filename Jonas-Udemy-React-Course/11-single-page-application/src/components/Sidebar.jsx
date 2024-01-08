import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List Of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} By WorldWise INC.
        </p>
      </footer>
    </div>
  );
}
