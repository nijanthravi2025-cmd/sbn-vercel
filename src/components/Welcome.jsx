import '../styles/Welcome.css';

const features = [
  'Started in the year 1949',
  'Present in 28 states and 4 union territories',
  'Divided into 28 zones',
];

export default function Welcome() {
  return (
    <section className="welcome container section-padding">
      <div className="welcome-grid">
        <div className="welcome-text">
          <h2>Welcome to JCI India</h2>
          <p>
            We are a vibrant community of young leaders aged 18-40, active
            across 28 zones and 28 states in India. As part of a global network
            spanning 115 countries, JCI India empowers passionate individuals to
            become capable leaders in government, business, and civil society.
            Through projects, trainings, and events, we turn ideas into action
            and create sustainable change
          </p>
          <ul className="feature-list">
            {features.map((item, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="welcome-image">
          <img src="/images/globe.png" alt="Globe with India highlighted" loading="lazy" />
          <div className="stats-badge">
            <span className="number">115+</span>
            <span className="badge-text">countries around the world</span>
          </div>
        </div>
      </div>
    </section>
  );
}
