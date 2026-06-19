import '../styles/ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contact-us-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Home / Contact Us</p>
      </div>

      <div className="contact-content">
        <h2 className="contact-heading">Feel free to contact us.</h2>

        <div className="contact-cards">
          <div className="contact-card">
            <h3>Location</h3>
            <p>National Head Quarters 506 Windfall,<br/>Sahar Plaza, J.B. Nagar, Andheri<br/>(EAST) Mumbai 400 059</p>
          </div>
          <div className="contact-card">
            <h3>Email Address</h3>
            <p><a href="mailto:info@jciindia.in">info@jciindia.in</a></p>
          </div>
          <div className="contact-card">
            <h3>Call Us Now</h3>
            <p><a href="tel:02271117112">(022)-71117112</a></p>
          </div>
        </div>
        
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0125866750017!2d72.8687355153202!3d19.10708688706981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c841315fcb63%3A0xc546d1b3db92bc13!2sJCI%20INDIA%20NATIONAL%20HEADQUARTERS!5e0!3m2!1sen!2sin!4v1718712345678!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JCI India National Headquarters Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
