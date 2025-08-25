import React, { useState, useEffect } from "react";
import { href, Link } from "react-router-dom";
import icon from "../../assets/img/icon.png";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Feature", href: "#feature" },
    { name: "Product", href: "#product" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 950;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
      padding: "0 20px",
      height: "80px",
      position: "relative",
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      paddingRight: "20px",
    },
    logoImage: { width: "40px", height: "25px" },
    logoText: { fontSize: "1.5rem", fontWeight: "bold", color: "black" },
    nav: { display: "flex", gap: "60px", listStyle: "none", margin: 0, padding: 0 },
    linkStyle: { textDecoration: "none", color: "#333", fontWeight: 500 },
    buttonGroup: { display: isMobile ? "none" : "flex", gap: "10px" },
    loginBtn: {
      padding: "0.6rem 1.2rem",
      backgroundColor: "#fff",
      color: "rgba(76, 175, 79, 1)",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    signupBtn: {
      backgroundColor: "rgba(76, 175, 79, 1)",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    hamburger: { display: isMobile ? "flex" : "none", flexDirection: "column", gap: "5px", cursor: "pointer" },
    bar: { width: "25px", height: "3px", backgroundColor: "#125010ff" },
    mobileMenuOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 21, 0, 0.21)",
      display: menuOpen ? "block" : "none",
      zIndex: 999,
    },
    mobileMenu: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "50%",
      height: "100%",
      backgroundColor: "#fff",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
      transform: menuOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease-in-out",
      zIndex: 1000,
    },
    mobileNav: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "30px" },
    mobileBtnGroup: { display: "flex", flexDirection: "column", gap: "10px" },
  };

  return (
    <>
      <header style={styles.headerStyle}>
        <div style={styles.container}>
          {/* Logo */}
          <div style={styles.logoSection}>
            <img src={icon} alt="Logo" style={styles.logoImage} />
            <div style={styles.logoText}>Nexcent</div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <nav>
                <ul style={styles.nav}>
                  {navLinks.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} style={styles.linkStyle}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div style={styles.buttonGroup}>
                <button style={styles.loginBtn}>Login</button>
                <button style={styles.signupBtn}>Sign Up</button>
              </div>
            </>
          )}

          {/* Hamburger */}
          {isMobile && (
            <div style={styles.hamburger} onClick={() => setMenuOpen(true)}>
              <div style={styles.bar}></div>
              <div style={styles.bar}></div>
              <div style={styles.bar}></div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div style={styles.mobileMenuOverlay} onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      {isMobile && (
        <div style={styles.mobileMenu}>
          <nav>
            <ul style={styles.mobileNav}>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} style={styles.linkStyle} onClick={closeMenu}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div style={styles.buttonGroup}>
            <href to="./backend/login" style={{ textDecoration: "none" }}>
              <button style={styles.loginBtn}>Login</button>
            </href>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button style={styles.signupBtn}>Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
