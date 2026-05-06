import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Challenge.css";

function Challenge() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [challenge, setChallenge] = useState(null);
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [resultClass, setResultClass] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(3);

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
  if (attemptsLeft <= 0) {
    setResultMessage("No attempts left. Please move to the next challenge.");
    setResultClass("result-box incorrect");
    return;
  }

  const cleanedUserAnswer = answer.trim().toLowerCase();
  const cleanedCorrectAnswer = challenge.answer.trim().toLowerCase();

  if (cleanedUserAnswer === cleanedCorrectAnswer) {
    setResultMessage("✅ Correct answer! Well done.");
    setResultClass("result-box correct");
  } else {
    const remaining = attemptsLeft - 1;
    setAttemptsLeft(remaining);

    if (remaining > 1) {
      setResultMessage(`❌ Incorrect. Try again (${remaining} attempts left)`);
    } else if (remaining === 1) {
      setResultMessage("⚠️ Incorrect. Last attempt remaining!");
    } else {
      setResultMessage("❌ No attempts left. Better luck next time.");
    }

    setResultClass("result-box incorrect");
  }
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

     <div className="image-placeholder">
  {challenge.image ? (
    <>
      <img
        src={challenge.image}
        alt={challenge.title}
        className="challenge-image"
      />

      <a
        href={challenge.image}
        download
        className="download-button"
      >
        Download Image
      </a>
    </>
  ) : (
    <p>Image placeholder</p>
  )}
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