import React from "react";

function Hero() {
  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "70px 65px 40px", 
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    minHeight: "calc(100vh - 80px)",
  };

  const container = {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const left = {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const right = {
    flex: "1 1 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const heading = {
    fontSize: "48px",
    color: "#333461",
    fontWeight: 800,
    lineHeight: "1.2",
  };

  const paragraph = {
    fontSize: "18px",
    color: "#5a5d77",
    lineHeight: "1.6",
  };

  const button = {
    padding: "12px 24px",
    backgroundColor: "#20ad96",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    width: "fit-content",
  };

  return (
    <section style={heroStyle}>
      <div style={container}>
        <div style={left}>
          <h1 style={heading}>
            Lessons and insights <span>from 8 years</span>
          </h1>
          <p style={paragraph}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button style={button}>Register</button>
        </div>
        <div style={right}>{/* You can add image or illustration here */}</div>
      </div>
    </section>
  );
}

export default Hero;
