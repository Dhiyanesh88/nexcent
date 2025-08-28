import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

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

      if (text === "Login successful! Welcome") {
        navigate("/");
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
      background: "linear-gradient(135deg, #a8e063, #56ab2f)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      width: "clamp(300px, 80%, 550px)",
      padding: "clamp(25px, 5%, 45px)",
      borderRadius: "25px",
      background:
        "linear-gradient(135deg, rgba(210, 228, 214, 0.55), rgba(255, 255, 255, 0.6))",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
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

  const triangles = [{ shape: "green", delay: 0, finalX: -30, finalY: -30 },
  { shape: "invertedGreen", delay: 0.2, finalX: 30, finalY: -30 },
  { shape: "white", delay: 0.4, finalX: -30, finalY: 30 },
  { shape: "green", delay: 0.6, finalX: 30, finalY: 30 },
  { shape: "invertedGreen", delay: 0.8, finalX: 0, finalY: 0 },
  { shape: "white", delay: 1.0, finalX: -60, finalY: 0 },
  ];
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
    <section style={styles.login}>
      <style>{autofillStyles}</style>
      <div style={styles.container}>
        <div style={{ position: "relative", display: "inline-block", padding: "20px" }}>
          <h2 style={styles.title}>LOGIN</h2>

          {/* Orbiting Triangles */}
          {triangles.map((tri, i) => (
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
              initial={{ x: 0, y: 0 }}
              animate={[
                {
                  // Looping part
                  x: [-60, -60, 60, 60, -60],
                  y: [-30, 30, 30, -30, -30],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: tri.delay,
                  },
                },
                // {
                //   x: tri.finalX - 50,
                //   y: 0,               
                //   transition: {
                //     duration: 1,
                //     delay: 1,
                //   },
                // }
              ]}
            />
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
