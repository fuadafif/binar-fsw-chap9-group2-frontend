import "../../assets/footer/css/Footer.css";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function HomeNav() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>

            <div class="social-links">
              <a href="https://www.facebook.com/" type="button" className="btn-lg fs-5">
                <i class="fab fa-facebook-f">
                  <FaFacebookF />{" "}
                </i>
              </a>
              <a href="https://twitter.com/" type="button" className="btn-lg fs-5">
                <i class="fab fa-twitter">
                  <FaTwitter />{" "}
                </i>
              </a>
              <a href="https://www.google.com/" type="button" className="btn-lg fs-5">
                <i class="fab fa-instagram">
                  <FaGoogle />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeNav;
