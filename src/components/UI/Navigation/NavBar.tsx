import styles from './NavBar.module.css';

export default function NavBar(){
return (
<nav className={styles.navbar}>
  <ul className={styles.navList}>
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">History</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</nav>

);
};
