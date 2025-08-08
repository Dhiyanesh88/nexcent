import React, { useState, useEffect } from "react";
import Logo1 from "../../assets/img/A-Icon1.png";
import Logo2 from "../../assets/img/A-Icon2.png";
import Logo3 from "../../assets/img/A-Icon3.png";
import Logo4 from "../../assets/img/A-Icon4.png";

function Achieve() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  const styles = {
    Achieve: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "70px 5% 40px",
      backgroundColor: "rgba(245, 247, 250, 1)",
      boxSizing: "border-box",
      minHeight: "calc(60vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
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
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "20px",
    },
    heading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "#414141ff",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      width: "65%",
    },
    paragraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "#5a5d77",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
    },
    containerbox: {
      width: isMobile ? "100%" : "40%",
      flexDirection: "row",
      display: "flex",
      gap: "15px",
    },
    containerboxtext: {
      flexDirection: "column",
      textAlign: isMobile ? "center" : "left",
      marginLeft: isMobile ? "0" : "10px",
    },

    boxheading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      padding: "0px",
    },
    boxparagraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
    },
    image: {
      width: "50px",
      height: "58px",
      paddingTop: "10px",
    },
  };

  return (
    <section style={styles.Achieve}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Helping a local{" "}
            <span style={{ color: "rgba(76, 175, 79, 1)" }}>
              business reinvent itself
            </span>
          </h1>
          <p style={styles.paragraph}>
            We reached here with our hard work and dedication
          </p>
        </div>
        <div style={styles.right}>
          <div style={styles.containerbox}>
            <img src={Logo1} alt="Members" style={styles.image} />
            <div style={styles.containerboxtext}>
              <h1 style={styles.boxheading}>2,245,341</h1>
              <p style={styles.boxparagraph}>Members</p>
            </div>
          </div>
          <div style={styles.containerbox}>
            <img src={Logo2} alt="Members" style={styles.image} />
            <div style={styles.containerboxtext}>
              <h1 style={styles.boxheading}>46,328</h1>
              <p style={styles.boxparagraph}>Clubs</p>
            </div>
          </div>
          <div style={styles.containerbox}>
            <img src={Logo3} alt="Members" style={styles.image} />
            <div style={styles.containerboxtext}>
              <h1 style={styles.boxheading}>828,867</h1>
              <p style={styles.boxparagraph}>Event Bookings</p>
            </div>
          </div>
          <div style={styles.containerbox}>
            <img src={Logo4} alt="Members" style={styles.image} />
            <div style={styles.containerboxtext}>
              <h1 style={styles.boxheading}>1,926,436</h1>
              <p style={styles.boxparagraph}>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achieve;
