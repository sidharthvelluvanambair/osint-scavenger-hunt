import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <input
        type="password"
        placeholder="Enter password"
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <button
        style={{ padding: "10px 20px", marginTop: "10px" }}
        onClick={() => navigate("/dashboard")}
      >
        Login
      </button>
    </div>
  );
}

export default Login;