import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} keys={location.pathname}>
        <Route path="/" element={<Landing />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
