import { useState } from "react";
import styles from "./Speakers.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import GridOverlay from "../../shared/GridOverlay";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Imagens
import palestrante from "../../../assets/imgs/speakers/palestrante.jpeg";

// React Icons para redes sociais
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
  expertise: string[];
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
    photo: palestrante,
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
    name: "Dr. Carlos Mendes",
    role: "Psicólogo",
    company: "Clínica ABA",
    bio: "Especialista em Análise do Comportamento Aplicada (ABA) com foco em autismo. Coordenador de equipe multidisciplinar há 10 anos.",
    photo: palestrante,
    expertise: ["Psicologia", "ABA"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "3",
    name: "Maria Oliveira",
    role: "Fonoaudióloga",
    company: "Centro de Reabilitação",
    bio: "Especialista em comunicação alternativa e augmentativa. Mestre em Linguagem e Desenvolvimento pela USP.",
    photo: palestrante,
    expertise: ["Fonoaudiologia", "Comunicação Alternativa"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    id: "4",
    name: "Pedro Santos",
    role: "Terapeuta Ocupacional",
    company: "Instituto de Desenvolvimento",
    bio: "Especialista em integração sensorial e atividades de vida diária para pessoas com TEA. Formação internacional em sensory integration.",
    photo: palestrante,
    expertise: ["Terapia Ocupacional", "Integração Sensorial"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "5",
    name: "Lucia Ferreira",
    role: "Psicopedagoga",
    company: "Escola Inclusiva",
    bio: "Especialista em inclusão escolar e dificuldades de aprendizagem. Atua há 12 anos com mediação escolar para crianças com autismo.",
    photo: palestrante,
    expertise: ["Psicopedagogia", "Inclusão Escolar"],
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "6",
    name: "Roberto Alves",
    role: "Advogado",
    company: "Direitos da Pessoa com Deficiência",
    bio: "Especialista em direitos das pessoas com autismo. Atua com ações judiciais para garantir acesso a tratamentos e educação inclusiva.",
    photo: palestrante,
    expertise: ["Direitos", "Legislação"],
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
];

const eventName = "Movimente";

export default function Speakers() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

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
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className={styles.avatar}
                        loading="lazy"
                      />
                      {eventName && (
                        <span className={styles.eventBadge}>{eventName}</span>
                      )}
                    </div>

                    {/* Social Links Overlay */}
                    {speaker.social && (
                      <div className={styles.socialOverlay}>
                        {Object.entries(speaker.social).map(
                          ([platform, url]) => (
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
                          ),
                        )}
                      </div>
                    )}
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        {/* <div className={styles.pagination}></div> */}

        {/* CTA Button */}
        <div className={styles.ctaContainer} data-aos="fade-up">
          <ButtonCTA link="#tickets" text="Garantir Vaga" />
        </div>
      </div>
    </section>
  );
}
