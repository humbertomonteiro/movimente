import styles from "./Location.module.css";
import {
  IoLocationOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoNavigateOutline,
} from "react-icons/io5";
import { HiOutlineBuildingOffice, HiOutlineMapPin } from "react-icons/hi2";

import { FaRegCopy } from "react-icons/fa";
import GridOverlay from "../../shared/GridOverlay";

import { useEvent } from "../../../contexts/EventContexts";

export default function Location() {
  const { events } = useEvent();

  const event = events.filter((e) => e.id === "movemente2026")[0];

  const handleCopyAddress = () => {
    const address = event.address;
    navigator.clipboard.writeText(address);
    alert("Endereço copiado!");
  };

  const openMaps = () => {
    const url = event.linkLocation;
    window.open(url, "_blank");
  };

  const openWaze = () => {
    const url = event.linkWaze;
    window.open(url, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.shapeMap}></div>
      <div className={styles.shapePin}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className={styles.badge}>
            <IoLocationOutline className={styles.badgeIcon} />
            Localização
          </span>
          <h2 className={styles.title}>
            Onde vai acontecer o{" "}
            <span className={styles.titleHighlight}>Movimente</span>
          </h2>
          <p className={styles.subtitle}>
            Um local pensado para proporcionar conforto, acessibilidade e uma
            experiência incrível para todos
          </p>
        </div>

        <div className={styles.content}>
          {/* Mapa e Imagem */}
          <div className={styles.mapSection} data-aos="zoom-in">
            <div className={styles.imageGrid}>
              <div className={styles.mainImage}>
                {/* <img
                  src={event.image}
                  alt="Hotel Legal - Fachada"
                  className={styles.hotelImage}
                  loading="lazy"
                /> */}
                {event.mapGoogle}
                <div className={styles.imageBadge}>
                  <HiOutlineBuildingOffice />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className={styles.mapImage}>
                <img
                  src={event.image}
                  alt="Mapa de localização"
                  className={styles.mapImg}
                  loading="lazy"
                />
                <button className={styles.mapButton} onClick={openMaps}>
                  <IoNavigateOutline />
                  Abrir no Maps
                </button>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className={styles.infoSection} data-aos="zoom-in">
            {/* Endereço */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <HiOutlineMapPin className={styles.cardIcon} />
                Endereço Completo
              </h3>
              <p className={styles.address}>{event.address}</p>
              <div className={styles.addressActions}>
                <button
                  className={styles.copyButton}
                  onClick={handleCopyAddress}
                >
                  <FaRegCopy /> Copiar endereço
                </button>
                <div className={styles.mapLinks}>
                  <button onClick={openMaps} className={styles.mapLink}>
                    Google Maps
                  </button>
                  <button onClick={openWaze} className={styles.mapLink}>
                    Waze
                  </button>
                </div>
              </div>
            </div>

            {/* Data e Hora */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <IoCalendarOutline className={styles.cardIcon} />
                Data e Horário
              </h3>
              <div className={styles.datetimeGrid}>
                <div className={styles.datetimeItem}>
                  <IoCalendarOutline className={styles.datetimeIcon} />
                  <div>
                    <strong>{event.date}</strong>
                    <span>{event.daysWeek}</span>
                  </div>
                </div>
                <div className={styles.datetimeItem}>
                  <IoTimeOutline className={styles.datetimeIcon} />
                  <div>
                    <strong>{event.time}</strong>
                    <span>Credenciamento a partir das 7h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GridOverlay />
    </section>
  );
}
