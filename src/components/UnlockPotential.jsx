import '../styles/UnlockPotential.css';

const cards = [
  {
    icon: '👥',
    iconColor: 'blue',
    title: 'Leadership Development',
    description: 'Gain hands-on experience and become a confident leader through projects and trainings',
  },
  {
    icon: '🌐',
    iconColor: 'purple',
    title: 'Global Networking',
    description: 'Connect with enterprising leaders aged 18-40 across India and 115 countries.',
  },
  {
    icon: '🎯',
    iconColor: 'orange',
    title: 'Skill Building',
    description: 'Master soft skills, entrepreneurship, and more with expert-led programs like NALANDA, ABLE and many more.',
  },
  {
    icon: '🤝',
    iconColor: 'green',
    title: 'Community Impact',
    description: 'Lead sustainable projects like that are aligned with UNSDG',
  },
  {
    icon: '🚀',
    iconColor: 'red',
    title: 'Exciting Opportunities',
    description: 'Attend global events, conventions, and conferences—like the JCI Area conferences & World Congress',
  },
];

export default function UnlockPotential() {
  return (
    <section className="unlock-potential section-padding">
      <div className="container">
        <div className="section-header">
          <span className="sub-heading">Why Join Us?</span>
          <h2>Unlock your potential and make a difference</h2>
        </div>
        <div className="up-cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="up-card">
              <div className={`up-card-icon ${card.iconColor}`}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
