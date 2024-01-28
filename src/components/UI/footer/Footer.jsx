import React, { useState } from "react";
import './footer.css';
import MyButton from "../buttons/MyButton";
import MyInput from "../input/MyInput";

const Footer = () => {
  const [email, setEmail] = useState('')

  const addNewEmail = () => {
    console.log(email)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Help</h3>
          <a href="contactUs.js">Contact Us</a>
          <a href="faqs.js">FAQs</a>
          <a href="termsAndConditions.js">Terms and Conditions</a>
          <a href="privacyPolicy.js">Privacy Policy</a>
          <a href="siteMap.js">Site Map</a>

          <div className="copyright">
            <p>&copy; 2024 Travel Agency. All Rights Reserved</p>
          </div>
        </div>


        <div className="footer-section-newsletter">
          <h3>Newsletter</h3>
          <form className="newlstar">
            <MyInput
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              placeholder="Your email" />
              <MyButton >Subscribe</MyButton>

          </form>
          <p>Subscribe to our newsletter for updates.</p>
        </div>


      </div>

    </footer>

  );
}

export default Footer