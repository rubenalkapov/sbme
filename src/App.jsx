import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";

const Realisations = lazy(() => import("./pages/Realisations"));

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : ""}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <FormControlLabel
          control={
            <MaterialUISwitch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label={darkMode ? "🌙" : "☀️"}
          className="absolute top-4 right-4"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={
            <div className='flex justify-center flex-col items-center'> 
              <Suspense fallback={<CircularProgress size={40} />}>
                <Realisations />
              </Suspense>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App
