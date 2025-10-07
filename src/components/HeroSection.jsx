// src/components/HeroSection.jsx

import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h2>Feitas à mão, com alma.</h2>
        <p>Bolsas que carregam histórias, criadas com design único e materiais nobres.</p>
        <a href="#" className={styles.heroButton}>Conheça a coleção</a>
      </div>
    </section>
  )
}

export default HeroSection