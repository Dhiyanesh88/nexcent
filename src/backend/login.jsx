import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/login2.php", {
        method: "POST",
        body: formData,
      });
      const text = await response.text();
      setMessage(text);

      // Redirect if login is successful
      if (text === "Login successful") { // adjust based on your PHP response
        navigate("/home"); // redirect to /home
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const styles = {
    login: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#eef2f3",
      padding: "clamp(10px, 3%, 20px)",
      width: "100%",
      boxSizing: "border-box",
    },
    container: {
      width: "clamp(300px, 80%, 500px)",
      margin: "50px auto",
      padding: "clamp(20px, 5%, 30px)",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    input: {
      width: "clamp(200px, 70%, 400px)",
      padding: "clamp(8px, 2vw, 12px)",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "clamp(14px, 1.5vw, 16px)",
    },
    button: {
      width: "clamp(200px, 70%, 400px)",
      padding: "clamp(8px, 2vw, 12px)",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "clamp(14px, 1.5vw, 16px)",
    },
    title: {
      marginBottom: "20px",
      color: "#333",
    },
    message: {
      marginTop: "10px",
      color: "red",
    },
  };

  return (
    <section style={styles.login}>
      <div style={styles.container}>
        <h2 style={styles.title}>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </section>
  );
}

export default Login;
