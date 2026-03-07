import styles from "./HeaderRegistration.module.css";
import logo from "../../../assets/imgs/logos/logo-movemente.png"; // ajuste o caminho se necessário

export default function HeaderRegistration() {
  return (
    <header className={styles.header}>
      {/* Linha decorativa superior */}
      <div className={styles.topBar} />

      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Logo Movimente" className={styles.logo} />
        </div>

        {/* Divisor vertical */}
        <div className={styles.divider} />

        {/* Textos */}
        <div className={styles.textGroup}>
          <span className={styles.eyebrow}>Formulário de inscrição</span>
          <h1 className={styles.title}>Garanta sua vaga</h1>
          <p className={styles.subtitle}>
            Preencha os dados abaixo para confirmar sua participação no evento.
          </p>
        </div>
      </div>

      {/* Sombra sutil na base */}
      <div className={styles.bottomShadow} />
    </header>
  );
}
