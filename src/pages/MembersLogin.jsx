import { useState } from 'react';
import '../styles/MembersLogin.css';

export default function MembersLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="login-page">
      <div className="login-grid">

        {/* Left Side - Quote Panel */}
        <div className="login-left">
          <div className="login-left-header">
            <img src="/images/logo.png" alt="JCI Logo" className="login-logo" />
          </div>

          <div className="login-quote-section">
            <span className="login-quote-mark">"</span>
            <p className="login-quote-text">
              From within the walls of the soul of this organization wherein the foundation of character and good citizenship are laid, I hope a message will come in the sometime of tomorrow that will stir the people towards the establishment of a permanent and everlasting world peace.
            </p>
          </div>

          <div className="login-founder">
            <div className="founder-photo-frame">
              <img src="/images/founder.png" alt="Sir Henry Giessenbier" />
            </div>
            <h3 className="founder-name">SIR HENRY GIESSENBIER</h3>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-right">
          <div className="login-form-wrapper">
            <h1 className="login-welcome">WELCOME</h1>
            <h2 className="login-portal-title">to JCI India Members Portal</h2>

            <h3 className="login-here">Login Here</h3>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input type="text" id="username" placeholder="" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder=""
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="agree">
                I agree to the <a href="#">privacy policy</a> and <a href="#">terms and conditions</a>.
              </label>
            </div>

            <div className="login-buttons">
              <button className="btn-login">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                LOGIN
              </button>
              <button className="btn-activate">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
                ACTIVATE ACCOUNT
              </button>
            </div>

            <div className="login-footer-links">
              <a href="#">ABOUT US</a>
              <a href="#">CONTACT US</a>
              <a href="#">FORGOT PASSWORD</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
