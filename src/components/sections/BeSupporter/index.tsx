import styles from "./BeSupporter.module.css";

import ButtonCTA from "../../shared/ButtonCTA";

export default function BeSupporter() {
  return (
    <section className={styles.section} id="founder">
      {/* Decorative background shapes */}
      <div className={styles.shapePurple} data-aos="fade-right" />
      <div className={styles.shapeBlue} data-aos="fade-left" />

      <div className={styles.container}>
        {/* ── Highlight quote ── */}
        <div
          className={styles.highlightBlock}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className={styles.highlightText}>
            <strong>Sua marca no centro da transformação.</strong>
          </p>
          <p className={styles.highlightSub}>
            Posicione sua empresa no maior Congresso de Neurodiversidade do
            Nordeste e aproveite uma oportunidade única para gerar negócios,
            conquistar novos clientes, fortalecer sua marca e criar conexões
            estratégicas com um público altamente qualificado.
          </p>
          <p className={styles.highlightSub}>
            Com espaços de exposição, ativações de marca e experiências
            exclusivas, o MOVEMENTE é o ambiente ideal para empresas que desejam
            crescer, inovar e associar sua marca a um evento de grande
            relevância e impacto social.
          </p>
          <ButtonCTA
            text="Seja um Expositor"
            link="https://wa.me/559891131020?text=Quero%20ser%20um%20expositor."
            target="_blank"
            data-color="secondary"
          />
        </div>
      </div>
    </section>
  );
}
