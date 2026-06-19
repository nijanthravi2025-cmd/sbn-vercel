import '../styles/Headquarters.css';

export default function Headquarters() {
  return (
    <section className="headquarters">
      <div className="container hq-content">
        <div className="hq-image">
          <img src="https://images.unsplash.com/photo-1475721025592-567406a06691?auto=format&fit=crop&q=80&w=800" alt="JCI Audience" loading="lazy" />
        </div>
        <div className="hq-text">
          <h2>National Headquarters</h2>
          <p className="hq-address">
            506 Windfall, Sahar Plaza, J.B. Nagar, Andheri (EAST) Mumbai 400059
          </p>
          <div className="hq-contact">
            <div className="contact-item">
              <span className="icon">📞</span>
              <a href="tel:022-71117112">(022)-71117112</a>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <a href="mailto:info@jciindia.in">info@jciindia.in</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
