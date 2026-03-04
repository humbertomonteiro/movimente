import styles from "./About.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import { FaCalendar, FaLocationArrow, FaHeart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

import aboutImage from "../../../assets/imgs/shared/event.jpg";

import { useEvent } from "../../../contexts/EventContexts";

export default function About() {
  const { events } = useEvent();

  const event = events.filter((e) => e.id === "movemente2026")[0];

  return (
    <section className={styles.section}>
      {/* Elementos decorativos de fundo */}
      <div className={styles.shapeBlue} data-aos="fade-right"></div>
      <div className={styles.shapePurple} data-aos="fade-left"></div>
      <div className={styles.shapePink} data-aos="fade-up"></div>

      <div className={styles.container}>
        {/* Grid principal */}
        {/* Coluna da Esquerda - Imagem */}
        <div className={styles.imageColumn} data-aos="zoom-in">
          <div className={styles.imageWrapper}>
            <img
              src={aboutImage}
              alt="Pessoas com autismo em atividades inclusivas no Maranhão"
              className={styles.image}
              loading="lazy"
            />

            {/* Card flutuante com info do evento */}
            <div
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
            </div>
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
              Sobre o <span className={styles.titleHighlight}>Movimente</span>
            </h2>
            <p className={styles.paragraph}>
              O <strong>Movimente</strong> nasceu da necessidade de criar um
              espaço de acolhimento, aprendizado e troca de experiências sobre o
              autismo no Maranhão. Nossa missão é conectar famílias,
              profissionais e pessoas com TEA em um ambiente que promova
              inclusão e desenvolvimento.
            </p>

            <p className={styles.paragraph}>
              Reunimos os maiores especialistas do Brasil para compartilhar
              estratégias que realmente funcionam no dia a dia, desde a primeira
              infância até a vida adulta. Aqui, você encontra conteúdo
              relevante, troca experiências e constrói uma rede de apoio
              fundamental para essa jornada.
            </p>
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
