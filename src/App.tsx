import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import { EventProvider } from "./contexts/EventContexts";

import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <BrowserRouter>
      <EventProvider>
        <RoutesApp />
      </EventProvider>
    </BrowserRouter>
  );
}

export default App;
