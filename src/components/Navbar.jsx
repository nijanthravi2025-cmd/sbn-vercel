import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const navItems = [
  { label: 'Home', href: '/', hasDropdown: false },
  { 
    label: 'About Us', 
    href: '#', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'About JCI', href: '/about-jci' },
      { label: 'National President Message', href: '/president-message' },
      { label: 'JCI Creed', href: '/jci-creed' },
      { label: 'About JCI India', href: '#' }
    ]
  },
  { label: 'Major Event', href: '/major-events', hasDropdown: false },
  { 
    label: 'Join Us', 
    href: '#', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'Benefits for Members', href: '/benefits-for-members' },
      { label: 'Join JCI INDIA', href: '#' }
    ]
  },
  { label: 'Check your Membership', href: '/check-membership', hasDropdown: false },
  { label: 'Contact us', href: '/contact-us', hasDropdown: false },
  { label: 'Admin', href: '/admin', hasDropdown: false },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <Link to="/" className="logo-wrapper">
            <img src="/images/logo.png" alt="JCI Logo" className="logo-img" />
            <span className="logo-india-text">India</span>
          </Link>
        </div>

        <ul className="nav-links">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href || (item.href === '/' && location.pathname === '');
            return (
              <li key={index} className={item.hasDropdown ? 'has-dropdown' : ''}>
                <Link to={item.href} className={isActive ? 'active' : ''}>
                  {item.label}
                  {item.hasDropdown && <span className="chevron">▾</span>}
                </Link>
                {item.hasDropdown && item.dropdownItems && (
                  <ul className="dropdown">
                    {item.dropdownItems.map((dropItem, dIndex) => (
                      <li key={dIndex}>
                        <Link to={dropItem.href}>{dropItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="nav-buttons">
          <Link to="/members-login" className="btn btn-primary">MEMBERS LOGIN</Link>
        </div>

        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
