import styles from "./Tickets.module.css";
import { FaCheck, FaUsers, FaTicketAlt, FaCreditCard } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import AnimationCirclesBg from "../../shared/AnimationCirclesBg";
import ButtonCTA from "../../shared/ButtonCTA";

export default function Tickets() {
  const tickets = [
    {
      id: "inteiro",
      name: "INGRESSO INTEIRO",
      fullPrice: 397,
      installmentPrice: 297,
      icon: <FaTicketAlt className={styles.ticketIcon} />,
      features: [
        "Acesso a todas as palestras dos 3 dias",
        "Certificado de 40h",
        "Material digital completo",
        "Acesso vitalício às gravações",
        "Coffee break incluso",
        "Brinde exclusivo do evento",
      ],
    },
    {
      id: "meia",
      name: "MEIA-ENTRADA*",
      fullPrice: 247,
      installmentPrice: 147,
      icon: <GiBrain className={styles.ticketIcon} />,
      features: [
        "Acesso a todas as palestras dos 3 dias",
        "Certificado de 40h",
        "Material digital completo",
        "Acesso vitalício às gravações",
        "Coffee break incluso",
        "Benefício para estudantes e professores",
      ],
    },
    {
      id: "grupo",
      name: "INGRESSO GRUPO",
      fullPrice: 1188,
      installmentPrice: 847,
      icon: <FaUsers className={styles.ticketIcon} />,
      features: [
        "Acesso para 5 pessoas",
        "Certificado individual para todos",
        "Material completo para equipe",
        "Acesso vitalício às gravações",
        "Sessão exclusiva de Q&A",
        "Suporte prioritário",
      ],
    },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateInstallment = (price: number) => {
    return (price / 12).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className={styles.section} id="ingressos">
      <AnimationCirclesBg />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
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
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
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
                  {/* 
                  <span className={styles.installmentNote}>
                    <FaCreditCard className={styles.creditIcon} /> sem juros no
                    cartão
                  </span> */}
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
                    link="#checkout"
                    text="GARANTIR VAGA"
                    data-color="primary"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={styles.footer} data-aos="fade-up">
          <p className={styles.footerNote}>
            *Meia-entrada válida para estudantes, professores e profissionais da
            rede pública.
            <a href="#duvidas" className={styles.footerLink}>
              {" "}
              Verifique os critérios
            </a>
          </p>
        </div>
      </div>

      <div className={`${styles.gradientSphere} ${styles.sphere1}`}></div>
      <div className={`${styles.gradientSphere} ${styles.sphere2}`}></div>
      <div className={`${styles.gradientSphere} ${styles.sphere3}`}></div>

      <div className={styles.gridOverlay}></div>
    </section>
  );
}
