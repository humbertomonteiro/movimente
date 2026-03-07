import HeaderRegistration from "../../components/tamplats/HeaderRegistration";
import RegistrationForm from "../../components/sections/RegistrationForm";
import Footer from "../../components/tamplats/Footer";
import styles from "./Registration.module.css";

export default function Registration() {
  return (
    <div className={styles.page}>
      <HeaderRegistration />

      <main className={styles.main}>
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );
}
