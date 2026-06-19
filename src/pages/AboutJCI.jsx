import '../styles/AboutJCI.css';

export default function AboutJCI() {
  return (
    <div className="about-jci-page">
      <div className="about-hero">
        <h1>About JCI</h1>
        <p>Home / About JCI</p>
      </div>

      <div className="about-content container">
        <div className="about-grid">
          
          <div className="about-image-column">
            <div className="logo-box">
              <img src="/images/logo.png" alt="JCI Logo White" className="white-logo" />
            </div>
          </div>
          
          <div className="about-text-column">
            <h2>About JCI</h2>
            <p>
              Junior Chamber International (JCI) is a worldwide community of <strong>young active citizens ages between 18-40</strong> who share the belief that in order to create positive change, engaging in activities ranging from community development to international projects, members demonstrate their social responsibility and improve themselves through participation, leadership and action.
            </p>
            
            <blockquote>
              <span className="quote-mark">“</span>
              <p>With over 5,000 Local Organizations in more than 100 countries and territories, JCI forms a vibrant international community of nearly 200,000 active citizens.</p>
            </blockquote>
            
            <p>
              All members belong to a JCI Local Organization where they focus on finding solutions to improve their local community. Local Organizations are affiliated to National Organizations where members coordinate activities on national and international scales. This structure links JCI members together to form a global grassroots movement creating global impact through local action.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
