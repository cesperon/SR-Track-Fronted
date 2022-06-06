import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/SidebarContext";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <ThemeProvider>
        <Routes location={location} keys={location.pathname}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
