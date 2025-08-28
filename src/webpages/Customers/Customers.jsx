import React, { useState, useEffect, use } from "react";
import Unlockimage from "../../assets/img/T.jpg";
import Logo1 from "../../assets/img/Logo.png";
import Logo2 from "../../assets/img/Logo1.png";
import Logo3 from "../../assets/img/Logo2.png";
import Logo4 from "../../assets/img/Logo3.png";
import Logo5 from "../../assets/img/Logo4.png";
import Logo6 from "../../assets/img/Logo5.png";

function Customer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [backendData, setBackendData] = useState(null);
  
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/nexent_api/customer.php");
      const data = await response.json();
      setBackendData(data);
    } catch (error) {
      console.error("Error fetching community update data:", error);
    }
  };
  fetchData();
}, []);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
  const styles = {
    Customer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 5% 40px",
      backgroundColor: "rgba(245, 247, 250, 1)",
      boxSizing: "border-box",
      minHeight: "calc(70vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
      gap: "45px",
    },
    right: {
      flex: "1 1 60%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    left: {
      flex: "1 1 40%",
      display: "flex",
      justifyContent: "center",
    },

    paragraph: {
      fontSize: "clamp(14px, 2vw, 10px)",
      color: "#5a5d77",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
      width: "85%",
    },
    button: {
      padding: "12px 24px",
      color: "rgba(76, 175, 79, 1)",
      backgroundColor: "rgba(245, 247, 250, 1)",
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
    logoimage: {
      width: "48px",
      height: "48px",
    },
    links: {
      flexDirection: isMobile? "row": "row",
      display: "flex",
      justifyContent: "",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap", 
      width: "100%",
      gap: "20px",
    },
    botombox: {
      flexDirection: "column",
      display: "flex",
      width: "100%",
    },
    botomboxhead: {
      color: "rgba(76, 175, 79, 1)",
      fontSize: "clamp(20px, 2vw, 10px)",
      fontWeight: 600,
      lineHeight: "28px",
      letterSpacing: "0",
    },
    botomboxpara: {
      color: "rgba(137, 147, 158, 1)",
      fontSize: "clamp(16px, 2vw, 10px)",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0",
    },
  };

  return (
    <section style={styles.Customer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={Unlockimage} alt="Unlock" style={styles.image} />
        </div>
        <div style={styles.right}>
          <p style={styles.paragraph}>
            {backendData?.paragraph}
          </p>
          <div style={styles.botombox}>
            <h5 style={styles.botomboxhead}>{backendData?.name}</h5>
            <p style={styles.botomboxpara}>
              {backendData?.intro}
            </p>
          </div>
          <div style={styles.links}>
             {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} style={styles.logoimage} />
            ))}
            <a style={styles.button}>Meet all customers →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
