import React, { useState, useEffect } from "react";
import IMG1 from "../../assets/img/UPD1.jpg";
import IMG2 from "../../assets/img/UPD2.jpg";
import IMG3 from "../../assets/img/UPD3.jpg";

function Communityupd() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
  Community: {
    display: "flex",
    padding: isMobile ? "40px 5%" : "40px 5% 150px",
    backgroundColor: "white",
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(24px, 4vw, 40px)", 
    width: "100%",
    margin: "auto",
  },
  top: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 2vw, 24px)",
    alignItems: "center",
    textAlign: "center",
  },
  botom: {
    display: "flex",
    gap: "clamp(32px, 5vw, 50px)", 
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: "clamp(24px, 4vw, 36px)",
    color: "rgba(77,77,77,1)",
    fontWeight: 600,
    lineHeight: "clamp(32px, 4vw, 44px)",
    margin: 0,
    fontFamily: "Inter, sans-serif",
    width: "clamp(90%, 43vw, 43%)", 
  },
  paragraph: {
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "rgba(113, 113, 113, 1)",
    fontWeight: 400,
    lineHeight: "clamp(20px, 2.5vw, 24px)",
    margin: 0,
    fontFamily: "Inter, sans-serif",
    width: "clamp(90%, 50vw, 50%)", 
  },
  image: {
    width: "clamp(100%, 30vw, 368px)", 
    height: "auto", 
    borderRadius: "20px",
  },
  containerbox: {
    display: "flex",
    flexDirection: "column",
    width: "clamp(90%, 35vw, 35%)", 
    alignItems: "center",
    position: "relative",
  },
  floatbox: {
    width: "clamp(90%, 85vw, 85%)", 
    backgroundColor: "rgba(245, 247, 250, 1)",
    marginTop: isMobile ? "0px" : "clamp(0px, 15vw , 250px)",
    position: isMobile ? "relative" : "absolute",
    borderRadius: "8px",
    padding: "clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)",
    boxShadow: "2px 2px 2px rgba(171, 190, 209, 0.4)",
    textAlign: "center",
  },
  boxparagraph: {
    fontSize: "clamp(14px, 1.5vw, 20px)",
    color: "rgba(113, 113, 113, 1)",
    fontWeight: 600,
    lineHeight: "clamp(22px, 3vw, 28px)",
    marginBottom: "clamp(8px, 2vw, 15px)",
    fontFamily: "Inter, sans-serif",
  },
  button: {
    padding: "clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)",
    color: "rgba(76, 175, 79, 1)",
    border: "none",
    borderRadius: "8px",
    fontSize: "clamp(14px, 1.8vw, 16px)",
    fontWeight: 600,
    cursor: "pointer",
    backgroundColor: "transparent",
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
          {[IMG1, IMG2, IMG3].map((img, i) => {
            const texts = [
              "Creating Streamlined Safeguarding Processes with OneRen",
              "What are your safeguarding responsibilities and how can you manage them?",
              "Revamping the Membership Model with Triathlon Australia",
            ];
            return (
              <div style={styles.containerbox} key={i}>
                <img src={img} alt={`L${i + 1}`} style={styles.image} />
                <div style={styles.floatbox}>
                  <p style={styles.boxparagraph}>{texts[i]}</p>
                  <a style={styles.button}>Read More →</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Communityupd;
