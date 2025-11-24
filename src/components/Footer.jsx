import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">


        <div className="footer-col">
          <h3 className="footer-title">Doshop</h3>
          <p className="footer-text">
            Your one-stop store for electronics, fashion, home essentials and more.
          </p>
        </div>


        <div className="footer-col">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Offers</li>
          </ul>
        </div>


        <div className="footer-col">
          <h4 className="footer-subtitle">Contact</h4>
          <ul className="footer-links">
            <li>Email: support@doshop.com</li>
            <li>Phone: +91 9392423965</li>
            <li>Location: kurnool, India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Doshop — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
