from data import challenges
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask import send_from_directory
import os



app = Flask(__name__)

CORS(app)

@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path, 'static', 'images'), filename)

@app.route("/")
def home():
    return "OSINT Scavenger Hunt Backend is running!"


@app.route("/api/test")
def test_api():
    return jsonify({
        "message": "React can now connect to Flask successfully"
    })
@app.route("/api/challenges")
def get_challenges():
    return jsonify(challenges)


@app.route("/api/challenges/<int:id>")
def get_challenge(id):
    for challenge in challenges:
        if challenge["id"] == id:
            return jsonify(challenge)
    return jsonify({"error": "Challenge not found"}), 404

@app.route("/api/submit-answer", methods=["POST"])
def submit_answer():
    data = request.get_json()

    challenge_id = data.get("challengeId")
    user_answer = data.get("answer", "")

    for challenge in challenges:
        if challenge["id"] == challenge_id:
            correct_answer = challenge["answer"]

            is_correct = user_answer.strip().lower() == correct_answer.strip().lower()

            return jsonify({
    "correct": is_correct,
    "correctAnswer": correct_answer,
    "pointsEarned": challenge["points"] if is_correct else 0,
    "message": "Correct answer! Well done." if is_correct else "Incorrect answer."
})

    return jsonify({"error": "Challenge not found"}), 404


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5007)