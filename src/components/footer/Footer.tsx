import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        <span style={{ fontSize: "14px" }}>Developed by</span>

        <span
          style={{ fontSize: "16px", fontFamily: "math", fontWeight: "bold" }}
        >
          {" "}
          CloudNeurix
        </span>
      </span>

      <span>© 2024 All Rights Reserved, Garnish</span>
    </div>
  );
};

export default Footer;
