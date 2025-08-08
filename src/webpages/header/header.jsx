import React from "react";
import icon from "../../assets/img/icon.png";

const Header = () => {
  const headerStyle = {
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
  };

  const container = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const logoSection = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoImage = {
    width: "40px",
    height: "25px",
  };

  const logoText = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
  };

  const nav = {
    display: "flex",
    gap: "60px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
  };

  const buttonGroup = {
    display: "flex",
    gap: "10px",
  };

  const loginBtn = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#fff",
    color: "green",
    border: "1px solid green",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const signupBtn = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#21d421",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <header className="fixed-header" style={headerStyle}>
      <div style={container}>
        <div style={logoSection}>
          <img src={icon} alt="Logo" style={logoImage} />
          <div style={logoText}>Nexcent</div>
        </div>
        <div>
          <nav>
          <ul style={nav}>
            {[
              "Home",
              "Services",
              "Feature",
              "Product",
              "Testimonial",
              "FAQ",
            ].map((item) => (
              <li key={item}>
                <a href="#" style={linkStyle}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          </nav>
        </div> 
        <div style={buttonGroup}>
          <button style={loginBtn}>Login</button>
          <button style={signupBtn}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
