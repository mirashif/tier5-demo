import { Routes, Route } from "react-router-dom";

import { Home, Facebook, Instagram } from "~/pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facebook" element={<Facebook />} />
      <Route path="/instagram" element={<Instagram />} />
    </Routes>
  );
}
