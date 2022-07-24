import "../../assets/footer/css/Footer.css";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="parent">
          {/* about us */}
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
            </ul>
          </div>
          {/* get help */}
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          {/* social links */}
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/" type="button">
                <FaFacebookF />{" "}
              </a>
              <a href="https://twitter.com/" type="button">
                <FaTwitter />{" "}
              </a>
              <a href="https://www.google.com/" type="button">
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
