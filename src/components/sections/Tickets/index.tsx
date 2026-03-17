import styles from "./Tickets.module.css";
import { FaCheck, FaTicketAlt, FaPeopleCarry, FaUserAlt } from "react-icons/fa";
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
      socialNote: null as string | null,
      features: [
        "Acesso aos dois dias do congresso com programação imperdível;",
        "Palestras baseadas em evidências com palestrantes renomados;",
        "Kit congressista exclusivo, entregue no credenciamento, com matérias de brinde;",
        "Certificado de participação digital, enviado através do e-mail do participante;",
        "Interprete de libras",
        "Área de expositores e patrocinadores, com estandes e produtos inovadores;",
        "Networking e conexões reais, com profissionais, famílias especialistas de todo o Brasil;",
        "Tudo isso acontecerá no Multi Center SEBRAE, em São Luís do Maranhão, um dos mais importantes complexos de eventos do Estado, referência na realização de congressos, feiras e grandes encontros institucionais.",
      ],
      link: event.tickets.linkTicketAll,
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "social",
      name: "SOCIAL",
      fullPrice: event.tickets.valueDefault,
      installmentPrice: event.tickets.valueSocial,
      icon: <FaPeopleCarry className={styles.ticketIcon} />,
      socialNote: "🌾 Na entrada, traga 1kg de alimento não perecível.",
      features: [
        "Acesso aos dois dias do congresso com programação imperdível;",
        "Palestras baseadas em evidências com palestrantes renomados;",
        "Kit congressista exclusivo, entregue no credenciamento, com matérias de brinde;",
        "Certificado de participação digital, enviado através do e-mail do participante;",
        "Interprete de libras",
        "Área de expositores e patrocinadores, com estandes e produtos inovadores;",
        "Networking e conexões reais, com profissionais, famílias especialistas de todo o Brasil;",
        "Tudo isso acontecerá no Multi Center SEBRAE, em São Luís do Maranhão, um dos mais importantes complexos de eventos do Estado, referência na realização de congressos, feiras e grandes encontros institucionais.",
      ],
      link: event.tickets.linkTicketSocial,
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
    {
      id: "meia",
      name: "MEIA-ENTRADA",
      fullPrice: event.tickets.valueDefault / 2,
      installmentPrice: event.tickets.valueHalf,
      icon: <FaUserAlt className={styles.ticketIcon} />,
      socialNote: null as string | null,
      features: [
        "Acesso aos dois dias do congresso com programação imperdível;",
        "Palestras baseadas em evidências com palestrantes renomados;",
        "Kit congressista exclusivo, entregue no credenciamento, com matérias de brinde;",
        "Certificado de participação digital, enviado através do e-mail do participante;",
        "Interprete de libras",
        "Área de expositores e patrocinadores, com estandes e produtos inovadores;",
        "Networking e conexões reais, com profissionais, famílias especialistas de todo o Brasil;",
        "Tudo isso acontecerá no Multi Center SEBRAE, em São Luís do Maranhão, um dos mais importantes complexos de eventos do Estado, referência na realização de congressos, feiras e grandes encontros institucionais.",
      ],
      link: event.tickets.linkTicketHalf,
      buttonText: "GARANTIR AGORA",
      disabled: false,
    },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getDiscountPercent = (fullPrice: number, salePrice: number) => {
    if (fullPrice <= salePrice) return null;
    const percent = Math.round(((fullPrice - salePrice) / fullPrice) * 100);
    return percent > 0 ? percent : null;
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
            const discountPercent = getDiscountPercent(
              ticket.fullPrice,
              ticket.installmentPrice
            );

            return (
              <div
                key={ticket.id}
                className={styles.card}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Badge de desconto */}
                {discountPercent && (
                  <span className={styles.discountBadge}>
                    -{discountPercent}% OFF
                  </span>
                )}

                {/* Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{ticket.icon}</div>
                  <h3 className={styles.cardName}>{ticket.name}</h3>
                </div>

                {/* Preço com parcela em destaque */}
                <div className={styles.priceBox}>
                  <span className={styles.fullPrice}>
                    De R$ {formatPrice(ticket.fullPrice)}
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

                {/* Nota social (alimento) */}
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

                {/* Botão sempre visível */}
                <div className={styles.buttonWrapper}>
                  <ButtonCTA
                    link={ticket.link}
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
    </section>
  );
}
