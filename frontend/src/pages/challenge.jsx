import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Challenge.css";

function Challenge() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [challenge, setChallenge] = useState(null);
  const [answer, setAnswer] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [resultClass, setResultClass] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5007/api/challenges/${id}`)
      .then((res) => res.json())
      .then((data) => setChallenge(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!challenge) {
    return (
      <div className="challenge-page">
        <h2>Loading challenge...</h2>
      </div>
    );
  }

  const getDifficultyClass = (difficulty) => {
    if (difficulty === "Easy") return "badge easy";
    if (difficulty === "Easy-Moderate") return "badge easy-moderate";
    if (difficulty === "Moderate") return "badge moderate";
    if (difficulty === "Moderate-Hard") return "badge moderate-hard";
    if (difficulty === "Hard") return "badge hard";
    return "badge";
  };

  const handleSubmit = () => {
  fetch("http://127.0.0.1:5007/api/submit-answer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      challengeId: challenge.id,
      answer: answer,
      reasoning: reasoning,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.correct) {
        setResultMessage(data.message);
        setResultClass("result-box correct");
      } else {
        setResultMessage(`${data.message} Correct answer: ${data.correctAnswer}`);
        setResultClass("result-box incorrect");
      }
    })
    .catch((err) => console.error(err));
};

  return (
    <div className="challenge-page">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>

      <h2>{challenge.title}</h2>

      <div className="challenge-top">
        <span className={getDifficultyClass(challenge.difficulty)}>
          {challenge.difficulty}
        </span>

        <span className="points-box">{challenge.points} points</span>
      </div>

      <p className="technique-text">
        <strong>Technique:</strong> {challenge.technique}
      </p>

      <div className="question-box">
        <h3>Question</h3>
        <p>{challenge.question}</p>
      </div>

      <div className="image-placeholder-box">
        <h3>Image / Evidence</h3>
        <div className="image-placeholder">
          <p>{challenge.image || "Image placeholder"}</p>
        </div>
      </div>

      {challenge.metadata && (
        <div className="metadata-box">
          <h3>Metadata</h3>
          <p>{challenge.metadata}</p>
        </div>
      )}

      {challenge.clues && (
        <div className="clues-box">
          <h3>Clues</h3>
          <ul>
            {challenge.clues.map((clue, index) => (
              <li key={index}>{clue}</li>
            ))}
          </ul>
        </div>
      )}

      {challenge.hint && (
        <>
          <button
            className="hint-button"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && (
            <div className="hint-box">
              <p>
                <strong>Hint:</strong> {challenge.hint}
              </p>
            </div>
          )}
        </>
      )}

      <div className="form-section">
        <h3>Your Response</h3>

        <input
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <textarea
          placeholder="Explain your reasoning"
          value={reasoning}
          onChange={(e) => setReasoning(e.target.value)}
          rows="6"
        ></textarea>

        <button onClick={handleSubmit}>Submit Answer</button>
      </div>

      {resultMessage && (
        <div className={resultClass}>
          <p>{resultMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Challenge;