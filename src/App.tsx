import { Routes, Route } from "react-router-dom";

import { Home, Facebook } from "~/pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facebook" element={<Facebook />} />
    </Routes>
  );
}
