import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
  fetch("http://127.0.0.1:5007/api/challenges")
    .then((res) => res.json())
    .then((data) => {
      setChallenges(data);
    })
    .catch((err) => console.error(err));
}, []);

  const getDifficultyClass = (difficulty) => {
    if (difficulty === "Easy") return "badge easy";
    if (difficulty === "Easy-Moderate") return "badge easy-moderate";
    if (difficulty === "Moderate") return "badge moderate";
    if (difficulty === "Moderate-Hard") return "badge moderate-hard";
    if (difficulty === "Hard") return "badge hard";
    return "badge";
  };

  return (
    <div className="dashboard">
      <h2>Challenge Dashboard</h2>
      <p className="dashboard-subtitle">
        Choose an OSINT challenge and test your investigation skills.
      </p>

      <div className="challenge-list">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="card-top">
              <span className={getDifficultyClass(challenge.difficulty)}>
                {challenge.difficulty}
              </span>

              <span className="points-box">{challenge.points} pts</span>
            </div>

            <h3>{challenge.title}</h3>
            <p><strong>Technique:</strong> {challenge.technique}</p>
            <p><strong>Question:</strong> {challenge.question}</p>

            <button onClick={() => navigate(`/challenge/${challenge.id}`)}>
              Open Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;