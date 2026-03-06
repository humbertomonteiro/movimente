import { useState } from "react";
import styles from "./Speakers.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import GridOverlay from "../../shared/GridOverlay";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import pauloLiberalesso from "../../../assets/imgs/speakers/paulo-liberalesso.png";
import pauloLiberalessoVideo from "../../../assets/videos/paulo-liberalesso.mp4";

import palestrante1 from "../../../assets/imgs/speakers/palestrante.jpeg";

import kaduLins from "../../../assets/imgs/speakers/kadu-links.png";
import kaduLinsVideo from "../../../assets/videos/kadu-lins.mp4";

import carolineBitar from "../../../assets/imgs/speakers/caroline-bitar.jpeg";
import carolineBitarVideo from "../../../assets/videos/caroline-bitar.mp4";

import jvDePaiva from "../../../assets/imgs/speakers/jv-paiva.png";
import jvDePaivaVideo from "../../../assets/videos/jv-paiva.mp4";

// React Icons para redes sociais
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaFacebook,
} from "react-icons/fa";
import { IoClose, IoPlay } from "react-icons/io5";

interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  expertise: string[];
  videoUrl?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
    facebook?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "0",
    name: "Dr. Paulo Liberalesso",
    role: "Médico Neuropediatra",
    bio: " e Médico Neuropediatra, possui mestrado em Neurociências, doutorado em Distúrbios da Comunicação Humana, pós-graduado em Neurofisiologia, pós-graduado em Análise do Comportamento, e é diretor científico do Grupo IEPSIS.",
    photo: pauloLiberalesso,
    expertise: ["Neurocientista", "Intervenção Precoce"],
    videoUrl: pauloLiberalessoVideo,
    social: {
      instagram: "https://www.instagram.com/pauloliberalesso/",
    },
  },
  {
    id: "4",
    name: "João Vitor de Paiva Bittencourt",
    role: "Educador Físico",
    bio: `Ele é influenciador digital (@jvdepaiva), com mais de 1 milhão de seguidores no Instagram e tik tok, Jovem Ativista do Unicef (um dos cinco no País a integrar o grupo de 100 lideranças jovens globais do Fundo no planeta), ator (protagonista no filme Colegas e o herdeiro e atuou na minissérie E, agora, quem fica com a mamãe?, no SBT) , modelo, primeiro aluno com T21 a se formar no curso de Educação Física da PUC-Goiás, eleito o Melhor Influenciador brasileiro na categoria Diversidade e Inclusão 2024 no prêmio ibest (considerado o Oscar da internet brasileira) e faz um trabalho bacana pelos direitos das pessoas com deficiência no Brasil
Expertise: ações para inclusão, palestrante`,
    photo: jvDePaiva,
    expertise: ["Palestrante"],
    videoUrl: jvDePaivaVideo,
    social: {
      instagram: "https://www.instagram.com/jvdepaiva/",
    },
  },
  {
    id: "1",
    name: "Dra. Ana Silva",
    role: "Neuropediatra",
    bio: "Especialista em desenvolvimento infantil e autismo com 15 anos de experiência. Palestrante internacional e autora de livros sobre intervenção precoce.",
    photo: palestrante1,
    expertise: ["Neuropediatria", "Intervenção Precoce"],
    social: {},
  },
  {
    id: "2",
    name: "Kadu Lins",
    role: "Educador Físico e fundador do Instituto do Autismo",
    bio: "Kadu Lins é formado em Educação Física e Psicomotricista. Mestrando em ciência do movimento, com estudos em desenvolvimento motor infantil. Formações acadêmicas internacionais nos Estados Unidos e na Austrália. Fundador do Instituto do Autismo. Há mais de 10 anos, dedica-se a transformar a vida de famílias atípicas, promovendo conhecimento, cuidado e compreensão sobre o autismo e a inclusão, atendendo diariamente mais de 1200 famílias e lutando para terem uma melhor qualidade de vida.",
    photo: kaduLins,
    expertise: ["Psicomotricidade ", "ABA"],
    videoUrl: kaduLinsVideo,
    social: {
      website: "https://kadulins.com",
      instagram: "https://www.instagram.com/kadu.lins/",
      linkedin: "https://br.linkedin.com/in/kadu-lins-44417417b",
      facebook: "https://www.facebook.com/autismoparafamilias",
    },
  },
  {
    id: "3",
    name: "Caroline Bitar da Cunha Olegário",
    role: "Psicóloga",
    bio: 'Carol Bitar é psicóloga (CRP 03/14361), especialista em Neurociência e Comportamento, autora do livro "Socorro, tenho filhos" e mãe. Mais de 10 anos de experiência em atendimentos clínicos na abordagem da Terapia Cognitivo-comportamental e com prática baseada em evidência. Além disso, ministra seus cursos com foco no TDAH na redução de sintomas e prejuízos do transtorno.',
    photo: carolineBitar,
    expertise: ["Especialista em Comportamento"],
    videoUrl: carolineBitarVideo,
    social: {
      website: "https://carolbitar.com.br",
      instagram: "https://www.instagram.com/carolbitar_/",
    },
  },
];

export default function Speakers() {
  // ✅ Instância direta do Swiper — evita o bug de pular slides
  // causado pelo módulo Navigation tentando encontrar botões via seletor CSS de módulos
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
      case "facebook":
        return <FaFacebook />;
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

        {/* Botões chamam slidePrev/slideNext direto na instância */}
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

        {/* Swiper sem o módulo Navigation — os botões acima já controlam tudo */}
        <Swiper
          modules={[A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={setSwiperInstance}
          className={styles.swiper}
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  {/* Avatar */}
                  <div className={styles.avatarSection}>
                    <div className={styles.avatarContainer}>
                      <button
                        className={`${styles.avatarButton} ${speaker.videoUrl ? styles.hasVideo : ""}`}
                        onClick={() => openVideoModal(speaker)}
                        aria-label={`Ver vídeo de ${speaker.name}`}
                        disabled={!speaker.videoUrl}
                      >
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

                  {/* Conteúdo */}
                  <div className={styles.content}>
                    <h3 className={styles.name}>{speaker.name}</h3>
                    <p className={styles.role}>{speaker.role}</p>
                    <p className={styles.bio}>{speaker.bio}</p>

                    <div className={styles.expertise}>
                      {speaker.expertise.map((skill, index) => (
                        <span key={index} className={styles.tag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Footer — só renderiza se tiver ao menos um link */}
                  {speaker.social &&
                    Object.values(speaker.social).some(Boolean) && (
                      <div className={styles.socialFooter}>
                        {Object.entries(speaker.social).map(
                          ([platform, url]) =>
                            url ? (
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
                            ) : null,
                        )}
                      </div>
                    )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className={styles.ctaContainer} data-aos="fade-up">
          <ButtonCTA link="#tickets" text="Garantir Vaga" />
        </div>
      </div>

      {/* Modal de Vídeo — estilo Instagram Stories */}
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
