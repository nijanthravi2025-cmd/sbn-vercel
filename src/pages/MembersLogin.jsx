import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, AlertCircle, LogIn } from 'lucide-react';
import '../styles/MembersLogin.css';

// ── Hardcoded member credentials ──────────────────────────────────────────────
const VALID_USERNAME = 'member';
const VALID_PASSWORD = 'member123';
// ─────────────────────────────────────────────────────────────────────────────

export default function MembersLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem('sbn_member_auth', 'true');
        localStorage.removeItem('sbn_admin_auth'); // Logout admin if logging in as member
        // Set default profile if not exists
        if (!localStorage.getItem('sbn_member_profile')) {
          localStorage.setItem('sbn_member_profile', JSON.stringify({ name: 'Member User', image: 'https://ui-avatars.com/api/?name=Member+User&background=0D8ABC&color=fff' }));
        }
        // Dispatch custom event so Navbar can update without reload
        window.dispatchEvent(new Event('memberAuthChanged'));
        navigate('/');
      } else {
        setError('Invalid username or password. Please try again.');
        setLoading(false);
      }
    }, 600);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter your username first to reset your password.');
    } else {
      setError('');
      alert(`A password reset link has been sent to the email associated with the username: ${username}`);
    }
  };

  return (
    <div className="ml-page">
      <div className="ml-overlay"></div>

      <div className="ml-form-container">
        <div className="ml-form-card">
          
          {/* Brand Header */}
          <div className="ml-brand-header">
            <img src="/images/new-logo.png" alt="SBN Logo" className="ml-logo" />
            <div className="ml-form-badge">MEMBERS PORTAL</div>
          </div>

          <div className="ml-form-header">
            <h1 className="ml-form-title">Welcome Back</h1>
            <p className="ml-form-subtitle">Sign in to access your secure account</p>
          </div>

          {/* Form */}
          <form className="ml-form" onSubmit={handleSubmit}>

            <div className="ml-field">
              <label htmlFor="ml-username">Username</label>
              <div className="ml-input-wrap">
                <span className="ml-input-icon">
                  <User size={18} strokeWidth={2} />
                </span>
                <input
                  id="ml-username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="ml-field">
              <div className="ml-label-row">
                <label htmlFor="ml-password">Password</label>
                <a href="#" className="ml-forgot" onClick={handleForgotPassword}>Forgot password?</a>
              </div>
              <div className="ml-input-wrap">
                <span className="ml-input-icon">
                  <Lock size={18} strokeWidth={2} />
                </span>
                <input
                  id="ml-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="ml-toggle-pw"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="ml-error">
                <AlertCircle size={16} strokeWidth={2.5} />
                {error}
              </div>
            )}

            <button type="submit" className="ml-btn-login" disabled={loading}>
              {loading ? (
                <span className="ml-spinner" />
              ) : (
                <LogIn size={16} strokeWidth={2.5} />
              )}
              {loading ? 'Authenticating…' : 'Sign In'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
