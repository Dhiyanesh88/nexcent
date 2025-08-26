import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/nexent_api/signup2.php", {
        method: "POST",
        body: formData,
      });
      const text = await response.text();
      setMessage(text);

      if (text === "Signup successful") {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const styles = {
    signup: {
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
      width: "clamp(300px, 80%, 500px)",
      padding: "clamp(25px, 5%, 35px)",
      borderRadius: "16px",
      background: "linear-gradient(135deg, rgba(210, 228, 214, 0.55), rgba(255, 255, 255, 0.6))",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      animation: "fadeIn 0.6s ease-in-out",
    },
    orbitTriangle: {
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "14px solid #4caf4f",
    },
    orbitTriangleWhite: {
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "14px solid white",
      filter: "drop-shadow(0 0 1px #4caf4f)",
    },
    orbitTriangleInverted: {
      width: 0,
      height: 0,
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: "14px solid #4caf4f",
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
      color: "#4caf4f",
      fontWeight: "700",
      fontSize: "1.8rem",
      letterSpacing: "1px",
    },
    message: {
      marginTop: "15px",
      color: message.includes("successful") ? "#2e7d32" : "red",
    },
  };
  const autofillStyles = `
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background: linear-gradient(135deg, #e1eddbff, #e7ffcaff) !important;
      -webkit-text-fill-color: #033f0bff !important;
      border: 1px solid #4caf4f !important;
      box-shadow: 0 0 0px 1000px #e7ffcaff inset !important;
      transition: background-color 5000s ease-in-out 0s;
    }

    input:focus {
      border-color: #2e7d32 !important;
      box-shadow: 0 0 6px rgba(76, 175, 80, 0.6) !important;
    }
  `;


  return (
    <section style={styles.signup}>
      <style>{autofillStyles}</style>
      <div style={styles.container}>
        <div style={{ position: "relative", display: "inline-block", padding: "20px" }}>
          <h2 style={styles.title}>SIGN UP</h2>

          {/* Orbiting Triangles */}
          {[
            { shape: "invertedGreen", delay: 0 },
            { shape: "green", delay: 0.4 },
            { shape: "white", delay: 0.8 },
            { shape: "green", delay: 1.2 },
            { shape: "invertedGreen", delay: 1.6 },
            { shape: "white", delay: 2.0 },
          ].map((tri, i) => (
            <motion.div
              key={i}
              style={{
                ...(tri.shape === "green"
                  ? styles.orbitTriangle
                  : tri.shape === "invertedGreen"
                    ? styles.orbitTriangleInverted
                    : styles.orbitTriangleWhite),
                position: "absolute",
                left: "45%",
                top: "45%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [60, 60, -60, -60, 60],
                y: [-40, 40, 40, -40, -40],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: tri.delay,
                ease: "linear",
              }}
            >
              {/* This offset defines orbit radius (push triangles away from text) */}
              <div style={{ transform: "translateX(160px)" }} />
            </motion.div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          /><br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          /><br />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </section>
  );
}

export default SignUp;

