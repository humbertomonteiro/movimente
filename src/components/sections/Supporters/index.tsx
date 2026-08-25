import styles from "./Supporters.module.css";

// Imagens
import logoApoiador1 from "../../../assets/imgs/supporters/clara-comunicação.png";
import logoApoiador2 from "../../../assets/imgs/supporters/viva-aprender.jpg";
import logoPatrocinador1 from "../../../assets/imgs/supporters/governo-maranhao.png";
import logoPotiguar from "../../../assets/imgs/supporters/Potiguar.jpeg";
import logoVeiculo1 from "../../../assets/imgs/supporters/grupo-mirante.jpg";
import logoVeiculo2 from "../../../assets/imgs/supporters/imirante.jpg";
import nutrimax from "../../../assets/imgs/supporters/nutrimax.png";

export default function Supporters() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quem faz o Movemente acontecer</h2>

        {/* Patrocinador */}
        <h3 className={styles.tag}>Patrocinadores</h3>
        <div className={styles.patrocinador}>
          <img
            src={logoPatrocinador1}
            alt="Governo do Maranhão"
            className={styles.logoGrande}
          />
          <img src={nutrimax} alt="Nutrimax" className={styles.logoGrande} />
          <img
            src={logoPotiguar}
            alt="Potiguar"
            className={styles.logoGrande}
          />
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
