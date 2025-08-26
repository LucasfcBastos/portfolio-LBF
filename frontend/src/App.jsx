import { Routes, Route, Navigate } from "react-router-dom";

import HomePagePT from "./pages/Pt";
import HomePageEN from "./pages/En";
import HomePageES from "./pages/Es";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pt" replace />} />

      <Route path="/pt" element={<HomePagePT />} />
      <Route path="/en" element={<HomePageEN />} />
      <Route path="/es" element={<HomePageES />} />

      <Route path="*" element={<Navigate to="/pt" replace />} />
    </Routes>
  );
}

export default App;
