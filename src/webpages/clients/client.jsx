import React, { useState, useEffect } from "react";
import Logo1 from "../../assets/img/Logo.png";
import Logo2 from "../../assets/img/Logo1.png";
import Logo3 from "../../assets/img/Logo2.png";
import Logo4 from "../../assets/img/Logo3.png";
import Logo5 from "../../assets/img/Logo4.png";
import Logo6 from "../../assets/img/Logo5.png";
import Logo7 from "../../assets/img/Logo6.png";

function Client() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [backendData, setBackendData] = useState(null);
      
     const fetchdata = async () => {
        try {
          const response = await fetch("http://localhost/nexent_api/client.php");
          const data = await response.json();
          setBackendData(data); // store data in state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        fetchdata();
      }, []);
      
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const clients = [
  { id: 1, name: "Client 1", logo: Logo1 },
  { id: 2, name: "Client 2", logo: Logo2 },
  { id: 3, name: "Client 3", logo: Logo3 },
  { id: 4, name: "Client 4", logo: Logo4 },
  { id: 5, name: "Client 5", logo: Logo5 },
  { id: 6, name: "Client 6", logo: Logo6 },
  { id: 7, name: "Client 7", logo: Logo7 },
];
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
      flexWrap: "wrap", // allow wrapping on small screens
    },
    heading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "rgba(77,77,77,1)",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
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
    // media query styles
    "@media (max-width: 768px)": {
      botom: {
        gap: "20px",
      },
      image: {
        width: "40px",
        height: "40px",
      },
    },
  };

  return (
    <section style={styles.client}>
      <div style={styles.container}>
        <div style={styles.top}>
          <h1 style={styles.heading}>Our Client </h1>
          <p style={styles.paragraph}>
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div style={styles.botom}>
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt={client.name}
              style={styles.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;
