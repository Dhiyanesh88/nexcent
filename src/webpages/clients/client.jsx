import React, { useState } from "react";
import clientImage from "../../assets/img/illustration.png"; 
import Logo1 from "../../assets/img/Logo.png"; 
import Logo2 from "../../assets/img/Logo1.png"; 
import Logo3 from "../../assets/img/Logo2.png"; 
import Logo4 from "../../assets/img/Logo3.png"; 
import Logo5 from "../../assets/img/Logo4.png"; 
import Logo6 from "../../assets/img/Logo5.png"; 
import Logo7 from "../../assets/img/Logo6.png"; 

function Client() {

  const styles = {
    client: {
      display: "flex",
      padding: "70px 5% 70px",
      backgroundColor: "white",
      boxSizing: "border-box",
      minHeight: "calc(10vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "40px",
    },
    top: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    botom: {
      display: "flex",
      gap: "140px",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
      alignItems: "center",
      textAlign: "center",
    },

    paragraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },
    image: {
      width: "48px",
      height: "48px",
    },
  };

  return (
    <section style={styles.client}>
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.heading}>Our Client</h1>
          <p style={styles.paragraph}>
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div style={styles.botom}>
          <img src={Logo1} alt="L1" style={styles.image} />
          <img src={Logo2} alt="L2" style={styles.image} />
          <img src={Logo3} alt="l3" style={styles.image} />
          <img src={Logo4} alt="L4" style={styles.image} />
          <img src={Logo5} alt="L5" style={styles.image} />
          <img src={Logo6} alt="L6" style={styles.image} />
          <img src={Logo7} alt="L7" style={styles.image} />
        </div>
      </div>
    </section>
  );
}

export default Client;
