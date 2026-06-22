import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import LandingPage from "../pages/LandingPage";
import ViewProject from "../pages/ViewProject";
import ViewPoem from "../pages/ViewPoem";
import ViewGame from "../pages/ViewGame";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/view/project/:id" element={<ViewProject />} />
                <Route path="/view/poem/:id" element={<ViewPoem />} />
                <Route path="/view/game/:id" element={<ViewGame />} />
            </Routes>
        </BrowserRouter>
    );
}
