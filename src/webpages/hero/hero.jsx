import React, { useState } from "react";
import heroImage from "../../assets/img/illustration.png"; 

function Hero() {

  const styles = {
    hero: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "70px 5% 40px",
      backgroundColor: "#f4f4f4ff",
      boxSizing: "border-box",
      minHeight: "calc(100vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      gap: "40px",
    },
    left: {
      flex: "1 1 50%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    right: {
      flex: "1 1 50%",
      minWidth: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
    },
    heading: {
      fontSize: "clamp(64px, 5vw, 48px)",
      color: "#414141ff",
      fontWeight: 600,
      lineHeight: "76px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },

    paragraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "#5a5d77",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#1a9984",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      width: "fit-content",
      transition: "background-color 0.3s ease",
    },
    image: {
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      borderRadius: "12px",
      objectFit: "contain",
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Lessons and insights{" "}
            <span style={{ color: "#44c55bff" }}>from 8 years</span>
          </h1>
          <p style={styles.paragraph}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button style={styles.button}>
            Register
          </button>
        </div>
        <div style={styles.right}>
          <img
            src={heroImage}
            alt="Business growth illustration"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
