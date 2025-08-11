import React, { useState, useEffect } from "react";
import icon from "../../assets/img/icon.png";

export default function FooterSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 426);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 426);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const styles = {
  topSection: {
    backgroundColor: "#f8fafc",
    textAlign: "center",
    padding: "40px 20px",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  topSectioncontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "clamp(90%, 70vw, 50%)", // ✅ responsive width
  },
  heading: {
    fontSize: "clamp(28px, 3.5vw, 54px)", // ✅ responsive font size
    fontWeight: "600",
    color: "rgba(21, 21, 21, 1)",
    marginBottom: "20px",
    lineHeight: "clamp(40px, 6vw, 76px)", 
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(76, 175, 79, 1)",
    color: "#ffffff",
    border: "none",
    padding: "14px 32px",
    fontSize: "clamp(14px, 1.2vw, 18px)", 
    borderRadius: "4px",
    cursor: "pointer",
    gap: "8px",
  },
  footer: {
    backgroundColor: "rgba(38, 50, 56, 1)",
    color: "#ffffff",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-around",
    alignItems: isMobile ? "center" : "flex-start",
    padding: "30px 20px",
    flexWrap: "wrap",
    gap: "20px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "#ffffff",
    minWidth: isMobile ? "100%" : "clamp(200px, 20vw, 300px)", 
  },
  columncontainer: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "40px",
    justifyContent: isMobile ? "center" : "space-evenly",
  },
  columncontainerlinks: {
    display: "flex",
    flexDirection: "row", 
  },
  columnlinks: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "#ffffff",
    textDecoration: "none",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    width: isMobile ? "100%" : "clamp(200px, 20vw, 300px)", 
    color: "#111827",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  logoHeading: {
    fontWeight: "bold",
  },
  copyright: {
  fontSize: "clamp(12px, 1.2vw, 14px)", // ✅ scales between small and large screens
  fontWeight: "400",
  lineHeight: "clamp(18px, 2vw, 20px)", // ✅ smooth vertical rhythm
  color: "rgba(245, 247, 250, 1)",
},

  logoImage: {
    width: "40px",
    height: "25px",
  },
  ab: {
    fontSize: "clamp(12px, 2vw, 16px)", // ✅ responsive link size
    fontWeight: "400",
    color: "rgba(245, 247, 250, 1)",
  },
  abc: {
    fontSize: "clamp(18px, 2vw, 24px)", // ✅ responsive footer heading
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },
  logo: {
    flexDirection: "row",
    display: "flex",
    gap: "10px",
  },
};




  return (
    <>
      <div style={styles.topSection}>
        <div style={styles.topSectioncontainer}>
          <h1 style={styles.heading}>
            Pellentesque suscipit  fringilla libero eu.
          </h1>
          <button style={styles.button}>Get a Demo →</button>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.column}>
          <div style={styles.logo}>
            <img src={icon} alt="Logo" style={styles.logoImage} />
            <h2 style={styles.logoHeading}>Nexcent</h2>
          </div>
          <p style={styles.copyright}>
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>
          <div style={styles.socialIcons}>
            <a>🌐</a>
            <a>🐦</a>
            <a>▶</a>
          </div>
        </div>

        <div style={styles.columncontainer}>
          <div style={styles.columncontainerlinks}>
            <div style={styles.column}>
            <h4 style={styles.abc}>Company</h4>
            <div style={styles.columnlinks}>
              <a style={styles.ab}>About us</a>
              <a style={styles.ab}>Blog</a>
              <a style={styles.ab}>Contact us</a>
              <a style={styles.ab}>Pricing</a>
              <a style={styles.ab}>Testimonials</a>
            </div>
          </div>

          <div style={styles.column}>
            <h4 style={styles.abc}>Support</h4>
            <div style={styles.columnlinks}>
              <a style={styles.ab}>Help center</a>
              <a style={styles.ab}>Terms of service</a>
              <a style={styles.ab}>Legal</a>
              <a style={styles.ab}>Privacy policy</a>
              <a style={styles.ab}>Status</a>
            </div>
          </div>
          </div>
          

          <div style={styles.column}>
            <h4 style={styles.abc}>Stay up to date</h4>
            <input type="email" placeholder="Your email address" style={styles.input} />
          </div>
        </div>
      </footer>
    </>
  );
}



