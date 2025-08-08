import React, { useState } from "react";
import IMG1 from "../../assets/img/UPD1.jpg"; 
import IMG2 from "../../assets/img/UPD2.jpg"; 
import IMG3 from "../../assets/img/UPD3.jpg"; 


function Communityupd() {

  const styles = {
    Community: {
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
      margin: "20px",
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
      gap: "50px",
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
      width: "43%",
    },

    paragraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
      alignItems: "center",
      textAlign: "center",
      width: "50%",
    },
    image: {
      width: "368px",
      height: "286px",
      borderRadius: "20px",
    },
    containerbox: {
      width: "30%",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
    },
    floatbox: {
      width: "80%",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "rgba(245, 247, 250, 1)",
      marginTop: "-90px",
      marginLeft: "40px",
      position: "absolute",
      borderRadius: "8px",
      padding: "12px 24px",
      boxShadow: "2px 2px 2px rgba(171, 190, 209, 0.4)",
    },
    boxparagraph: {
      fontSize: "clamp(20px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 600,
      lineHeight: "28px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "15px",
    },
    button: {
      padding: "12px 24px",
      color: "rgba(76, 175, 79, 1)",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      width: "fit-content",
    },
  };

  return (
    <section style={styles.Community}>
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.heading}>Caring is the new marketing</h1>
          <p style={styles.paragraph}>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div style={styles.botom}>
          <div style={styles.containerbox}>
            <img src={IMG1} alt="L1" style={styles.image} />
            <div style={styles.floatbox}>
              <p style={styles.boxparagraph}>
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <a style={styles.button}>Read More </a>
            </div>
          </div>

          <div style={styles.containerbox}>
            <img src={IMG2} alt="L2" style={styles.image} />
            <div style={styles.floatbox}>
              <p style={styles.boxparagraph}>
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <a style={styles.button}>Read More</a>
            </div>
          </div>

          <div style={styles.containerbox}>
            <img src={IMG3} alt="l3" style={styles.image} />
            <div style={styles.floatbox}>
              <p style={styles.boxparagraph}>
                Revamping the Membership Model with Triathlon Australia
              </p>
              <a style={styles.button}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Communityupd;