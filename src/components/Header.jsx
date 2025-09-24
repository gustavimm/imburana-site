import styles from './Header.module.css';

function Header() {
    return (
        <header className = {styles.headerContainer}>
            <h1 className={styles.logo}>IMBURANA</h1>
            <nav className={styles.navLinks}>
                <a href="#">Bolsas</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Header;