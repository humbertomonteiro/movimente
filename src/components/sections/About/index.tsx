import { useState } from "react";
import styles from "./About.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
// import { FaCalendar, FaLocationArrow, FaHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

// import aboutImage from "../../../assets/imgs/shared/event.jpg";

// import { useEvent } from "../../../contexts/EventContexts";

export default function About() {
  // const { events } = useEvent();
  const [showFullText, setShowFullText] = useState(false);

  // const event = events.filter((e) => e.id === "movemente2026")[0];

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className={styles.section} id="about">
      {/* Elementos decorativos de fundo */}
      <div className={styles.shapeBlue} data-aos="fade-right"></div>
      <div className={styles.shapePurple} data-aos="fade-left"></div>
      <div className={styles.shapePink} data-aos="fade-up"></div>

      <div className={styles.container}>
        {/* Coluna da Esquerda - Imagem */}
        <div className={styles.imageColumn} data-aos="zoom-in">
          <div className={styles.imageWrapper}>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/Y6AkHPZHWdM?si=5Dy7KBpqsrXE_g4X"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            {/* <img
              src={aboutImage}
              alt="Pessoas com autismo em atividades inclusivas no Maranhão"
              className={styles.image}
              loading="lazy"
            /> */}

            {/* Card flutuante com info do evento */}
            {/* <div
              className={styles.floatingCard}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className={styles.floatingItem}>
                <FaCalendar />
                <div>
                  <strong>{event.date}</strong>
                  <span>2026</span>
                </div>
              </div>
              <div className={styles.floatingItem}>
                <FaLocationArrow />
                <div>
                  <strong>{event.location}</strong>
                  <span>São Luís - MA</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Cards de diferenciais */}
          <div className={styles.featuresGrid}>
            <div
              className={styles.featureCard}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className={styles.featureIconWrapper}>
                <TbTargetArrow />
              </div>
              <h3 className={styles.featureTitle}>Propósito</h3>
              <p className={styles.featureText}>
                Transformar a realidade das pessoas com autismo no Maranhão
                através da informação e acolhimento
              </p>
            </div>

            <div
              className={styles.featureCard}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className={styles.featureIconWrapper}>
                <FaHeart />
              </div>
              <h3 className={styles.featureTitle}>Comunidade</h3>
              <p className={styles.featureText}>
                Fortalecer a rede de apoio entre famílias, profissionais e
                instituições maranhenses
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className={styles.contentColumn}>
          {/* Descrição */}
          <div className={styles.description} data-aos="zoom-in">
            <span className={styles.locationBadge}>
              <svg
                className={styles.locationIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              São Luís - Maranhão
            </span>
            <h2 className={styles.title}>
              Sobre o <span className={styles.titleHighlight}>Movemente</span>
            </h2>

            {/* Texto inicial - sempre visível */}
            <div className={styles.initialText}>
              <p className={styles.paragraph}>
                Todo tempo histórico é marcado por um despertar coletivo. Este é
                o nosso.
              </p>

              <p className={styles.paragraph}>
                Por muito tempo, milhões de pessoas neurodivergentes foram
                vistas através das lentes do desconhecimento. Interpretadas
                antes de serem compreendidas. Rotuladas antes de serem
                acolhidas.
              </p>

              <p className={styles.paragraph}>
                Mas uma sociedade verdadeiramente madura não é aquela onde todos
                são iguais, é aquela que aprende a respeitar as diferentes
                formas de existir.
              </p>

              <p className={styles.paragraph}>
                O Movemente nasce da convicção de que compreender a
                neurodivergência não é uma escolha sensível. É uma
                responsabilidade social.
              </p>
            </div>

            {/* Texto completo - aparece quando showFullText é true */}
            {showFullText && (
              <div className={styles.fullText}>
                <p className={styles.paragraph}>
                  Não estamos aqui apenas para ampliar debates.
                </p>

                <p className={styles.paragraph}>
                  Estamos aqui para mudar percepções. Para substituir estigmas
                  por consciência. Para transformar informação em respeito.
                </p>

                <p className={styles.paragraph}>
                  Acreditamos em um Brasil onde nenhuma mente diversa seja
                  invisível. Onde diferenças não limitem destinos. Onde
                  dignidade não seja exceção, mas princípio.
                </p>

                <p className={styles.paragraph}>
                  Movemente não é apenas um encontro.
                </p>

                <p className={styles.paragraph}>
                  É um posicionamento.
                  <br />
                  Uma direção.
                  <br />
                  Um compromisso com o futuro.
                </p>

                <p className={styles.paragraph}>
                  Sabemos que mudanças culturais não acontecem de forma
                  imediata.
                </p>

                <p className={styles.paragraph}>
                  Mas toda transformação começa quando alguém decide não
                  permanecer indiferente.
                </p>

                <p className={styles.paragraph}>Hoje, escolhemos nos mover.</p>

                <p className={styles.paragraph}>Mover o olhar.</p>
                <p className={styles.paragraph}>Mover a escuta.</p>
                <p className={styles.paragraph}>Mover a consciência social.</p>

                <p className={styles.paragraph}>
                  Porque quando uma sociedade aprende a compreender…
                </p>

                <p className={styles.paragraph}>ela evolui.</p>

                <p className={styles.paragraph}>
                  E quando a consciência se move…
                </p>

                <p className={styles.paragraph}>o Brasil avança.</p>

                <p className={styles.paragraph}>
                  Este é o tempo do entendimento.
                  <br />
                  Este é o tempo da inclusão real.
                  <br />
                  Este é o tempo do Movemente.
                </p>
              </div>
            )}

            {/* Botão Ler mais / Ler menos */}
            <button onClick={toggleText} className={styles.readMoreButton}>
              {showFullText ? "Ler menos" : "Ler mais"}
              <span className={styles.arrow}>{showFullText ? "↑" : "↓"}</span>
            </button>
          </div>

          {/* CTA */}
          <div className={styles.ctaContainer}>
            <ButtonCTA link="#tickets" text="Quero participar do Movimente" />
          </div>
        </div>
      </div>
    </section>
  );
}
