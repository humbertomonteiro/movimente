import { useState } from "react";
import styles from "./RegistrationForm.module.css";
import {
  createRegistration,
  getRegistrationByEmail,
  getRegistrationByCpf,
  type CreateRegistrationData,
} from "../../../services/Registrations";

// ─── Helpers de máscara ───────────────────────────────────────────────────────

function maskCpf(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function maskPhone(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function maskDate(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
}

// Converte DD/MM/YYYY → YYYY-MM-DD para salvar no Firestore
function dateToISO(value: string) {
  const [d, m, y] = value.split("/");
  return `${y}-${m}-${d}`;
}

// ─── Estado inicial ───────────────────────────────────────────────────────────

const INITIAL_STATE = {
  name: "",
  birthDate: "",
  address: "",
  cpf: "",
  email: "",
  instagram: "",
  phone: "",
};

type FormState = typeof INITIAL_STATE;
type FieldError = Partial<Record<keyof FormState, string>>;

// ─── Validações ───────────────────────────────────────────────────────────────

function validate(fields: FormState): FieldError {
  const errors: FieldError = {};

  if (!fields.name.trim()) {
    errors.name = "Nome é obrigatório.";
  }

  if (!fields.birthDate || fields.birthDate.length < 10) {
    errors.birthDate = "Data de nascimento inválida.";
  }

  if (!fields.address.trim()) {
    errors.address = "Endereço é obrigatório.";
  }

  const cpfClean = fields.cpf.replace(/\D/g, "");
  if (cpfClean.length !== 11) {
    errors.cpf = "CPF inválido.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fields.email)) {
    errors.email = "E-mail inválido.";
  }

  const phoneClean = fields.phone.replace(/\D/g, "");
  if (phoneClean.length < 10) {
    errors.phone = "Telefone inválido.";
  }

  return errors;
}

// ─── Componente ───────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

export default function RegistrationForm() {
  const [fields, setFields] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  // ── Handlers ────────────────────────────────────────────────────────────────

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    let formatted = value;
    if (name === "cpf") formatted = maskCpf(value);
    if (name === "phone") formatted = maskPhone(value);
    if (name === "birthDate") formatted = maskDate(value);

    setFields((prev) => ({ ...prev, [name]: formatted }));

    // limpa erro do campo ao digitar
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      // Checa duplicatas antes de salvar
      const [existingEmail, existingCpf] = await Promise.all([
        getRegistrationByEmail(fields.email),
        getRegistrationByCpf(fields.cpf),
      ]);

      if (existingEmail) {
        setErrors({ email: "Este e-mail já está cadastrado." });
        setStatus("idle");
        return;
      }

      if (existingCpf) {
        setErrors({ cpf: "Este CPF já está cadastrado." });
        setStatus("idle");
        return;
      }

      const data: CreateRegistrationData = {
        name: fields.name.trim(),
        birthDate: dateToISO(fields.birthDate),
        address: fields.address.trim(),
        cpf: fields.cpf,
        email: fields.email.toLowerCase().trim(),
        instagram: fields.instagram.trim() || undefined,
        phone: fields.phone,
      };

      await createRegistration(data);
      setStatus("success");
      setFields(INITIAL_STATE);
    } catch (err) {
      console.error(err);
      setServerError(
        "Ocorreu um erro ao realizar o cadastro. Tente novamente.",
      );
      setStatus("error");
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  if (status === "success") {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Cadastro realizado!</h3>
        <p className={styles.successText}>
          Recebemos suas informações. Em breve entraremos em contato.
        </p>
        <button
          className={styles.successButton}
          onClick={() => setStatus("idle")}
        >
          Fazer novo cadastro
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.formTitle}>Inscrição</h2>
      <p className={styles.formSubtitle}>
        Preencha seus dados para garantir sua vaga no evento.
      </p>

      {/* Nome */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Nome completo <span className={styles.required}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          value={fields.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        />
        {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
      </div>

      {/* Data de nascimento */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="birthDate">
          Data de nascimento <span className={styles.required}>*</span>
        </label>
        <input
          id="birthDate"
          name="birthDate"
          type="text"
          inputMode="numeric"
          placeholder="DD/MM/AAAA"
          value={fields.birthDate}
          onChange={handleChange}
          className={`${styles.input} ${errors.birthDate ? styles.inputError : ""}`}
        />
        {errors.birthDate && (
          <p className={styles.errorMsg}>{errors.birthDate}</p>
        )}
      </div>

      {/* Endereço */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="address">
          Endereço <span className={styles.required}>*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Rua, número, bairro, cidade"
          value={fields.address}
          onChange={handleChange}
          className={`${styles.input} ${errors.address ? styles.inputError : ""}`}
        />
        {errors.address && <p className={styles.errorMsg}>{errors.address}</p>}
      </div>

      {/* CPF + Telefone — linha dupla */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="cpf">
            CPF <span className={styles.required}>*</span>
          </label>
          <input
            id="cpf"
            name="cpf"
            type="text"
            inputMode="numeric"
            placeholder="000.000.000-00"
            value={fields.cpf}
            onChange={handleChange}
            className={`${styles.input} ${errors.cpf ? styles.inputError : ""}`}
          />
          {errors.cpf && <p className={styles.errorMsg}>{errors.cpf}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Telefone <span className={styles.required}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            value={fields.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
          />
          {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
        </div>
      </div>

      {/* E-mail */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          E-mail <span className={styles.required}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="seu@email.com"
          value={fields.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
      </div>

      {/* Instagram — opcional */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="instagram">
          Instagram <span className={styles.optional}>(opcional)</span>
        </label>
        <div className={styles.inputWithPrefix}>
          <span className={styles.prefix}>@</span>
          <input
            id="instagram"
            name="instagram"
            type="text"
            placeholder="seu_usuario"
            value={fields.instagram}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      {/* Erro do servidor */}
      {serverError && <p className={styles.serverError}>{serverError}</p>}

      {/* Submit */}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className={styles.spinner} />
        ) : (
          "Garantir minha vaga"
        )}
      </button>

      <p className={styles.privacyNote}>
        Seus dados são protegidos e não serão compartilhados com terceiros.
      </p>
    </form>
  );
}
