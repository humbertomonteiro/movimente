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

// import hotelImage from "../../../assets/imgs/location/hotel-legal.jpg";
// import mapImage from "../../../assets/imgs/location/map.jpg";
const hotelImage =
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=900&h=500&s=1";
const mapImage =
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=900&h=500&s=1";

export default function Location() {
  const handleCopyAddress = () => {
    const address =
      "Av. dos Holandeses, 123 - Ponta d'Areia, São Luís - MA, 65075-480";
    navigator.clipboard.writeText(address);
    alert("Endereço copiado!");
  };

  const openMaps = () => {
    const url =
      "https://maps.google.com/?q=Av.+dos+Holandeses,+123+-+Ponta+d'Areia,+São+Luís+-+MA";
    window.open(url, "_blank");
  };

  const openWaze = () => {
    const url = "https://waze.com/ul?ll=-2.4875,-44.2567&navigate=yes";
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
                <img
                  src={hotelImage}
                  alt="Hotel Legal - Fachada"
                  className={styles.hotelImage}
                  loading="lazy"
                />
                <div className={styles.imageBadge}>
                  <HiOutlineBuildingOffice />
                  <span>Hotel Legal</span>
                </div>
              </div>
              <div className={styles.mapImage}>
                <img
                  src={mapImage}
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
              <p className={styles.address}>
                Av. dos Holandeses, 123
                <br />
                Ponta d'Areia, São Luís - MA
                <br />
                CEP: 65075-480
              </p>
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
                    <strong>13 e 14 de Junho</strong>
                    <span>Sexta e Sábado</span>
                  </div>
                </div>
                <div className={styles.datetimeItem}>
                  <IoTimeOutline className={styles.datetimeIcon} />
                  <div>
                    <strong>8h às 18h</strong>
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
