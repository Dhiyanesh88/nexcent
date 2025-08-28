import React, { useState, useEffect } from "react";
import icon from "../../assets/img/icon.png";
import S1 from "../../assets/img/social1.png";
import S2 from "../../assets/img/social2.png";
import S3 from "../../assets/img/social3.png";
import S4 from "../../assets/img/social4.png";

export default function FooterSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 426);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 426);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const footerLinks = {
    company: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
    support: ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"]
  };


  const styles = {
    topSection: {
      backgroundColor: "#f8fafc",
      textAlign: "center",
      padding: "clamp(15px, 4vw, 40px) clamp(0px, 1vw, 20px)",
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    topSectioncontainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "clamp(320px, 50%, 2560px)",

    },
    heading: {
      fontSize: "clamp(29px, 3.5vw, 64px)",
      fontWeight: "600",
      color: "rgba(21, 21, 21, 1)",
      marginBottom: "20px",
      lineHeight: "clamp(36px, 6vw, 76px)",
      textAlign: "center",
    },
    button: {
      backgroundColor: "rgba(76, 175, 79, 1)",
      color: "#ffffff",
      border: "none",
      padding: "clamp(5px, 3vw, 14px) clamp(14px, 4vw, 32px)",
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
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "clamp(0px, 2vw, 90px) clamp(20px, 10vw, 100px)",
      gap: "clamp(20px, 4vw, 60px)",
    },
    columnbox: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      color: "#ffffff",
      flex: "1 1 auto",
      width: "clamp(0,2vh,100%)",
      flexWrap: "wrap",
      alignContent: "stretch",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      color: "#ffffff",
      flex: "1 1 auto",
    },
    columncontainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(20px, 5vw, 90px)",
      minWidth: 0,
    },
    columncontainerlinks: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "clamp(80px, 25vw, 120px)",
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
      fontSize: "clamp(12px, 1.2vw, 14px)",
      fontWeight: "400",
      lineHeight: "clamp(18px, 2vw, 20px)",
      color: "rgba(245, 247, 250, 1)",
      width: "clamp(60%, 100%)",
    },
    logoImage: {
      width: "40px",
      height: "25px",
    },
    ab: {
      fontSize: "clamp(12px, 2vw, 16px)",
      fontWeight: "400",
      color: "rgba(245, 247, 250, 1)",
    },
    abc: {
      fontSize: "clamp(18px, 2vw, 24px)",
      fontWeight: "600",
      color: "rgba(255, 255, 255, 1)",
    },
    logo: {
      flexDirection: "row",
      display: "flex",
      gap: "10px",
    },

    LinklogoImage: {
      width: "35px",
      height: "35px",
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
        <div style={styles.columnbox}>
          <div style={styles.logo}>
            <img src={icon} alt="Logo" style={styles.logoImage} />
            <h2 style={styles.logoHeading}>Nexcent</h2>
          </div>
          <p style={styles.copyright}>
            Copyright © 2020 Nexcent ltd.
            All rights reserved
          </p>
          <div style={styles.socialIcons}>
            <img src={S1} alt="S1" style={styles.LinklogoImage} />
            <img src={S2} alt="S2" style={styles.LinklogoImage} />
            <img src={S3} alt="S3" style={styles.LinklogoImage} />
            <img src={S4} alt="S4" style={styles.LinklogoImage} />
          </div>
        </div>

        <div style={styles.columncontainer}>
          <div style={styles.columncontainerlinks}>
            {/* Company Links */}
            <div style={styles.column}>
              <h4 style={styles.abc}>Company</h4>
              <div style={styles.columnlinks}>
                {footerLinks.company.map((link, idx) => (
                  <a key={idx} style={styles.ab}>{link}</a>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div style={styles.column}>
              <h4 style={styles.abc}>Support</h4>
              <div style={styles.columnlinks}>
                {footerLinks.support.map((link, idx) => (
                  <a key={idx} style={styles.ab}>{link}</a>
                ))}
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



