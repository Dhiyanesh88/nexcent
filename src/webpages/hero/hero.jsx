import React, { useState } from "react";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  // Styles object
  const styles = {
    hero: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "70px 5% 40px", 
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      minHeight: "calc(100vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      maxWidth: "1200px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "40px",
    },
    left: {
      flex: "1 1 45%", 
      minWidth: "300px", 
      display: "flex",
      flexDirection: "column",
      gap: "24px", 
    },
    right: {
      flex: "1 1 45%",
      minWidth: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px", 
    },
    heading: {
      fontSize: "clamp(32px, 5vw, 48px)", 
      color: "#333461",
      fontWeight: 800,
      lineHeight: "1.2",
      margin: 0,
    },
    paragraph: {
      fontSize: "clamp(16px, 2vw, 18px)", 
      color: "#5a5d77",
      lineHeight: "1.6",
      margin: 0,
      maxWidth: "500px",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: isHovered ? "#1a9984" : "#20ad96",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      width: "fit-content",
      transition: "background-color 0.3s ease",
    },
    imagePlaceholder: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f5f5f5",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#999",
      fontSize: "18px",
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Lessons and insights{" "}
            <span style={{ color: "#20ad96" }}>from 8 years</span>
          </h1>
          <p style={styles.paragraph}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button
            style={styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Register
          </button>
        </div>
        <div style={styles.right}>
          <div style={styles.imagePlaceholder}>Illustration/Image</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
