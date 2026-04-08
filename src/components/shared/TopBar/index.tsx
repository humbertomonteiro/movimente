import styles from "./TopBar.module.css";

export default function TopoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva para pré-venda</span> */}
      <span>GARANTA AGORA MESMO SEU INGRESSO.</span>

      <a
        href="#tickets"
        onClick={(e) => {
          e.preventDefault();

          window.fbq?.("track", "ViewContent", {
            content_name: "scroll_to_tickets",
          });

          setTimeout(() => {
            const el = document.getElementById("tickets");
            el?.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }}
      >
        Aproveitar agora
      </a>
    </div>
  );
}
