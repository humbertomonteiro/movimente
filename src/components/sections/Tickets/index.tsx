import styles from "./Tickets.module.css";
import { FaCheck, FaUsers, FaTicketAlt } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import ButtonCTA from "../../shared/ButtonCTA";
import GridOverlay from "../../shared/GridOverlay";

import { useEvent } from "../../../contexts/EventContexts";

export default function Tickets() {
  const { events } = useEvent();

  const event = events.filter((e) => e.id === "movemente2026")[0];

  const tickets = [
    {
      id: "inteiro",
      name: "INGRESSO INTEIRO",
      fullPrice: event.tickets.valueDefault,
      installmentPrice: event.tickets.valueAll,
      icon: <FaTicketAlt className={styles.ticketIcon} />,
      features: [
        "Acesso a todas as palestras dos 2 dias",
        "Certificado de 20h",
        "Palestrantes nacionais e internacionais de referência, trazendo conteúdos respaldados por pesquisas científicas de nível 1A e 1B.",
        "Estrutura ampla, moderna, climatizada e 100% acessível",
      ],
      link: event.tickets.linkTicketAll,
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "meia",
      name: "MEIA-ENTRADA",
      fullPrice: event.tickets.valueDefault,
      installmentPrice: event.tickets.valueHalf,
      icon: <GiBrain className={styles.ticketIcon} />,
      features: [
        "Acesso a todas as palestras dos 2 dias",
        "Certificado de 20h",
        "Benefício para estudantes e professores",
        "Palestrantes nacionais e internacionais de referência, trazendo conteúdos respaldados por pesquisas científicas de nível 1A e 1B.",
        "Estrutura ampla, moderna, climatizada e 100% acessível",
      ],
      link: event.tickets.linkTicketHalf,
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "premiuM",
      name: "INGRESSO PREMIUM",
      fullPrice: event.tickets.valueDefault,
      installmentPrice: event.tickets.valuePremium,
      icon: <FaUsers className={styles.ticketIcon} />,
      features: [
        "Acesso a todas as palestras dos 2 dias",
        "Certificado de 20h",
        "Sessão exclusiva de Q&A",
        "Suporte prioritário",
        "Palestrantes nacionais e internacionais de referência, trazendo conteúdos respaldados por pesquisas científicas de nível 1A e 1B.",
        "Estrutura ampla, moderna, climatizada e 100% acessível",
      ],
      link: event.tickets.linkTicketGroup,
      buttonText: "EM BREVE",
      disabled: true,
    },
  ];

  const formatPrice = (price: number) => {
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
            const installmentValue = ticket.installmentPrice / 12;

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

                {/* Preço com parcela em destaque */}
                <div className={styles.priceBox}>
                  <span className={styles.fullPrice}>
                    De R$ {formatPrice(ticket.fullPrice)} por apenas
                  </span>

                  <div className={styles.installmentHighlight}>
                    <span className={styles.installmentValue}>
                      <span className={styles.numberInstallments}>12x</span> R${" "}
                      {formatPrice(installmentValue)}
                    </span>
                  </div>

                  <span className={styles.totalPrice}>
                    ou R$ {formatPrice(ticket.installmentPrice)} à vista
                  </span>
                </div>

                {/* Features */}
                <ul className={styles.featuresList}>
                  {ticket.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FaCheck className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão sempre visível */}
                <div className={styles.buttonWrapper}>
                  <ButtonCTA
                    // link={ticket.link}
                    // text="GARANTIR VAGA"
                    text={ticket.buttonText}
                    data-color="primary"
                    disabled={ticket.disabled}
                  />
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

      {/* <div className={styles.gridOverlay}></div> */}
    </section>
  );
}
