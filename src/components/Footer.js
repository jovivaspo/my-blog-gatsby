/*MODULES*/
import React from "react";

/*COMPONENTS*/
import Logo from "./logo";
/*CSS*/
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first-container">
        <Logo />
        <div className="footer-first-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-second-menu">
        <ul>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Legal</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
