import React, { useState, useEffect } from "react";
import Unlockimage from "../../assets/img/Unlock.jpg";

function Unlock() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const styles = {
    Unlock: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "clamp(0px,5vw,40px) clamp(20px,5vw,40px) clamp(0px,5vw,40px)",
      backgroundColor: "#ffffffff",
      boxSizing: "border-box",
      minHeight: "calc(70vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      gap: "clamp(0px,3vw,30px)",
      flexDirection: isMobile ? "column" : "row",
    },
    right: {
      flex: "1 1 60%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      // paddingRight: "100px",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign:  "flex-start" ,
    },
    left: {
      flex: "1 1 40%",
      minWidth: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
    },
    heading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "#414141ff",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },

    paragraph: {
      fontSize: "clamp(14px, 2vw, 10px)",
      color: "#5a5d77",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "rgba(76, 175, 79, 1)",
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
    <section style={styles.Unlock}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={Unlockimage} alt="Unlock" style={styles.image} />
        </div>
        <div style={styles.right}>
          <h1 style={styles.heading}>
            The unseen of spending three years at Pixelgrade
          </h1>
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Unlock;
