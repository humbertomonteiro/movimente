import { useState } from "react";
import styles from "./Testimonials.module.css";
import { BsStars } from "react-icons/bs";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

// Componentes internos
import TestimonialCard from "./TestimonialCard";

// Tipos
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  photo: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
  video?: boolean;
  location?: string;
  eventYear?: string;
  tags?: string[];
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

// Dados mockados
const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Clara Silva",
    role: "Mãe do João (6 anos)",
    photo: "https://i.pravatar.cc/300?img=1",
    content:
      "O Movimente mudou completamente nossa perspectiva sobre o autismo. As palestras sobre intervenção precoce foram fundamentais para o desenvolvimento do meu filho. Saímos de lá com um plano de ação concreto e muito mais esperança.",
    rating: 5,
    date: "15 de março, 2024",
    verified: true,
    location: "São Luís - MA",
    eventYear: "2024",
    tags: ["Mãe", "Intervenção Precoce"],
    video: true,
  },
  {
    id: "2",
    name: "Dr. Roberto Mendes",
    role: "Neuropediatra",
    photo: "https://i.pravatar.cc/300?img=2",
    content:
      "Como profissional da área, fiquei impressionado com a qualidade do conteúdo e a organização do evento. A troca com outros especialistas e famílias foi enriquecedora.",
    rating: 5,
    date: "20 de março, 2024",
    verified: true,
    location: "Teresina - PI",
    eventYear: "2024",
    tags: ["Profissional", "Medicina"],
  },
  {
    id: "3",
    name: "Ana Beatriz Oliveira",
    role: "Mãe da Sofia (4 anos)",
    photo: "https://i.pravatar.cc/300?img=3",
    content:
      "Finalmente um evento que acolhe as famílias de verdade! As oficinas práticas e o contato com outras mães me fizeram sentir menos sozinha nessa jornada.",
    rating: 4.5,
    date: "10 de março, 2024",
    verified: true,
    location: "Imperatriz - MA",
    eventYear: "2024",
    tags: ["Mãe", "Acolhimento"],
  },
  {
    id: "4",
    name: "Patrícia Santos",
    role: "Psicóloga - ABA",
    photo: "https://i.pravatar.cc/300?img=4",
    content:
      "A abordagem multidisciplinar do Movimente é seu maior diferencial. Consegui atualizar meus conhecimentos em ABA, ao mesmo tempo que troquei experiências com outros profissionais.",
    rating: 5,
    date: "5 de março, 2024",
    verified: true,
    location: "São Luís - MA",
    eventYear: "2024",
    tags: ["Psicóloga", "ABA"],
  },
  {
    id: "5",
    name: "Carlos Eduardo",
    role: "Pai do Pedro (8 anos)",
    photo: "https://i.pravatar.cc/300?img=5",
    content:
      "Como pai, muitas vezes me sentia perdido sobre como ajudar meu filho. As palestras sobre inclusão escolar e direitos foram um divisor de águas.",
    rating: 5,
    date: "18 de março, 2024",
    verified: true,
    location: "Caxias - MA",
    eventYear: "2024",
    tags: ["Pai", "Inclusão"],
  },
  {
    id: "6",
    name: "Dra. Juliana Costa",
    role: "Fonoaudióloga",
    photo: "https://i.pravatar.cc/300?img=6",
    content:
      "Evento incrível! As atualizações em comunicação alternativa apresentadas aqui já estou aplicando no consultório.",
    rating: 5,
    date: "12 de março, 2024",
    verified: true,
    location: "São Luís - MA",
    eventYear: "2024",
    tags: ["Fonoaudiologia", "Comunicação"],
  },
];

export default function TestimonialsSection({
  title = "O que estão falando do",
  subtitle = "Depoimentos de famílias e profissionais que já participaram do Movimente",
  testimonials = mockTestimonials,
}: TestimonialsSectionProps) {
  // ✅ FIX: instância direta — sem módulo Navigation para evitar o bug de pular slides
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className={styles.section}>
      <div className={styles.shapeTop}></div>
      <div className={styles.shapeBottom}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <span className={styles.badge}>
            <BsStars className={styles.badgeIcon} />
            Depoimentos
          </span>
          <h2 className={styles.title}>
            {title} <span className={styles.titleHighlight}>Movimente</span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Swiper Carrossel */}
        <div
          className={styles.carouselWrapper}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Botões chamam slidePrev/slideNext direto na instância */}
          <div className={styles.navigationButtons}>
            <button
              className={styles.navButton}
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Depoimento anterior"
            >
              ←
            </button>
            <button
              className={styles.navButton}
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Próximo depoimento"
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
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Container da paginação */}
          <div className={styles.pagination}></div>
        </div>
      </div>
    </section>
  );
}
