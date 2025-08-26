import React, { useState, useEffect } from "react";
import Logo1 from "../../assets/img/A-Icon1.png";
import Logo2 from "../../assets/img/A-Icon2.png";
import Logo3 from "../../assets/img/A-Icon3.png";
import Logo4 from "../../assets/img/A-Icon4.png";

function Achieve() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 425);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [isTab, setIsTab] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const achieveData = [
  {
    id: 1,
    img: Logo1,
    count: "2,245,341",
    label: "Members",
  },
  {
    id: 2,
    img: Logo2,
    count: "46,328",
    label: "Clubs",
  },
  {
    id: 3,
    img: Logo3,
    count: "828,867",
    label: "Event Bookings",
  },
  {
    id: 4,
    img: Logo4,
    count: "1,926,436",
    label: "Payments",
  },
];

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
      flexDirection: isTab ? "column" : isMobile ? "column" : "row",
      gap: "24px",
    },
    left: {
      flex: "1 1 50%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    right: {
      flex: "1 1 50%",
      display: "flex",
      flexWrap: isMobile ? "nowrap" : "wrap", // allow two-column wrap on tablet/laptop
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "flex-start" : "flex-start",
      alignItems: isMobile ? "flex-start" : "center",
      gap: isMobile ? "30px" : "40px", 
    },
    heading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "#414141ff",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      width: isMobile ? "100%" : "65%",
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
      width: isMobile ? "100%" : "45%", // two per row on larger screens
      display: "flex",
      flexDirection: "row",
      gap: "10px",
    },
    containerboxtext: {
      display: "flex",
      flexDirection: "column",
      textAlign: isMobile ? "center" : "left",
      marginLeft: isMobile ? "0" : "10px",
    },

    boxheading: {
      fontSize: "clamp(36px, 3vw, 20px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      padding: "0px",
    },
    boxparagraph: {
      fontSize: "clamp(18px, 2vw, 15px)",
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
  {achieveData.map((item) => (
    <div key={item.id} style={styles.containerbox}>
      <img src={item.img} alt={item.label} style={styles.image} />
      <div style={styles.containerboxtext}>
        <h1 style={styles.boxheading}>{item.count}</h1>
        <p style={styles.boxparagraph}>{item.label}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default Achieve;
