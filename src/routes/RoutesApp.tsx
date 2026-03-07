import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Registration from "../pages/Registration";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
      <Route path="/registro" element={<Registration />} />
    </Routes>
  );
}
