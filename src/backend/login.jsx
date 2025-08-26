import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/nexent_api/login2.php", {
        method: "POST",
        body: formData,
      });
      const text = await response.text();
      setMessage(text);

    
      if (text === "Login successful") { 
        navigate("/app"); 
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
      width: "100%",
      boxSizing: "border-box",
      background: "linear-gradient(135deg, #a8e063, #56ab2f)", // fresh green bg
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      width: "clamp(300px, 80%, 550px)",
      padding: "clamp(25px, 5%, 45px)",
      borderRadius: "25px",
      background: "linear-gradient(135deg, rgba(210, 228, 214, 0.55), rgba(255, 255, 255, 0.6))",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      animation: "fadeIn 0.6s ease-in-out",
    },
    
    input: {
      width: "clamp(200px, 70%, 400px)",
      padding: "clamp(10px, 2vw, 14px)",
      margin: "12px 0",
      background: "linear-gradient(135deg, #e1eddbff, #e7ffcaff)",
      borderRadius: "8px",
      border: "1px solid #4caf4f",
      fontSize: "clamp(14px, 1.5vw, 16px)",
      outline: "none",
      transition: "all 0.2s",
      color: "#033f0bff",
    },
    button: {
      width: "clamp(200px, 70%, 400px)",
      padding: "clamp(10px, 2vw, 14px)",
      background: "#4caf4f",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "clamp(14px, 1.5vw, 16px)",
      transition: "all 0.3s ease",
    },
    title: {
      marginBottom: "20px",
      color: "#4caf4f",
      fontWeight: "700",
      fontSize: "1.8rem",
      letterSpacing: "1px",
    },
    message: {
      marginTop: "15px",
      color: "#2e7d32",
      fontWeight: "500",
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
