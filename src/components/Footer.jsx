import styles from "./Footer.module.css"

function Footer() {
    return (

        // 2. APLICANDO CLASSE NO CONTAINER
        <footer className={styles.footerContainer}>
            <div>
                <p className={styles.copyrightText}>© 2025 IMBURANA - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
