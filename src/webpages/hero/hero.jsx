import React, { useState, useEffect } from "react";
import heroImage from "../../assets/img/illustration.png";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    hero: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "clamp(40px, 5vw, 70px) 5% clamp(20px, 4vw, 40px)",
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
      flexDirection: isMobile ? "column-reverse" : "row", 
      gap: "clamp(20px, 4vw, 40px)",
      textAlign: isMobile ? "center" : "left",
    },
    left: {
      flex: "1 1 50%",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(16px, 3vw, 24px)",
      alignItems: isMobile ? "center" : "flex-start",
    },
    right: {
      flex: "1 1 50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontSize: "clamp(32px, 5vw, 64px)",
      color: "#414141ff",
      fontWeight: 600,
      lineHeight: "clamp(42px, 5.5vw, 76px)",
      margin: 0,
      fontFamily: "Inter, sans-serif",
    },
    paragraph: {
      fontSize: "clamp(14px, 2vw, 18px)",
      color: "#5a5d77",
      fontWeight: 400,
      lineHeight: "clamp(20px, 2.5vw, 28px)",
      margin: 0,
      fontFamily: "Inter, sans-serif",
    },
    button: {
      padding: "clamp(10px, 1.2vw, 14px) clamp(16px, 2vw, 24px)",
      backgroundColor: "rgba(76, 175, 79, 1)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "clamp(14px, 1vw, 16px)",
      fontWeight: "600",
      cursor: "pointer",
      width: "fit-content",
      transition: "background-color 0.3s ease",
    },
    image: {
      width: "100%",
      maxWidth: "clamp(250px, 28vw, 400px)",
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
          <button style={styles.button} onClick={() => window.location.href = "/signup"}>Register</button>
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
