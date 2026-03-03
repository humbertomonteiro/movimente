import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
    </Routes>
  );
}
