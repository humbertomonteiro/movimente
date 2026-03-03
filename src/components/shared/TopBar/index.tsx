import styles from "./topBar.module.css";

export default function TopoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva para pré-venda</span> */}
      <span>GARANTA AGORA MESMO SEU INGRESSO.</span>

      <a href="#ingressos">Aproveitar agora</a>
    </div>
  );
}
