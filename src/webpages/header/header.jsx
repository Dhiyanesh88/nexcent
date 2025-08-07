import React from "react";

const Header = () => {
  const headerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#ffffffff",
    flexWrap: "wrap",
  };

  const logoSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoImageStyle = {
    width: "40px",
    height: "40px",
  };

  const logoNameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
  };

  const navStyle = {
    display: "flex",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
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
      {/* Logo and Name */}
      <div style={logoSectionStyle}>
        <img src="/logo.png" alt="Logo" style={logoImageStyle} />
        <div style={logoNameStyle}>Nexcent</div>
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        <ul style={navLinksStyle}>
          {["Home", "Services", "Feature", "Product", "Testimonial", "FAQ"].map(
            (text) => (
              <li key={text}>
                <a href="#" style={navLinkStyle}>
                  {text}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Buttons */}
      <div>
        <button style={Login}>Login</button>
        <button style={Signup}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
