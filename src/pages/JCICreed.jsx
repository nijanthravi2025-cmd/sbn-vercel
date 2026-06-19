import '../styles/JCICreed.css';

export default function JCICreed() {
  const creedItems = [
    "That faith in God gives meaning and purpose to human life",
    "That the brotherhood of man transcends the sovereignty of nations",
    "That economic justice can best be won by free men through free enterprise",
    "That government should be of laws rather than of men",
    "That earth's great treasure lies in human personality",
    "And that service to humanity is the best work of life"
  ];

  return (
    <div className="creed-page">
      <div className="creed-hero">
        <h1>JCI Creed</h1>
        <p>Home / JCI Creed</p>
      </div>

      <div className="creed-content container">
        <div className="creed-grid">
          
          <div className="founder-column">
            <div className="founder-image-wrapper">
              <img src="/images/founder.png" alt="Henry Giessenbier" className="founder-image" />
            </div>
            <div className="founder-info">
              <h3>Henry Giessenbier</h3>
              <p className="founder-title">Founder</p>
              <p className="founder-org">Junior Chamber International</p>
            </div>
          </div>
          
          <div className="creed-text-column">
            <h2 className="creed-title">JCI Creed</h2>
            <h3 className="we-believe">We believe</h3>
            
            <hr className="creed-divider" />
            
            <ul className="creed-list">
              {creedItems.map((item, index) => (
                <li key={index}>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#4361EE" />
                      <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
