// import styles from "./Home.module.css";
import TopBar from "../../components/shared/TopBar";
import Hero from "../../components/sections/Hero";
import TargetAudience from "../../components/sections/TargetAudience";
import Tickets from "../../components/sections/Tickets";
import CommonQuestions from "../../components/sections/CommonQuestions";
import Footer from "../../components/tamplats/Footer";
import Speakers from "../../components/sections/Speakers";
import About from "../../components/sections/About";
import Location from "../../components/sections/Location";
import Testimonials from "../../components/sections/Testimonials";
import AnimationCirclesBg from "../../components/shared/AnimationCirclesBg";

export default function Home() {
  return (
    <div className="">
      <TopBar />
      <Hero />
      <TargetAudience />
      <Speakers />
      <About />
      <Tickets />
      <Testimonials />
      <Location />
      <CommonQuestions />
      <Footer />
      <AnimationCirclesBg />
    </div>
  );
}
