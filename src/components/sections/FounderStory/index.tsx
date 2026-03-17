import styles from "./FounderStory.module.css";

// Substitua pelos caminhos reais das imagens
import founderPhoto1 from "../../../assets/imgs/founder/vivian-photo-1.png";
import founderPhoto2 from "../../../assets/imgs/founder/vivian-photo-2.png";

export default function FounderStory() {
  return (
    <section className={styles.section} id="founder">
      {/* Decorative background shapes */}
      <div className={styles.shapePurple} data-aos="fade-right" />
      <div className={styles.shapeBlue} data-aos="fade-left" />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className={styles.eyebrow}>Conheça quem está por trás</span>
          <h2 className={styles.title}>
            A mente por trás do{" "}
            <span className={styles.titleHighlight}>Movemente</span>
          </h2>
        </div>

        {/* ── BLOCK 1: text left · photo right ── */}
        <div className={styles.block}>
          <div
            className={styles.textColumn}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p className={styles.intro}>
              Por trás do Movemente está{" "}
              <strong className={styles.name}>Vívian Pacífico.</strong>
            </p>

            <p className={styles.paragraph}>
              Psicopedagoga, neuropsicopedagoga, psicanalista, educadora e
              palestrante com mais de duas décadas dedicadas à educação, ao
              desenvolvimento humano e à transformação de vidas por meio da
              informação.
            </p>

            <p className={styles.paragraph}>
              Ao longo de sua trajetória, Vívian caminhou ao lado de inúmeras
              famílias, profissionais e instituições, compreendendo de perto os
              desafios enfrentados por quem busca respostas, orientação e
              acolhimento.
            </p>

            <p className={styles.paragraph}>
              Sua missão sempre foi clara: democratizar o acesso ao conhecimento
              e ampliar o olhar da sociedade sobre o desenvolvimento humano e a
              inclusão.
            </p>

            <p className={styles.paragraph}>
              Vívian também é idealizadora da <strong>Viva Aprender</strong>, um
              espaço multidisciplinar e pedagógico voltado ao desenvolvimento
              humano, criado para apoiar crianças, famílias e profissionais por
              meio de orientação, acompanhamento e práticas que promovem
              aprendizagem, inclusão e desenvolvimento.
            </p>
          </div>

          <div
            className={styles.imageColumn}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className={styles.imageWrapper}>
              <img
                src={founderPhoto1}
                alt="Vívian Pacífico"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageDecor} />
            </div>

            {/* Credential badge */}
            <div
              className={styles.badge}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <span className={styles.badgeIcon}>🎓</span>
              <div>
                <strong>+20 anos</strong>
                <span>de atuação</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Highlight quote ── */}
        <div
          className={styles.highlightBlock}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className={styles.highlightText}>
            <strong>O Movemente nasce dessa visão.</strong>
          </p>
          <p className={styles.highlightSub}>
            Da convicção de que quando conhecimento, propósito e pessoas
            comprometidas se encontram, movimentos capazes de transformar
            realidades começam a surgir.
          </p>
        </div>

        {/* ── BLOCK 2: photo left · text right ── */}
        <div className={`${styles.block} ${styles.blockReverse}`}>
          <div
            className={styles.imageColumn}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className={styles.imageWrapper}>
              <img
                src={founderPhoto2}
                alt="Vívian Pacífico em ação"
                className={styles.image}
                loading="lazy"
              />
              <div className={`${styles.imageDecor} ${styles.imageDecorAlt}`} />
            </div>
          </div>

          <div
            className={styles.textColumn}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className={styles.paragraph}>
              Mais do que criar um evento, Vívian Pacífico iniciou um movimento
              que convida a sociedade a aprender, compreender e transformar.
            </p>

            <blockquote className={styles.quote}>
              "Quando a consciência se move… o Brasil avança."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
