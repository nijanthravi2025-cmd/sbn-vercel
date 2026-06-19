import '../styles/PresidentMessage.css';

export default function PresidentMessage() {
  return (
    <section className="president-message section-padding">
      <div className="container president-grid">
        <div className="president-image">
          <img src="/images/president.png" alt="JFG Bharath N Acharya" loading="lazy" />
        </div>
        <div className="president-text">
          <span className="subtitle">Our National President</span>
          <h2>JFG Bharath N Acharya</h2>
          <p className="greeting">
            My Dear Brothers and Sisters of JCI India,
          </p>
          <p className="message-body">
            It is a great pleasure to share my thoughts with all of you as we
            begin this new journey together. The year 2026 is going to be an
            incredible time for our organization. As your National President, I
            want us to focus on making this &quot;The Year of Legacy
            Reimagined.&quot; This is our time to upgrade our standards, change
            how we lead, and show the world the true...
          </p>
          <a href="#" className="btn btn-yellow">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
