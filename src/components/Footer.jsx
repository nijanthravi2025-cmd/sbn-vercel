import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="JCI India Logo" className="footer-logo" loading="lazy" />
            <p className="footer-description">
              JCI India is the largest youth organization providing leadership and development opportunities for youngsters within the age of 18 to 40
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">ig</a>
              <a href="#" className="social-icon">yt</a>
              <a href="#" className="social-icon">w</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About JCI</a></li>
              <li><a href="#">JCI Creed</a></li>
              <li><a href="#">About JCI India</a></li>
              <li><a href="#">Benefits for Members</a></li>
              <li><a href="#">Join JCI INDIA</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Quick links</h4>
            <ul>
              <li><a href="#">TOYP Information</a></li>
              <li><a href="#">Major Event</a></li>
              <li><a href="#">Validate Membership</a></li>
              <li><a href="#">Member Login</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Return and Refund Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-apps">
            <a href="#" className="app-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" loading="lazy" />
            </a>
            <a href="#" className="app-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Available on the App Store" loading="lazy" />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © Copyright 2026, All Rights Reserved by <a href="#">JCI India</a>
          </div>
          <div className="version">
            Version 2.6.8
          </div>
          <div className="made-with">
            Made with <span className="heart">❤</span> <a href="#">Yugox Technologies</a>
          </div>
        </div>
        <div className="footer-notice">
          Recent version is 2.6.8. If your website version is different than the recent version, kindly clear your caches and refresh the web page.
        </div>
      </div>
    </footer>
  );
}
