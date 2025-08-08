import React from "react";
import icon from "../../assets/img/icon.png";

export default function FooterSection() {
  const styles = {
    topSection: {
      backgroundColor: "#f8fafc", // light background
      textAlign: "center",
      padding: "60px 20px",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "rgba(76, 175, 79, 1)",
      color: "#ffffff",
      border: "none",
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "6px",
      cursor: "pointer",
    },
    footer: {
      backgroundColor: "#111827", // dark background
      color: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      padding: "40px 10%",
      flexWrap: "wrap",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      color: "#ffffff",
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
      width: "200px",
      color: "#ffffff",
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
      fontSize: "0.9rem",
      color: "#9ca3af",
    },
    logoImage: {
      width: "40px",
      height: "25px",
    },
    ab: {
      fontSize: "14px",
      fontWeight: "400",
      color: "rgba(245, 247, 250, 1)",
    },
    abc: {
      fontSize: "20px",
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
      {/* Top Section */}
      <div style={styles.topSection}>
        <h1 style={styles.heading}>
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>
        <button style={styles.button}>Get a Demo →</button>
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        {/* Logo Column */}
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

        {/* Company Links */}
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

        {/* Support Links */}
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

        {/* Stay up to date */}
        <div style={styles.column}>
          <h4 style={styles.abc} >Stay up to date</h4>
          <input
            type="email"
            placeholder="Your email address"
            style={styles.input}
          />
        </div>
      </footer>
    </>
  );
}
