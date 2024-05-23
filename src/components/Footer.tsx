import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Blog Name. All rights reserved.</p>
    </footer>
  );
};

// Inline styles for the footer
const footerStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "#fff",
  padding: ".5rem",
  textAlign: "center",
};

export default Footer;
