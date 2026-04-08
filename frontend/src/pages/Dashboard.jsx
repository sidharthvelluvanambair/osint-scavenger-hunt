function Dashboard() {
  const challenges = [
    { id: 1, title: "Find the Location", difficulty: "Easy", points: 50 },
    { id: 2, title: "Analyze the Metadata", difficulty: "Medium", points: 100 },
    { id: 3, title: "Verify the Business", difficulty: "Hard", points: 150 },
  ];

  return (
    <div className="dashboard">
      <h2>Challenge Dashboard</h2>
      <div className="challenge-list">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <h3>{challenge.title}</h3>
            <p>Difficulty: {challenge.difficulty}</p>
            <p>Points: {challenge.points}</p>
            <button>Open Challenge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;