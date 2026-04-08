import styles from "./VenueSeats.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import seatsImage from "../../../assets/imgs/shared/seats.png";
import { FaTicketAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaWebAwesome } from "react-icons/fa6";

export default function VenueSeats() {
  return (
    <section className={styles.section} id="venue-seats">
      {/* Elementos decorativos de fundo */}
      <div className={styles.shapeBlue} data-aos="fade-right"></div>
      <div className={styles.shapePurple} data-aos="fade-left"></div>

      <div className={styles.container}>
        {/* Coluna da Imagem */}
        <div className={styles.imageColumn} data-aos="zoom-in">
          <div className={styles.imageWrapper}>
            <img
              src={seatsImage}
              alt="Mapa de assentos do local do evento"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>

        {/* Coluna de Conteúdo */}
        <div className={styles.contentColumn} data-aos="zoom-in">
          <span className={styles.eyebrow}>
            <svg
              className={styles.eyebrowIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Escolha seu ingresso
          </span>

          <h2 className={styles.title}>
            Encontre o lugar{" "}
            <span className={styles.titleHighlight}>ideal para você</span>
          </h2>

          <p className={styles.paragraph}>
            Cada setor foi pensado para proporcionar uma experiência única. Seja
            mais próximo do palco ou com uma visão privilegiada do evento, temos
            a opção certa para você viver o Movemente do seu jeito.
          </p>

          {/* Cards dos setores */}
          <div className={styles.seatsGrid}>
            <div
              className={styles.seatCard}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className={styles.seatIconWrapper}>
                <FaTicketAlt />
              </div>
              <div>
                <h3 className={styles.seatTitle}>Ingresso Movemente</h3>
                <p className={styles.seatText}>
                  Para quem quer participar e absorver o conteúdo do congresso.
                </p>
              </div>
            </div>

            <div
              className={styles.seatCard}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className={styles.seatIconWrapper}>
                <IoPeople />
              </div>
              <div>
                <h3 className={styles.seatTitle}>Ingresso Conexão</h3>
                <p className={styles.seatText}>
                  Para quem quer levar a experiência do congresso também no
                  físico.
                </p>
              </div>
            </div>

            <div
              className={styles.seatCard}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className={styles.seatIconWrapper}>
                <FaWebAwesome />
              </div>
              <div>
                <h3 className={styles.seatTitle}>Ingresso VIP</h3>
                <p className={styles.seatText}>
                  Para quem quer viver o congresso com mais acesso e
                  proximidade.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaContainer}>
            <ButtonCTA
              link="#tickets"
              text="Escolher meu ingresso"
              onClick={(e) => {
                e.preventDefault();

                window.fbq?.("track", "ViewContent", {
                  content_name: "scroll_to_tickets",
                });

                setTimeout(() => {
                  const el = document.getElementById("tickets");
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 150);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
