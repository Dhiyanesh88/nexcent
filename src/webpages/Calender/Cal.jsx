import Unlockimage from "../../assets/img/Calender.png"; 

function Cal() {

  const styles = {
    hero: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 5% 40px",
      backgroundColor: "#ffffffff",
      boxSizing: "border-box",
      minHeight: "calc(70vh - 80px)",
      width: "100%",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      gap: "60px",
    },
    right: {
      flex: "1 1 60%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      paddingRight: "100px",
    },
    left: {
      flex: "1 1 40%",
      minWidth: "300px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      minHeight: "300px",
    },
    heading: {
      fontSize: "clamp(36px, 5vw, 30px)",
      color: "#414141ff",
      fontWeight: 600,
      lineHeight: "44px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },

    paragraph: {
      fontSize: "clamp(14px, 2vw, 10px)",
      color: "#5a5d77",
      fontWeight: 400,
      lineHeight: "24px",
      margin: 0,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "rgba(76, 175, 79, 1)",
      color: "white",
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
  };

  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={Unlockimage} alt="Unlock" style={styles.image} />
        </div>
        <div style={styles.right}>
          <h1 style={styles.heading}>
            How to design your site footer like we did
          </h1>
          <p style={styles.paragraph}>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Cal;
