import styles from "./Hero.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import bg from "../../../assets/imgs/bgs/bg.png";
import logo from "../../../assets/imgs/logos/logo-movemente.png";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.sphereTopLeft}></div>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo} data-aos="zoom-in">
            {/* <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" /> */}
            <img className={styles.logoImg} src={logo} alt="Logo" />
          </div>
          <div className={styles.text} data-aos="zoom-in" data-aos-delay="300">
            <p className={styles.subtitle}>
              Estratégias que funcionam: da teoria à prática.
            </p>
            <div className={styles.highlight}>
              <span className={styles.highlightMobile}>Em Junho de 2026</span>{" "}
              <span className={styles.divider}>|</span>{" "}
              <span className={styles.highlightMobile}>Hotel Legal</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <ButtonCTA link={"#ingressos"} text={"Garanta sua vaga agora"} />
          </div>
        </div>
        <div className={styles.image}>
          <img src={bg} alt="Imagem de pessoas felizes no conect autismo" />
        </div>
        <div className={styles.gridOverlay}></div>
      </div>
    </section>
  );
}
