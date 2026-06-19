import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Transforming Passion<br />into Action</h1>
        <p>Empower yourself. Impact your community. Shape the future.</p>
        <a href="#" className="btn btn-primary btn-large">
          Explore our programs
        </a>
      </div>
    </section>
  );
}
