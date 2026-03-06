import styles from "./Supporters.module.css";

// Imagens
import logoApoiador1 from "../../../assets/imgs/supporters/clara-comunicação.png";
import logoApoiador2 from "../../../assets/imgs/supporters/viva-aprender.jpg";
import logoPatrocinador1 from "../../../assets/imgs/supporters/governo-maranhao.png";
import logoVeiculo1 from "../../../assets/imgs/supporters/grupo-mirante.jpg";
import logoVeiculo2 from "../../../assets/imgs/supporters/imirante.jpg";
import nutrimax from "../../../assets/imgs/supporters/nutrimax.png";

export default function Supporters() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quem faz o Movimente acontecer</h2>

        {/* Patrocinador */}
        <div className={styles.patrocinador}>
          <span className={styles.tag}>Patrocinadores</span>
          <img
            src={logoPatrocinador1}
            alt="Governo do Maranhão"
            className={styles.logoGrande}
          />
          <img src={nutrimax} alt="Nutrimax" className={styles.logoGrande} />
        </div>

        {/* Apoiadores e Veículos lado a lado */}
        <div className={styles.row}>
          {/* Apoiadores */}
          <div className={styles.col}>
            <span className={styles.tag}>Apoiadores</span>
            <div className={styles.logosPequenas}>
              <img src={logoApoiador1} alt="Clara Comunicação" />
              <img src={logoApoiador2} alt="Viva Aprender" />
            </div>
          </div>

          {/* Veículos */}
          <div className={styles.col}>
            <span className={styles.tag}>Veículos oficiais</span>
            <div className={styles.logosPequenas}>
              <img src={logoVeiculo1} alt="Grupo Mirante" />
              <img src={logoVeiculo2} alt="Imirante" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
