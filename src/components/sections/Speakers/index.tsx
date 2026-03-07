import { useState } from "react";
import styles from "./Speakers.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import GridOverlay from "../../shared/GridOverlay";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import pauloLiberalesso from "../../../assets/imgs/speakers/paulo-liberalesso.png";
import pauloLiberalessoVideo from "../../../assets/videos/paulo-liberalesso.mp4";

import nadiaBossaVideo from "../../../assets/videos/nadia-bossa.mp4";

import gabrielaFerro from "../../../assets/imgs/speakers/gabriela-ferro.jpeg";
import gabrielaFerroVideo from "../../../assets/videos/gabriela-ferro.mp4";

import kaduLins from "../../../assets/imgs/speakers/kadu-links.png";
import kaduLinsVideo from "../../../assets/videos/kadu-lins.mp4";

import carolineBitar from "../../../assets/imgs/speakers/caroline-bitar.jpeg";
import carolineBitarVideo from "../../../assets/videos/caroline-bitar.mp4";

import jvDePaiva from "../../../assets/imgs/speakers/jv-paiva.png";
import jvDePaivaVideo from "../../../assets/videos/jv-paiva.mp4";

import fernandaBande from "../../../assets/imgs/speakers/fernanda-bande.png";
import fernandaBandeVideo from "../../../assets/videos/fernanda-bande.mp4";

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
    id: "paulo-liberalesso",
    name: "Dr. Paulo Liberalesso",
    role: "Médico Neuropediatra",
    bio: " Médico Neuropediatra, possui mestrado em Neurociências, doutorado em Distúrbios da Comunicação Humana, pós-graduado em Neurofisiologia, pós-graduado em Análise do Comportamento, e é diretor científico do Grupo IEPSIS.",
    photo: pauloLiberalesso,
    expertise: ["Neurocientista", "Intervenção Precoce"],
    videoUrl: pauloLiberalessoVideo,
    social: {
      instagram: "https://www.instagram.com/pauloliberalesso/",
    },
  },
  {
    id: "jv-de-paiva",
    name: "João Vitor de Paiva Bittencourt ",
    role: "Educador Físico",
    bio: `João Vitor tem síndrome de down e  faz palestras sobre preconceito e inclusão
Ele é influenciador digital (@jvdepaiva), com mais de 1 milhão de seguidores no Instagram e tik tok, Jovem Ativista do Unicef (um dos cinco no País a integrar o grupo de 100 lideranças jovens globais do Fundo no planeta), ator (protagonista no filme Colegas e o herdeiro e atuou na minissérie E, agora, quem fica com a mamãe?, no SBT) , modelo, primeiro aluno com T21 a se formar no curso de Educação Física da PUC-Goiás, eleito o Melhor Influenciador brasileiro na categoria Diversidade e Inclusão 2024 no prêmio ibest (considerado o Oscar da internet brasileira) e faz um trabalho bacana pelos direitos das pessoas com deficiência no Brasil
`,
    photo: jvDePaiva,
    expertise: ["Palestrante"],
    videoUrl: jvDePaivaVideo,
    social: {
      instagram: "https://www.instagram.com/jvdepaiva/",
    },
  },
  {
    id: "nadia-bossa",
    name: "Dra. Nádia Bossa",
    role: "Psicóloga e Pedagoga",
    bio: `Dra. Nádia Bossa é psicóloga e pedagoga, pós-doutora em Neurologia Cognitiva pela Faculdade de Medicina da Universidade de São Paulo, Departamento de Neurologia. É doutora em Psicologia pela Universidade de São Paulo e mestre em Psicologia da Educação pela Pontifícia Universidade Católica de São Paulo.
Possui especialização em Psicopedagogia pela PUC-SP e em Neuropsicologia pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.
Atua como professora universitária, pesquisadora e clínica, com vasta experiência em avaliação e intervenção psicológica, psicopedagogia e neuropsicológica, especialmente nas áreas do desenvolvimento humano, aprendizagem e funcionamento cognitivo. Ministrou aulas em diversas instituições de ensino superior no Brasil, entre elas a PUC-SP. Atualmente, é professora do Mestrado em Neurociências da Florida Christian University, nos Estados Unidos.
É autora de diversos livros nas áreas da saúde, educação, psicologia e neurociências, além de possuir publicações de artigos científicos em periódicos especializados, com produção voltada à interface entre neurociências, aprendizagem e cognição.
`,
    photo:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/l3eoc16g9eu8cul5fm1amv209a._SY450_CR0%2C0%2C450%2C450_.jpg",
    expertise: ["pós-doutora em Neurologia"],
    videoUrl: nadiaBossaVideo,
    social: {
      instagram:
        "https://www.instagram.com/invites/contact/?i=1cpef618n7ccy&utm_content=a2s5p1",
      website: "www.nadiabossa.com",
    },
  },
  {
    id: "fernanda-bande",
    name: "Fernanda Bande",
    role: "Apresentadora e influenciadora digita",
    bio: `Apresentadora, empreendedora e uma das vozes mais autênticas da maternidade atípica no Brasil. Mãe do Marcelo, diagnosticado com autismo ainda na infância, Fernanda utilizou sua visibilidade nacional no BBB 24 para humanizar os desafios e as vitórias do Transtorno do Espectro Autista (TEA). Hoje, ela compartilha sua trajetória de "choque de realidade" e aprendizado, defendendo que a informação é a principal ferramenta para derrubar preconceitos e garantir o acolhimento necessário para as famílias e crianças neurodivergentes.`,
    photo: fernandaBande,
    expertise: ["Mãe Atípica", "Ex BBB"],
    videoUrl: fernandaBandeVideo,
    social: {
      instagram:
        "https://www.instagram.com/nandabande?igsh=MTV4cTExYzFhN25wcA%3D%3D",
      facebook: " https://www.facebook.com/profile.php?id=61556441443406",
    },
  },
  {
    id: "gabriela-ferro",
    name: "Gabriela Ferro Aguiar",
    role: "Terapeuta Ocupacional",
    bio: `Dou Palestras, escrevo & pesquiso sobre a vida.
Expertise: terapeuta ocupacional com foco em desenvolvimento infantil,seletividade alimentar, pós-graduado em transtorno do espectro autista, e reabilitação Neuro pediátrica, e certificado em integração sensorial pela US C - universidade da Califórnia`,
    photo: gabrielaFerro,
    expertise: ["Neuropediatria", "Intervenção Precoce"],
    videoUrl: gabrielaFerroVideo,
    social: {
      instagram: "https://www.instagram.com/simplifica.to/",
    },
  },
  {
    id: "kadu-lins",
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
    id: "caroline-bitar",
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
