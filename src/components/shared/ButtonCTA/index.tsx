import styles from "./ButtonCTA.module.css";
import { FaArrowRight } from "react-icons/fa";

interface ButtonCTAProps {
  link?: string;
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: boolean | string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: "button" | "submit" | "reset";
  "data-color"?: "secondary" | "line" | "primary";
  "data-button"?: "disabled";
  className?: string;
  children?: never; // Para evitar conflito com text
}

export default function ButtonCTA({
  link,
  text,
  icon,
  disabled = false,
  loading = false,
  target,
  download,
  onClick,
  type = "button",
  "data-color": dataColor = "primary",
  "data-button": dataButton,
  className = "",
  ...args
}: ButtonCTAProps) {
  // Se estiver desabilitado, adiciona o atributo data-button="disabled"
  const isDisabled = disabled || loading;
  const dataButtonAttr = isDisabled ? "disabled" : dataButton;

  // Conteúdo do botão
  const buttonContent = (
    <>
      {loading && <span className={styles.spinner} />}
      <span className={loading ? styles.hideText : ""}>{text}</span>
      {icon ? icon : !loading && <FaArrowRight />}
    </>
  );

  // Classes combinadas
  const combinedClassName = [
    styles.button,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Se for link (tem href)
  if (link) {
    return (
      <a
        href={isDisabled ? undefined : link}
        target={target}
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={combinedClassName}
        data-color={dataColor}
        data-button={dataButtonAttr}
        aria-disabled={isDisabled}
        aria-busy={loading}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }

          onClick?.(e);
        }}
        {...args}
      >
        {buttonContent}
      </a>
    );
  }

  // Se for botão (sem href)
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={combinedClassName}
      data-color={dataColor}
      data-button={dataButtonAttr}
      aria-disabled={isDisabled}
      aria-busy={loading}
      onClick={onClick}
      {...args}
    >
      {buttonContent}
    </button>
  );
}
