import React, { useState } from "react";
import Logo1 from "../../assets/img/Logo.png"; 
import Logo2 from "../../assets/img/Logo1.png"; 
import Logo3 from "../../assets/img/Logo2.png";  

function Community() {

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
    },
    image: {
      width: "48px",
      height: "48px",
    },
    containerbox: {
      width: "30%",
      alignItems: "center",
      textAlign: "center",
    },
    boxheading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
      alignItems: "center",
      textAlign: "center",
      padding:"20px"
    },
    boxparagraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
      alignItems: "center",
      textAlign: "center",
    },
  };

  return (
    <section style={styles.Community}>
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.heading}>
            Manage your entire community in a single system
          </h1>
          <p style={styles.paragraph}>Who is Nextcent suitable for?</p>
        </div>
        <div style={styles.botom}>
          <div style={styles.containerbox}>
            <img src={Logo1} alt="L1" style={styles.image} />
            <h1 style={styles.boxheading}>Membership Organisations</h1>
            <p style={styles.boxparagraph}>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div style={styles.containerbox}>
            <img src={Logo2} alt="L2" style={styles.image} />
            <h1 style={styles.boxheading}>National Associations</h1>
            <p style={styles.boxparagraph}>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div style={styles.containerbox}>
            <img src={Logo3} alt="l3" style={styles.image} />
            <h1 style={styles.boxheading}>Clubs And Groups</h1>
            <p style={styles.boxparagraph}>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
