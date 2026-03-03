import { useState } from "react";
import styles from "./CommonQuestions.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

interface Question {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export default function CommonQuestions() {
  // Estado único para controlar qual pergunta está aberta
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Array de perguntas e respostas
  const questions: Question[] = [
    {
      id: 1,
      question: "Para quem é o Congresso Autismo 2026?",
      answer: (
        <p>
          O Congresso autismo 2026 é destinado a todos que desejam se aprofundar
          no universo das pesquisas e estudos sobre o neurodesenvolvimento. Um
          espaço de troca e aprendizado que reúne pais atípicos, familiares,
          médicos, educadores, psicólogos, terapeutas e profissionais da saúde,
          além de todos que buscam enriquecer conhecimentos, ampliar
          perspectivas e fortalecer sua atuação tanto no campo pessoal quanto
          profissional.
        </p>
      ),
    },
    {
      id: 2,
      question: "Como faço para adquirir meia-entrada?",
      answer: (
        <>
          <p>
            Para ter direito à meia-entrada, é necessário apresentar a Carteira
            de Identificação Estudantil (CIE), emitida conforme a Lei Federal nº
            12.933/2013, ou documento equivalente válido como declaração da
            instituição assinada e carimbada do mês vigente do evento (AGOSTO).
          </p>
          <p>Também são elegíveis:</p>
          <ul>
            <li>
              • Pessoas com deficiência e um acompanhante (Lei nº 12.933/2013 +
              Estatuto da Pessoa com Deficiência – Lei nº 13.146/2015);
            </li>
            <li>
              • Idosos (com 60 anos ou mais), conforme o Estatuto do Idoso – Lei
              nº 10.741/2003;
            </li>
            <li>
              • Professores e profissionais da educação da rede pública,
              conforme legislações estaduais e municipais declaração constando
              cargo ocupado DOCENTE do mês vigente (AGOSTO);
            </li>
            <li>
              • Pais atípicos, mediante apresentação de documentação
              comprobatória Laudo e registro de nascimento do filho(a).
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      question: "Benefícios do Congresso Autismo 2026?",
      answer: (
        <ul>
          <li>
            O Congresso autismo 2026 reúne em um só lugar pesquisas inéditas,
            especialistas de referência e conteúdos exclusivos sobre
            neurodesenvolvimento. É a oportunidade de atualizar seus
            conhecimentos, fortalecer sua atuação profissional, trocar
            experiências valiosas e ampliar conexões com famílias, instituições
            e profissionais de diversas áreas.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      question: "Como entrar em contato com a equipe do Congresso autismo?",
      answer: (
        <p>
          Você pode entrar em contato com a equipe através do e-mail:{" "}
          <a
            href="mailto:comercial@congressoautismo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            comercial@congressoautismo.com.br
          </a>
        </p>
      ),
    },
    {
      id: 5,
      question: "Como funciona a política de cancelamento e reembolso?",
      answer: (
        <p>
          Respeitamos o Código de Defesa do Consumidor, permitindo cancelamentos
          e reembolsos em até 7 dias após a compra. Após este período, não
          oferecemos cancelamentos, transferências de titularidade ou reembolsos
          devido aos compromissos já estabelecidos.
        </p>
      ),
    },
    {
      id: 6,
      question: "Há descontos para compras em grupo?",
      answer: (
        <p>
          Sim, oferecemos um desconto de 20% para compras de 5 ou mais ingressos
          para o congresso presencial.
        </p>
      ),
    },
    {
      id: 7,
      question: "Como será o acesso ao conteúdo online?",
      answer: (
        <p>
          O conteúdo será gravado e editado e disponibilizado na plataforma
          Hotmart para que o aluno possa usufruir à vontade durante 24 meses.
          Permitindo que você assista quando e onde desejar.
        </p>
      ),
    },
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5585992742323&text=Ol%C3%A1%2C%20equipe%20autismoAutismo!%20Estou%20interessado(a)%20no%20evento%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.%20%0A%0APoderiam%20me%20ajudar%20com%20detalhes%20sobre%20inscri%C3%A7%C3%B5es%2C%20programa%C3%A7%C3%A3o%2C%20palestrantes%20e%20outras%20informa%C3%A7%C3%B5es%20relevantes%3F%20Obrigado(a)!%0A%0A";

  return (
    <section className={styles.section} id="faq">
      <h2 className={styles.title}>Perguntas Frequentes</h2>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.container}>
        {/* Card do WhatsApp */}
        <div className={styles.ballonWhatsapp} data-aos="zoom-in">
          <FaWhatsapp />
          <h3>Prefere falar conosco?</h3>
          <p>Fale com nosso time de suporte pelo WhatsApp</p>
          <ButtonCTA
            data-color="secondary"
            text="FALAR COM O TIME"
            link={whatsappLink}
          />
        </div>

        {/* Lista de Perguntas */}
        <ul className={styles.questions} data-aos="zoom-in">
          {questions.map((item) => (
            <li key={item.id} className={styles.question}>
              <button
                onClick={() => toggleQuestion(item.id)}
                aria-expanded={openQuestion === item.id}
              >
                {item.question}
                {openQuestion === item.id ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>

              {openQuestion === item.id && (
                <div className={styles.text}>{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
