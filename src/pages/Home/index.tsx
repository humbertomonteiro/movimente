// import styles from "./Home.module.css";
import TopBar from "../../components/shared/TopBar";
import Hero from "../../components/sections/Hero";
import TargetAudience from "../../components/sections/TargetAudience";
import Tickets from "../../components/sections/Tickets";
import CommonQuestions from "../../components/sections/CommonQuestions";
import Footer from "../../components/tamplats/Footer";

export default function Home() {
  return (
    <div className="">
      <TopBar />
      <Hero />
      <TargetAudience />
      <Tickets />
      <CommonQuestions />
      <Footer />
    </div>
  );
}
