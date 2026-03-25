import styles from "./Tickets.module.css";
import { FaCheck, FaTicketAlt } from "react-icons/fa";
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
      name: "MOVEMENTE",
      fullPrice: 997,
      installmentPrice: event.tickets.valueMovemente,
      promoPrice: 398.5, // ← promoção primeiros 100 ingressos
      promoInstallments: 12, // ← parcelas da promo
      icon: <FaTicketAlt className={styles.ticketIcon} />,
      socialNote:
        "Para quem quer participar e absorver o conteúdo do congresso.",
      features: [
        "Acesso aos 2 dias de evento",
        "Participação em todas as palestras da programação",
        "Certificado digital enviado por e-mail",
        "Acesso à área de expositores",
        "Kit Congressista",
        "Lugar na plenária Movemente",
      ],
      link: "https://checkout2.bilheteriadigital.com/movemente-19-de-setembro",
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "conexao",
      name: "CONEXÃO",
      fullPrice: 1200,
      installmentPrice: event.tickets.valueConexao,
      icon: <IoPeople className={styles.ticketIcon} />,
      socialNote:
        "Para quem quer levar a experiência do congresso também no físico.",
      features: [
        "Acesso aos 2 dias de evento",
        "Participação em todas as palestras da programação",
        "Certificado digital enviado por e-mail",
        "Acesso à área de expositores",
        "Kit congressista",
        "Acesso à área de expositores",
        "Lugar na plenária Conexão",
      ],
      link: "https://checkout2.bilheteriadigital.com/movemente-19-de-setembro",
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "vip",
      name: "PROTAGONISMO",
      fullPrice: 2500,
      installmentPrice: event.tickets.valueVip,
      icon: <FaWebAwesome className={styles.ticketIcon} />,
      socialNote:
        "Para quem quer viver o congresso com mais acesso e proximidade.",
      features: [
        "Acesso aos 2 dias de evento",
        "Participação em todas as palestras da programação",
        "Certificado digital enviado por e-mail",
        "Acesso à área de expositores",
        "Kit do congressista exclusivo",
        "Acesso à área de expositores",
        "Networking qualificado com profissionais e convidados",
        "Experiência diferenciada durante o evento",
        "Acesso ao lounge VIP (Facilidade para tirar foto com os palestrantes)",
        "Lugar na plenária Vip",
      ],
      link: "https://checkout2.bilheteriadigital.com/movemente-19-de-setembro",
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
            const installmentValue = ticket.installmentPrice / 12;
            const promoInstallmentValue = ticket.promoPrice
              ? ticket.promoPrice / ticket.promoInstallments
              : null;

            return (
              <div
                key={ticket.id}
                className={styles.card}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Banner de promoção — apenas para o ticket com promoPrice */}
                {ticket.promoPrice && (
                  <div className={styles.promoBanner}>
                    Oferta para os primeiros 100 ingressos Ingresso Social: R$
                    398,50 + 1kg de Alimento
                  </div>
                )}

                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{ticket.icon}</div>
                  <h3 className={styles.cardName}>{ticket.name}</h3>
                </div>

                {/* Preço */}
                <div className={styles.priceBox}>
                  {ticket.promoPrice ? (
                    <>
                      {/* Preço original riscado */}
                      {/* <div className={styles.fullPriceAll}>
                      De{" "}
                        <span className={styles.fullPrice}>
                          R$ {formatPrice(ticket.fullPrice)}
                        </span>{" "}
                        por
                      Ingresso social: R$ 398,50 e 1kg de alimento
                      </div> */}

                      {/* Parcelas da promoção em destaque */}
                      <div className={styles.installmentHighlight}>
                        <span className={styles.installmentValue}>
                          <span className={styles.numberInstallments}>
                            {ticket.promoInstallments}x
                          </span>{" "}
                          R$ {formatPrice(promoInstallmentValue)}
                        </span>
                      </div>

                      <span className={styles.totalPrice}>
                        ou R$ {formatPrice(ticket.promoPrice)} à vista
                      </span>

                      {/* Preço normal após promo */}
                      <span className={styles.afterPromoNote}>
                        Após os 100 primeiros: 12x de R${" "}
                        {formatPrice(installmentValue)}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className={styles.fullPriceAll}>
                        De{" "}
                        <span className={styles.fullPrice}>
                          R$ {formatPrice(ticket.fullPrice)}
                        </span>{" "}
                        por
                      </div>

                      <div className={styles.installmentHighlight}>
                        <span className={styles.installmentValue}>
                          <span className={styles.numberInstallments}>12x</span>{" "}
                          R$ {formatPrice(installmentValue)}
                        </span>
                      </div>

                      <span className={styles.totalPrice}>
                        ou R$ {formatPrice(ticket.installmentPrice)} à vista
                      </span>
                    </>
                  )}
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
                    target="_blank"
                    link={ticket.link}
                    text={ticket.buttonText}
                    data-color="primary"
                    disabled={ticket.disabled}
                  />
                  <a
                    className={styles.linkTicktHalfPrice}
                    target="_blank"
                    href="https://checkout2.bilheteriadigital.com/movemente-19-de-setembro"
                  >
                    Adquirir Ingresso Meia
                  </a>
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
