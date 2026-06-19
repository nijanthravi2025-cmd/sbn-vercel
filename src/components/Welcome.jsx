import { useAdmin } from '../context/AdminContext';
import '../styles/Welcome.css';

export default function Welcome() {
  const { siteData } = useAdmin();
  const { title, description, features, statsNumber, statsText, image } = siteData.welcomeData;

  return (
    <section className="welcome split-section">
      <div className="container split-container">
        <div className="split-left welcome-text">
          <h2 className="text-gradient">{title}</h2>
          <p>{description}</p>
          <ul className="feature-list">
            {features.map((item, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="split-right welcome-image">
          <div className="image-wrapper">
            <img src={image} alt="Welcome visual" loading="lazy" />
            <div className="stats-badge">
              <span className="number">{statsNumber}</span>
              <span className="badge-text">{statsText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
