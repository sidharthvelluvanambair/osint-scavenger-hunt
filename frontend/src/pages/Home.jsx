import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>OSINT Scavenger Hunt Platform</h1>
      <p>
        Train your OSINT skills through real-world investigation challenges.
      </p>

      <button onClick={() => navigate("/login")}>
        Start Hunt
      </button>
    </div>
  );
}

export default Home;