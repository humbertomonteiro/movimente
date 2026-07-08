import styles from "./Tickets.module.css";
import { FaCheck, FaCreditCard, FaTicketAlt } from "react-icons/fa";
import { FaWebAwesome } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import ButtonCTA from "../../shared/ButtonCTA";
import GridOverlay from "../../shared/GridOverlay";

import { useEvent } from "../../../contexts/EventContexts";

export default function Tickets() {
  const { events } = useEvent();

  const event = events.filter((e) => e.id === "movemente2026")[0];

  const tickets = [
    {
      id: "movemente",
      name: "MOVIMENTE",
      fullPrice: event.tickets.valueMovemente,
      installmentPrice: event.tickets.valueMovemente,
      icon: <FaTicketAlt className={styles.ticketIcon} />,
      socialNote:
        "Ideal para quem deseja viver a experiência completa do congresso.",
      features: [
        "Acesso aos 2 dias de evento",
        "Participação em toda a programação de palestras",
        "Certificado digital de participação",
        "Acesso à área de expositores",
        "Kit Congressista",
      ],
      link: "https://www.sympla.com.br/movemente2026",
      linkHalfTicket: "https://www.sympla.com.br/movemente2026",
      halfPrice: event.tickets.valueHalf,
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "social",
      name: "MOVIMENTE SOCIAL",
      fullPrice: event.tickets.valueSocial,
      installmentPrice: event.tickets.valueSocial,
      icon: <IoPeople className={styles.ticketIcon} />,
      socialNote:
        "Ingresso social: inclui doação obrigatória de 1kg de alimento não perecível na entrada.",
      features: [
        "Acesso aos 2 dias de evento",
        "Participação em toda a programação de palestras",
        "Certificado digital de participação",
        "Acesso à área de expositores",
        "Kit Congressista",
      ],
      link: "https://www.sympla.com.br/movemente2026",
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "vip",
      name: "VIP",
      fullPrice: event.tickets.valueVip,
      installmentPrice: event.tickets.valueVip,
      icon: <FaWebAwesome className={styles.ticketIcon} />,
      socialNote:
        "Para quem deseja viver uma experiência exclusiva, com mais conforto, proximidade e benefícios.",
      features: [
        "Acesso aos 2 dias de evento",
        "Credenciamento exclusivo",
        "Assentos nas primeiras fileiras, próximos ao palco",
        "Participação em toda a programação de palestras",
        "Certificado digital de participação",
        "Kit Congressista VIP com brindes exclusivos",
        "Acesso à área de expositores",
        "Networking qualificado com palestrantes, profissionais e convidados",
        "Acesso ao Lounge VIP (área de descanso, carregadores, água, café e coffee break nos dois dias)",
        "Sessão de fotos com os palestrantes",
      ],
      link: "https://www.sympla.com.br/movemente2026",
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
  ];

  const formatPrice = (price: any) => {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className={styles.section} id="tickets">
      <GridOverlay />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="zoom-in">
          <span className={styles.tag}>INGRESSOS</span>
          <h2 className={styles.title}>Escolha sua melhor opção</h2>
          <p className={styles.subtitle}>
            Garanta sua vaga no maior congresso sobre autismo do Norte e
            Nordeste
          </p>
        </div>

        {/* Grid de planos */}
        <div className={styles.grid}>
          {tickets.map((ticket, index) => {
            return (
              <div
                key={ticket.id}
                className={styles.card}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{ticket.icon}</div>
                  <h3 className={styles.cardName}>{ticket.name}</h3>
                </div>

                {/* Preço */}
                <div className={styles.priceBox}>
                  <div className={styles.installmentHighlight}>
                    <span className={styles.installmentValue}>
                      R$ {formatPrice(ticket.installmentPrice)}
                    </span>
                  </div>

                  <div className={styles.installmentNote}>
                    <FaCreditCard className={styles.creditIcon} />
                    <span>Em até 12x no cartão com juros</span>
                  </div>
                </div>

                {/* Nota social */}
                {ticket.socialNote && (
                  <div className={styles.donationNote}>{ticket.socialNote}</div>
                )}

                {/* Features */}
                <ul className={styles.featuresList}>
                  {ticket.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <FaCheck className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão */}
                <div className={styles.buttonWrapper}>
                  <ButtonCTA
                    link={ticket.link}
                    text={ticket.buttonText}
                    data-color="primary"
                    disabled={ticket.disabled}
                    onClick={(e) => {
                      e.preventDefault();

                      const newTab = window.open("", "_blank");

                      window.fbq?.("track", "InitiateCheckout", {
                        content_name: ticket.name,
                        value: ticket.installmentPrice,
                        currency: "BRL",
                        content_ids: [ticket.id],
                        content_category: "ticket",
                      });

                      setTimeout(() => {
                        if (newTab) {
                          newTab.location.href = ticket.link;
                        }
                      }, 300);
                    }}
                  />
                  {"linkHalfTicket" in ticket && ticket.linkHalfTicket && (
                    <a
                      className={styles.linkTicktHalfPrice}
                      target="_blank"
                      href={ticket.linkHalfTicket}
                    >
                      Adquirir Ingresso Meia
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerNote}>
            *Meia-entrada válida para estudantes, professores e profissionais da
            rede pública.
            <a href="#faq" className={styles.footerLink}>
              {" "}
              Verifique os critérios
            </a>
          </p>
        </div>
      </div>

      <div className={`${styles.gradientSphere} ${styles.sphere1}`}></div>
      <div className={`${styles.gradientSphere} ${styles.sphere2}`}></div>
      <div className={`${styles.gradientSphere} ${styles.sphere3}`}></div>
    </section>
  );
}
