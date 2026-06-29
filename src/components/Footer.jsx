import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/new-logo.png" alt="Social Business Network Logo" className="footer-logo" loading="lazy" />
            <p className="footer-description">
              Social Business Network is the premier platform for young entrepreneurs and professionals within the age of 18 to 40 to connect, collaborate, and grow.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about-sbn">About SBN</a></li>
              <li><a href="/sbn-mission">SBN Mission</a></li>
              <li><a href="/benefits-for-members">Benefits for Members</a></li>
              <li><a href="/join-sbn">Join SBN</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Quick links</h4>
            <ul>
              <li><a href="#">SBN Awards Information</a></li>
              <li><a href="/major-events">Major Event</a></li>
              <li><a href="/check-membership">Validate Membership</a></li>
              <li><a href="/members-login">Member Login</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Return and Refund Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-apps">
            <a href="#" className="app-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" loading="lazy" />
            </a>

          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © Copyright 2026, All Rights Reserved by <a href="#">Social Business Network</a>
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
