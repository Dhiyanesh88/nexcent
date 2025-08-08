import React from "react";
import icon from "../../assets/img/icon.png";

function Header() {
  const styles = {
    headerStyle: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      backgroundColor: "#fff",
      zIndex: 1000,
      flexWrap: "wrap",
      top: 0,
      left: 0,
      boxSizing: "border-box",
      padding: "0 65px",
      height: "80px",
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logoImage: {
      width: "40px",
      height: "25px",
    },
    logoText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "black",
    },
    nav: {
      display: "flex",
      gap: "60px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    linkStyle: {
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    loginBtn: {
      padding: "0.6rem 1.2rem",
      backgroundColor: "#fff",
      color: "rgba(76, 175, 79, 1)",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    signupBtn: {
      padding: "0.6rem 1.2rem",
      backgroundColor: "rgba(76, 175, 79, 1)",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <header style={styles.headerStyle}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <img src={icon} alt="Logo" style={styles.logoImage} />
          <div style={styles.logoText}>Nexcent</div>
        </div>
        <nav>
          <ul style={styles.nav}>
            {[
              "Home",
              "Services",
              "Feature",
              "Product",
              "Testimonial",
              "FAQ",
            ].map((item) => (
              <li key={item}>
                <a href="#" style={styles.linkStyle}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={styles.buttonGroup}>
          <button style={styles.loginBtn}>Login</button>
          <button style={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
