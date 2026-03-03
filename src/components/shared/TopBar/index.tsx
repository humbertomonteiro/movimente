import styles from "./TopBar.module.css";

export default function TopoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva para pré-venda</span> */}
      <span>GARANTA AGORA MESMO SEU INGRESSO.</span>

      <a href="#tickets">Aproveitar agora</a>
    </div>
  );
}
