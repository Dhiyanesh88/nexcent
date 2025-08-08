import React from "react";
import Logo1 from "../../assets/img/logo1.png";
import Logo2 from "../../assets/img/logo2.png";
import Logo3 from "../../assets/img/logo3.png";

function Achieve() {
  const styles = {
    Achieve: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "70px 5% 40px",
      backgroundColor: "#f4f4f4ff",
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
      flexDirection: "row",
      gap: "40px",
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
      width: "40%",
      flexDirection: "row",
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
      width: "48px",
      height: "48px",
    },
  };

  return (
    <section style={styles.Achieve}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Helping a local{" "}
            <span style={{ color: "#44c55bff" }}>business reinvent itself</span>
          </h1>
          <p style={styles.paragraph}>
            We reached here with our hard work and dedication
          </p>
        </div>
        <div style={styles.right}>
          <div style={styles.containerbox}>
            <img src={Logo1} alt="Members" style={styles.image} />
            <h1 style={styles.boxheading}>2,245,341</h1>
            <p style={styles.boxparagraph}>Members</p>
          </div>
          <div style={styles.containerbox}>
            <img src={Logo1} alt="Members" style={styles.image} />
            <h1 style={styles.boxheading}>46,328</h1>
            <p style={styles.boxparagraph}>Clubs</p>
          </div>
          <div style={styles.containerbox}>
            <img src={Logo1} alt="Members" style={styles.image} />
            <h1 style={styles.boxheading}>828,867</h1>
            <p style={styles.boxparagraph}>Event Bookings</p>
          </div>
          <div style={styles.containerbox}>
            <img src={Logo1} alt="Members" style={styles.image} />
            <h1 style={styles.boxheading}>1,926,436</h1>
            <p style={styles.boxparagraph}>Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achieve;
