import styles from './NavBar.module.css';

export default function NavBar(){
return (
<nav className={styles.navbar}>
  <ul className={styles.navList}>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

);
};
