import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Challenge from "./pages/Challenge";
import "./styles/Home.css";
import "./styles/Dashboard.css";
import "./styles/Challenge.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/challenge/:id" element={<Challenge />} />
      </Routes>
    </Router>
  );
}

export default App;