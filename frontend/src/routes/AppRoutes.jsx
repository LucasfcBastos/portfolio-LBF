import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutProject from "../pages/AboutProject";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/1" element={<AboutProject />} />
      </Routes>
    </BrowserRouter>
  );
}
