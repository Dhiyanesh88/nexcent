import React, { useState, useEffect } from "react";
import Logo1 from "../../assets/img/C-icon1.png";
import Logo2 from "../../assets/img/C-icon2.png";
import Logo3 from "../../assets/img/C-icon3.png";

function Community() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [backendData, setBackendData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/nexent_api/community.php");
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error fetching community data:", error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const communityData = {
    boxes: [
      {
        logo: Logo1,
        title: "Membership Organisations",
        description: "Our membership management software provides full automation of membership renewals and payments",
      },
      {
        logo: Logo2,
        title: "National Associations",
        description: "Our membership management software provides full automation of membership renewals and payments",
      },
      {
        logo: Logo3,
        title: "Clubs And Groups",
        description: "Our membership management software provides full automation of membership renewals and payments",
      },
    ],
  };
  const logos = [Logo1, Logo2, Logo3];
  const styles = {
    Community: {
      display: "flex",
      padding: "clamp(10px, 5vw, 70px) clamp(20px, 5vw, 60px)",
      backgroundColor: "white",
      boxSizing: "border-box",
      minHeight: "calc(10vh - 80px)",
      width: "100%",
      maxWidth: "2560px",
      minWidth: "320px",
      overflow: "hidden",
    },
    container: {
      display: "flex",
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
    bottom: {
      display: "flex",
      gap: "50px",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: "clamp(25px, 5vw, 36px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
      width: "clamp(280px, 60%, 800px)",
    },
    paragraph: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    },
    image: {
      width: "48px",
      height: "48px",
    },
    containerbox: {
      maxWidth: "clamp(280px, 90%, 400px)",
      alignItems: "center",
      textAlign: "center",
    },
    boxheading: {
      fontSize: "clamp(20px, 4vw, 30px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      padding: "clamp(10px, 1vw, 20px)",
    },
    boxparagraph: {
      fontSize: "clamp(14px, 2vw, 18px)",
      color: "rgba(113, 113, 113, 1)",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
    },
  };

  return (
    <section style={styles.Community}>
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.heading}>{backendData?.heading}</h1>
          <p style={styles.paragraph}>{backendData?.subhead}</p>
        </div>
        <div style={styles.bottom}>
          {backendData?.items?.map((item, i) => {
            const key = Object.keys(item)[0];      
            const valueKey = Object.keys(item)[1]; 
            return (
              <div key={i} style={styles.containerbox}>
                <img src={logos[i]} alt={item[key]} style={styles.image} />
                <h1 style={styles.boxheading}>{item[key]}</h1>
                <p style={styles.boxparagraph}>{item[valueKey]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Community;
