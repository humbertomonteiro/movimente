import styles from "./PrivacyPolicy.module.css";
import ButtonCTA from "../../components/shared/ButtonCTA";

// React Icons
import {
  IoShieldCheckmarkOutline,
  IoDocumentTextOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoPrintOutline,
  IoChevronForward,
  IoCalendarOutline,
} from "react-icons/io5";

import {
  HiOutlineDocumentReport,
  HiOutlineUserGroup,
  HiOutlineClipboardCheck,
  HiOutlineEye,
  HiOutlineDatabase,
} from "react-icons/hi";

import {
  TbCookie,
  TbDeviceDesktopAnalytics,
  TbFileShredder,
  TbBrandWhatsapp,
  TbMailForward,
} from "react-icons/tb";

import {
  MdOutlineSecurity,
  MdOutlineContactSupport,
  MdOutlineGppGood,
  MdOutlinePrivacyTip,
  MdOutlineWarningAmber,
} from "react-icons/md";

import {
  BsShieldLock,
  BsShieldCheck,
  BsFileEarmarkText,
  BsFileEarmarkLock,
  BsPersonCheck,
} from "react-icons/bs";

import logo from "../../assets/imgs/logos/logo-movemente.png";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className={styles.pageWrapper}>
      {/* Header da página */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <a href="/" className={styles.logoLink}>
              <img src={logo} alt="Movimente" className={styles.logo} />
            </a>
            <div className={styles.buttonHeader}>
              <ButtonCTA link="/#ingressos" text="Garantir vaga" />
            </div>
          </div>
        </div>
      </header>

      {/* Banner da página */}
      <section className={styles.banner}>
        <div className={styles.shapeBlue}></div>
        <div className={styles.shapePurple}></div>
        <div className={styles.shapePink}></div>

        <div className={styles.container}>
          <div className={styles.bannerContent} data-aos="fade-up">
            <div className={styles.bannerIcon}>
              <IoShieldCheckmarkOutline />
            </div>
            <h1 className={styles.bannerTitle}>
              Política de{" "}
              <span className={styles.titleHighlight}>Privacidade</span>
            </h1>
            <p className={styles.bannerSubtitle}>
              Saiba como protegemos e utilizamos seus dados pessoais com total
              transparência
            </p>
            <div className={styles.lastUpdate}>
              <IoCalendarOutline />
              <span>Última atualização: {currentDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Índice/Sidebar */}
          {/* <aside className={styles.sidebar}>
              <div className={styles.sidebarInner}>
                <h3 className={styles.sidebarTitle}>Nesta página</h3>
                <nav className={styles.sidebarNav}>
                  <a href="#introducao" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Introdução
                  </a>
                  <a href="#coleta" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Dados que coletamos
                  </a>
                  <a href="#uso" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Como usamos seus dados
                  </a>
                  <a href="#compartilhamento" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Compartilhamento
                  </a>
                  <a href="#armazenamento" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Armazenamento
                  </a>
                  <a href="#direitos" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Seus direitos
                  </a>
                  <a href="#cookies" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Cookies
                  </a>
                  <a href="#seguranca" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Segurança
                  </a>
                  <a href="#contato" className={styles.sidebarLink}>
                    <IoChevronForward />
                    Contato
                  </a>
                </nav>

                <div className={styles.sidebarCta}>
                  <IoPrintOutline className={styles.sidebarCtaIcon} />
                  <div>
                    <h4>Baixe em PDF</h4>
                    <p>Versão para impressão</p>
                  </div>
                </div>
              </div>
            </aside> */}

          {/* Conteúdo principal */}
          <div className={styles.content}>
            {/* Introdução */}
            <section id="introducao" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <MdOutlinePrivacyTip className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Introdução</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  A <strong>Movimente</strong>, pessoa jurídica de direito
                  privado, inscrita no CNPJ sob o nº{" "}
                  <strong>00.000.000/0001-00</strong>, com sede em São Luís -
                  MA, valoriza a privacidade e a proteção dos dados pessoais de
                  todos os seus clientes, parceiros, colaboradores e usuários.
                </p>

                <p className={styles.paragraph}>
                  Esta Política de Privacidade tem como objetivo informar de
                  forma clara e transparente como coletamos, utilizamos,
                  armazenamos e protegemos as informações pessoais fornecidas
                  por você, em conformidade com a
                  <strong>
                    {" "}
                    Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)
                  </strong>
                  .
                </p>

                <div className={styles.infoBox}>
                  <MdOutlineGppGood className={styles.infoBoxIcon} />
                  <div>
                    <h4 className={styles.infoBoxTitle}>
                      Nossa responsabilidade
                    </h4>
                    <p className={styles.infoBoxText}>
                      Nos comprometemos a tratar seus dados com o mais alto
                      nível de segurança, ética e transparência, respeitando
                      suas escolhas e garantindo seus direitos como titular de
                      dados pessoais.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Dados que coletamos */}
            <section id="coleta" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <HiOutlineDatabase className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Dados que coletamos</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Durante sua interação com nossa plataforma, podemos coletar as
                  seguintes categorias de informações:
                </p>

                <div className={styles.dataGrid}>
                  <div className={styles.dataCard}>
                    <div className={styles.dataCardHeader}>
                      <HiOutlineDocumentReport
                        className={styles.dataCardIcon}
                      />
                      <h3>Dados de identificação</h3>
                    </div>
                    <ul className={styles.dataList}>
                      <li>
                        <IoChevronForward /> Nome completo
                      </li>
                      <li>
                        <IoChevronForward /> CPF
                      </li>
                      <li>
                        <IoChevronForward /> RG
                      </li>
                      <li>
                        <IoChevronForward /> Data de nascimento
                      </li>
                      <li>
                        <IoChevronForward /> Gênero
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dataCard}>
                    <div className={styles.dataCardHeader}>
                      <IoMailOutline className={styles.dataCardIcon} />
                      <h3>Dados de contato</h3>
                    </div>
                    <ul className={styles.dataList}>
                      <li>
                        <IoChevronForward /> E-mail
                      </li>
                      <li>
                        <IoChevronForward /> Telefone
                      </li>
                      <li>
                        <IoChevronForward /> WhatsApp
                      </li>
                      <li>
                        <IoChevronForward /> Endereço
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dataCard}>
                    <div className={styles.dataCardHeader}>
                      <TbDeviceDesktopAnalytics
                        className={styles.dataCardIcon}
                      />
                      <h3>Dados de navegação</h3>
                    </div>
                    <ul className={styles.dataList}>
                      <li>
                        <IoChevronForward /> Endereço IP
                      </li>
                      <li>
                        <IoChevronForward /> Tipo de navegador
                      </li>
                      <li>
                        <IoChevronForward /> Páginas acessadas
                      </li>
                      <li>
                        <IoChevronForward /> Tempo de acesso
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dataCard}>
                    <div className={styles.dataCardHeader}>
                      <BsFileEarmarkText className={styles.dataCardIcon} />
                      <h3>Dados de pagamento</h3>
                    </div>
                    <ul className={styles.dataList}>
                      <li>
                        <IoChevronForward /> Dados do cartão*
                      </li>
                      <li>
                        <IoChevronForward /> Histórico de compras
                      </li>
                      <li>
                        <IoChevronForward /> Preferências
                      </li>
                    </ul>
                    <small className={styles.dataNote}>
                      *Os dados de cartão são processados diretamente pelos
                      gateways de pagamento, sem armazenamento em nossos
                      servidores.
                    </small>
                  </div>
                </div>
              </div>
            </section>

            {/* Como usamos seus dados */}
            <section id="uso" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <HiOutlineClipboardCheck className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Como usamos seus dados</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Utilizamos seus dados pessoais para as seguintes finalidades:
                </p>

                <div className={styles.usageGrid}>
                  <div className={styles.usageItem}>
                    <BsPersonCheck className={styles.usageIcon} />
                    <div>
                      <h4>Identificação e autenticação</h4>
                      <p>
                        Garantir que você é quem diz ser e proteger sua conta
                      </p>
                    </div>
                  </div>

                  <div className={styles.usageItem}>
                    <IoDocumentTextOutline className={styles.usageIcon} />
                    <div>
                      <h4>Processamento de inscrições</h4>
                      <p>Gerenciar sua participação no evento Movimente</p>
                    </div>
                  </div>

                  <div className={styles.usageItem}>
                    <TbMailForward className={styles.usageIcon} />
                    <div>
                      <h4>Comunicações</h4>
                      <p>Enviar informações importantes sobre o evento</p>
                    </div>
                  </div>

                  <div className={styles.usageItem}>
                    <HiOutlineEye className={styles.usageIcon} />
                    <div>
                      <h4>Melhorias na experiência</h4>
                      <p>Personalizar conteúdo e analisar uso da plataforma</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Compartilhamento de dados */}
            <section id="compartilhamento" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <HiOutlineUserGroup className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>
                  Compartilhamento de dados
                </h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Seus dados podem ser compartilhados com:
                </p>

                <div className={styles.sharingGrid}>
                  <div className={styles.sharingItem}>
                    <BsShieldLock className={styles.sharingIcon} />
                    <span>Processadores de pagamento</span>
                  </div>
                  <div className={styles.sharingItem}>
                    <TbBrandWhatsapp className={styles.sharingIcon} />
                    <span>Plataformas de comunicação</span>
                  </div>
                  <div className={styles.sharingItem}>
                    <BsFileEarmarkLock className={styles.sharingIcon} />
                    <span>Autoridades legais (quando exigido)</span>
                  </div>
                  <div className={styles.sharingItem}>
                    <IoLockClosedOutline className={styles.sharingIcon} />
                    <span>Ferramentas de análise</span>
                  </div>
                </div>

                <div className={styles.warningBox}>
                  <MdOutlineWarningAmber className={styles.warningIcon} />
                  <p>
                    <strong>Importante:</strong> Não vendemos seus dados
                    pessoais para terceiros. Todo compartilhamento é feito
                    estritamente para operacionalização dos serviços e
                    cumprimento de obrigações legais.
                  </p>
                </div>
              </div>
            </section>

            {/* Armazenamento e retenção */}
            <section id="armazenamento" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <TbFileShredder className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>
                  Armazenamento e retenção
                </h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Seus dados são armazenados em servidores seguros localizados
                  no Brasil e mantidos pelo período necessário para cumprir as
                  finalidades para as quais foram coletados, ou para cumprir
                  obrigações legais.
                </p>

                <div className={styles.retentionTable}>
                  <div className={styles.retentionRow}>
                    <span>Tipo de dado</span>
                    <span>Período de retenção</span>
                  </div>
                  <div className={styles.retentionRow}>
                    <span>Dados cadastrais</span>
                    <span>5 anos após último contato</span>
                  </div>
                  <div className={styles.retentionRow}>
                    <span>Dados de pagamento</span>
                    <span>5 anos (exigência fiscal)</span>
                  </div>
                  <div className={styles.retentionRow}>
                    <span>Dados de navegação</span>
                    <span>6 meses</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Seus direitos */}
            <section id="direitos" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <MdOutlineGppGood className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Seus direitos (LGPD)</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  De acordo com a LGPD, você tem direito a:
                </p>

                <div className={styles.rightsGrid}>
                  <div className={styles.rightItem}>
                    <span className={styles.rightNumber}>1</span>
                    <h4>Confirmação e acesso</h4>
                    <p>Saber se tratamos seus dados e ter acesso a eles</p>
                  </div>

                  <div className={styles.rightItem}>
                    <span className={styles.rightNumber}>2</span>
                    <h4>Correção</h4>
                    <p>
                      Corrigir dados incompletos, inexatos ou desatualizados
                    </p>
                  </div>

                  <div className={styles.rightItem}>
                    <span className={styles.rightNumber}>3</span>
                    <h4>Anonimização</h4>
                    <p>Solicitar a anonimização de dados desnecessários</p>
                  </div>

                  <div className={styles.rightItem}>
                    <span className={styles.rightNumber}>4</span>
                    <h4>Portabilidade</h4>
                    <p>Receber seus dados em formato estruturado</p>
                  </div>

                  <div className={styles.rightItem}>
                    <span className={styles.rightNumber}>5</span>
                    <h4>Eliminação</h4>
                    <p>
                      Solicitar a exclusão de dados tratados com consentimento
                    </p>
                  </div>

                  <div className={styles.rightItem}>
                    <span className={styles.rightNumber}>6</span>
                    <h4>Revogação</h4>
                    <p>Revogar seu consentimento a qualquer momento</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <TbCookie className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Política de Cookies</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Utilizamos cookies para melhorar sua experiência em nosso
                  site. Os cookies são pequenos arquivos de texto armazenados em
                  seu dispositivo.
                </p>

                <div className={styles.cookiesTable}>
                  <div className={styles.cookieRow}>
                    <div>
                      <h4>Cookies essenciais</h4>
                      <p>Necessários para o funcionamento básico do site</p>
                    </div>
                    <span className={styles.cookieTag}>Sempre ativos</span>
                  </div>

                  <div className={styles.cookieRow}>
                    <div>
                      <h4>Cookies de performance</h4>
                      <p>Coletam informações anônimas sobre o uso do site</p>
                    </div>
                    <span className={styles.cookieTag}>Opcionais</span>
                  </div>

                  <div className={styles.cookieRow}>
                    <div>
                      <h4>Cookies de funcionalidade</h4>
                      <p>Lembram suas preferências e escolhas</p>
                    </div>
                    <span className={styles.cookieTag}>Opcionais</span>
                  </div>

                  <div className={styles.cookieRow}>
                    <div>
                      <h4>Cookies de marketing</h4>
                      <p>Rastreiam visitas para publicidade direcionada</p>
                    </div>
                    <span className={styles.cookieTag}>Opcionais</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Segurança */}
            <section id="seguranca" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <MdOutlineSecurity className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Medidas de segurança</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Adotamos as melhores práticas de segurança para proteger seus
                  dados:
                </p>

                <div className={styles.securityGrid}>
                  <div className={styles.securityItem}>
                    <BsShieldCheck className={styles.securityIcon} />
                    <span>Criptografia SSL/TLS</span>
                  </div>
                  <div className={styles.securityItem}>
                    <BsShieldLock className={styles.securityIcon} />
                    <span>Firewalls</span>
                  </div>
                  <div className={styles.securityItem}>
                    <IoLockClosedOutline className={styles.securityIcon} />
                    <span>Controle de acesso</span>
                  </div>
                  <div className={styles.securityItem}>
                    <HiOutlineEye className={styles.securityIcon} />
                    <span>Monitoramento 24/7</span>
                  </div>
                  <div className={styles.securityItem}>
                    <TbFileShredder className={styles.securityIcon} />
                    <span>Backups criptografados</span>
                  </div>
                  <div className={styles.securityItem}>
                    <IoShieldCheckmarkOutline className={styles.securityIcon} />
                    <span>Autenticação em duas etapas</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Contato - DPO */}
            <section id="contato" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <MdOutlineContactSupport className={styles.sectionIcon} />
                </div>
                <h2 className={styles.sectionTitle}>Fale com nosso DPO</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  Para exercer seus direitos ou tirar dúvidas sobre esta
                  política, entre em contato com nosso Encarregado de Proteção
                  de Dados (DPO):
                </p>

                <div className={styles.contactCard}>
                  <div className={styles.contactItem}>
                    <IoMailOutline className={styles.contactIcon} />
                    <div>
                      <span className={styles.contactLabel}>E-mail:</span>
                      <strong>dpo@movimente.com.br</strong>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <IoDocumentTextOutline className={styles.contactIcon} />
                    <div>
                      <span className={styles.contactLabel}>Endereço:</span>
                      <strong>Rua Exemplo, 123 - São Luís/MA</strong>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <IoPrintOutline className={styles.contactIcon} />
                    <div>
                      <span className={styles.contactLabel}>Horário:</span>
                      <strong>Segunda a sexta, 9h às 18h</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Rodapé da página */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <img src={logo} alt="Movimente" className={styles.footerLogo} />

            <div className={styles.footerLinks}>
              <a href="/" className={styles.footerLink}>
                Voltar para Home
              </a>
              <span className={styles.footerSeparator}>|</span>
              <a href="#top" className={styles.footerLink}>
                Voltar ao topo
              </a>
            </div>

            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} Movimente. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
