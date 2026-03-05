import { useState } from "react";
import styles from "./Speakers.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import GridOverlay from "../../shared/GridOverlay";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import palestrante1 from "../../../assets/imgs/speakers/palestrante.jpeg";
import kaduLins from "../../../assets/imgs/speakers/kadu-links.png";
import kaduLinsVideo from "../../../assets/videos/kadu-lins.mp4";

// React Icons para redes sociais
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { IoClose, IoPlay } from "react-icons/io5";

interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
  expertise: string[];
  videoUrl?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Dra. Ana Silva",
    role: "Neuropediatra",
    company: "Hospital Infantil",
    bio: "Especialista em desenvolvimento infantil e autismo com 15 anos de experiência. Palestrante internacional e autora de livros sobre intervenção precoce.",
    photo: palestrante1,
    expertise: ["Neuropediatria", "Intervenção Precoce"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    id: "2",
    name: "Kadu Lins",
    role: "Educador Físico",
    company: "Clínica ABA",
    bio: "Referência em atividade física como ferramenta de desenvolvimento psicossocial para pessoas neuroatípicas. Possui mais de 10 anos de atuação na área.",
    photo: kaduLins,
    expertise: ["Psicomotricidade ", "ABA"],
    videoUrl: kaduLinsVideo,
    social: {
      website:
        "https://kadulins.com.br/links/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnF4sqHnSDG-grIvvyz7as6pTcKM8J-5cGzkmK1BAFNl59r_e-BHyZbiaZKGs_aem_AFg20jdydZRDqly__xKOrw",
      instagram: "https://www.instagram.com/kadu.lins/",
    },
  },
];

export default function Speakers() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeVideo, setActiveVideo] = useState<Speaker | null>(null);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <FaLinkedinIn />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "website":
        return <FaGlobe />;
      default:
        return null;
    }
  };

  const openVideoModal = (speaker: Speaker) => {
    if (speaker.videoUrl) {
      setActiveVideo(speaker);
      document.body.style.overflow = "hidden";
    }
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  };

  return (
    <section className={styles.section} id="speakers">
      <GridOverlay />
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.sphereTopLeft}></div>
      <div className={styles.sphereBottomRight}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="zoom-in">
          <h2 className={styles.title}>Palestrantes confirmados</h2>
          <p className={styles.subtitle}>Conheça nosso time de especialistas</p>
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigationButtons}>
          <button
            className={styles.navButton}
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Palestrante anterior"
          >
            ←
          </button>
          <button
            className={styles.navButton}
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Próximo palestrante"
          >
            →
          </button>
        </div>

        {/* Swiper Carrossel */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: `.${styles.navButton}:first-child`,
            nextEl: `.${styles.navButton}:last-child`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={setSwiperInstance}
          className={styles.swiper}
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  {/* Avatar Section */}
                  <div className={styles.avatarSection}>
                    <div className={styles.avatarContainer}>
                      {/* Avatar clicável para abrir vídeo */}
                      <button
                        className={`${styles.avatarButton} ${speaker.videoUrl ? styles.hasVideo : ""}`}
                        onClick={() => openVideoModal(speaker)}
                        aria-label={`Ver vídeo de ${speaker.name}`}
                        disabled={!speaker.videoUrl}
                      >
                        {/* Anel de gradiente estilo Instagram */}
                        {speaker.videoUrl && (
                          <span
                            className={styles.storyRing}
                            aria-hidden="true"
                          />
                        )}
                        <img
                          src={speaker.photo}
                          alt={speaker.name}
                          className={styles.avatar}
                          loading="lazy"
                        />
                        {speaker.videoUrl && (
                          <span className={styles.playHint} aria-hidden="true">
                            <IoPlay />
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.content}>
                    <h3 className={styles.name}>{speaker.name}</h3>
                    <p className={styles.role}>{speaker.role}</p>
                    <p className={styles.company}>{speaker.company}</p>

                    <p className={styles.bio}>{speaker.bio}</p>

                    {/* Expertise Tags */}
                    <div className={styles.expertise}>
                      {speaker.expertise.map((skill, index) => (
                        <span key={index} className={styles.tag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links — fixos no rodapé do card */}
                  {speaker.social && (
                    <div className={styles.socialFooter}>
                      {Object.entries(speaker.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`${platform} de ${speaker.name}`}
                        >
                          {getSocialIcon(platform)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className={styles.ctaContainer} data-aos="fade-up">
          <ButtonCTA link="#tickets" text="Garantir Vaga" />
        </div>
      </div>

      {/* Modal de Vídeo — estilo Instagram */}
      {activeVideo && (
        <div
          className={styles.modalOverlay}
          onClick={closeVideoModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Vídeo de ${activeVideo.name}`}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do modal */}
            <div className={styles.modalHeader}>
              <div className={styles.modalSpeakerInfo}>
                <img
                  src={activeVideo.photo}
                  alt={activeVideo.name}
                  className={styles.modalAvatar}
                />
                <div>
                  <p className={styles.modalName}>{activeVideo.name}</p>
                  <p className={styles.modalRole}>{activeVideo.role}</p>
                </div>
              </div>
              <button
                className={styles.closeButton}
                onClick={closeVideoModal}
                aria-label="Fechar vídeo"
              >
                <IoClose />
              </button>
            </div>

            {/* Vídeo */}
            <div className={styles.videoWrapper}>
              <video
                key={activeVideo.videoUrl}
                className={styles.videoPlayer}
                src={activeVideo.videoUrl}
                autoPlay
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
