import React from "react";
import icon from "../../assets/img/icon.png";


const Header = () => {
  const headerStyle = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    flexWrap: "wrap",
    position: "fixed",
    boxSizing: "border-box",
    flexDirection: "row",
    padding: "0 65px",
  };
  const headercontainer = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    flexWrap: "wrap",
    boxSizing: "border-box",
    flex: "1 1 100%",
    flexDirection: "row",
  };

  const logoSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "25%",
    flex: "1 1 25%",
    flexDirection: "row",
  };

  const logoImageStyle = {
    width: "40px",
    height: "25px",
  };

  const logoNameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    flex: "1 1 30%",
    flexDirection: "row",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "60px",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  };
  const buttons = {
    display: "flex", 
    justifyContent: "flex-end", 
    flex: "1 1 25%", 
  };


  const Login = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#ffffffff",
    color: "green",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "10px",
  };
  const Signup = {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#21d421ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "10px",
  };


  return (
    <header style={headerStyle}>
      <div style={headercontainer}>
        {/* Logo and Name */}
        <div style={logoSectionStyle}>
          <img src={icon} alt="Logo" style={logoImageStyle} />
          <div style={logoNameStyle}>Nexcent</div>
        </div>

        {/* Navigation */}
        <nav style={navStyle}>
          <ul style={navLinksStyle}>
            {[
              "Home",
              "Services",
              "Feature",
              "Product",
              "Testimonial",
              "FAQ",
            ].map((text) => (
              <li key={text}>
                <a href="#" style={navLinkStyle}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons */}
        <div style={buttons}>
          <button style={Login}>Login</button>
          <button style={Signup}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
