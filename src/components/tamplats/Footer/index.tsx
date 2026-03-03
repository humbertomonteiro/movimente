import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import logoFooter from "../../../assets/imgs/logos/logo-movemente.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com/congressoconect",
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/congressoconect",
      name: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/congressoconect",
      name: "YouTube",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/company/congressoconect",
      name: "LinkedIn",
    },
  ];

  const quickLinks = [
    { text: "Home", url: "/" },
    { text: "Sobre o evento", url: "#about" },
    { text: "Palestrantes", url: "#speakers" },
    { text: "Ingressos", url: "#ingressos" },
    { text: "Perguntas frequentes", url: "#duvidas" },
  ];

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      text: "(88) 99114-2323",
      url: "https://wa.link/exemplo",
    },
    {
      icon: <FaEnvelope />,
      text: "contato@movemente.com.br",
      url: "mailto:contato@movemente.com.br",
    },
    { icon: <FaPhone />, text: "(88) 345967890", url: "tel:+558834568790" },
    {
      icon: <FaMapMarkerAlt />,
      text: "Lugar Legal",
      url: "https://maps.google.com",
    },
  ];

  return (
    <footer className={styles.footer}>
      {/* Decoração superior */}
      <div className={styles.footerWave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#034c8c"
            fillOpacity="0.1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Grid principal do footer */}
        <div className={styles.grid}>
          {/* Coluna 1 - Logo e descrição */}
          <div className={styles.column} data-aos="fade-up">
            <img
              src={logoFooter}
              alt="Conect Autismo"
              className={styles.logo}
            />
            <p className={styles.description}>
              O maior congresso sobre transtorno do neurodesenvolvimento do
              Norte e Nordeste. Reunindo especialistas, famílias e profissionais
              para transformar vidas.
            </p>

            {/* Redes sociais */}
            <div className={styles.social}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 - Links rápidos */}
          <div
            className={styles.column}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className={styles.columnTitle}>Links Rápidos</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className={styles.link}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Informações de contato */}
          <div
            className={styles.column}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className={styles.columnTitle}>Contato</h3>
            <ul className={styles.contactList}>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactItem}
                  >
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior com copyright */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Movemente. Todos os direitos reservados.
          </p>
          <p className={styles.credit}>
            Feito com <FaHeart className={styles.heartIcon} /> por Humdev
          </p>
          <div className={styles.policyLinks}>
            <a href="#politica">Política de Privacidade</a>
            <span className={styles.separator}>|</span>
            <a href="#termos">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
