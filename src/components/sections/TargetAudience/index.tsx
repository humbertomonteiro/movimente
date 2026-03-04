import styles from "./TargetAudience.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import {
  FaEye,
  FaExchangeAlt,
  FaGraduationCap,
  FaUserTie,
  FaTools,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";

const benefits = [
  {
    title: "Visibilidade que gera impacto",
    icon: <FaEye />,
    description:
      "Um espaço estratégico para expositores e palestrantes apresentarem ideias, soluções e pesquisas a um público altamente engajado e qualificado.",
  },
  {
    title: "Conexões que transformam",
    icon: <FaExchangeAlt />,
    description:
      "Profissionais, líderes e entusiastas do neurodesenvolvimento reunidos para trocar experiências, fortalecer parcerias e criar novas oportunidades reais.",
  },
  {
    title: "Conteúdo com base científica",
    icon: <FaGraduationCap />,
    description:
      "Atualizações fundamentadas em evidências de alto nível, estratégias aplicáveis e conhecimento que realmente transforma a prática profissional.",
  },
  {
    title: "Crescimento profissional e pessoal",
    icon: <FaUserTie />,
    description:
      "Amplie sua visão, desenvolva novas competências e esteja preparado para atuar com mais segurança, inovação e propósito.",
  },
  {
    title: "Acesso a recursos estratégicos",
    icon: <FaTools />,
    description:
      "Conheça serviços, tecnologias e iniciativas que ampliam sua rede de apoio e potencializam seus resultados.",
  },
  {
    title: "Atualização com grandes especialistas",
    icon: <FaBrain />,
    description:
      "Especialistas de referência nacional e internacional compartilham descobertas recentes e perspectivas que moldam o futuro do neurodesenvolvimento.",
  },
  {
    title: "Compromisso com a transformação social",
    icon: <FaHandsHelping />,
    description:
      "Cada participação contribui com iniciativas sociais relevantes, fortalecendo o impacto do evento para além do congresso.",
  },
];

export default function oportunidades() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.backgroundOverlay}></div>
      <h2 className={styles.title} data-aos="zoom-in">
        Oportunidades
      </h2>

      <p className={styles.subtitle} data-aos="zoom-in">
        Esse Congresso é o maior espaço de crescimento, aprendizado e conexões
        sobre transtornos do neurodesenvolvimento do Norte e Nordeste.
      </p>

      <div className={styles.boxes} data-aos="zoom-in" data-delay="200">
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              // @0.00
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              // @0.75
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className={styles.mySwiper}
        >
          {benefits.map((benefit) => (
            <SwiperSlide key={benefit.title}>
              <div className={styles.box}>
                <div className={styles.iconContainer}>{benefit.icon}</div>
                <h4 className={styles.title}>{benefit.title}</h4>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
