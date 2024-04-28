import React, { useState } from "react";

const Login: React.FC<{ onLoginSuccess: () => void }> = ({
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const authenticateUser = async (username: string, password: string) => {
    // Simulate user authentication with hardcoded values
    if (username === "user" && password === "password") {
      return true; // Authentication successful
    } else {
      return false; // Authentication failed
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous error
    try {
      const isAuthenticated = await authenticateUser(username, password);
      if (isAuthenticated) {
        onLoginSuccess(); // Call the callback function passed from App component
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Failed to authenticate. Please try again.");
      console.error("Authentication failed:", error);
    }
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ backgroundColor: "#82029b", color: "#fff", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="username" style={{ marginRight: "10px" }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" style={{ marginRight: "10px" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginRight: "10px" }}>
          Login
        </button>
        <button
          type="button"
          onClick={handleClear}
          style={{ marginRight: "10px" }}
        >
          Clear
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
