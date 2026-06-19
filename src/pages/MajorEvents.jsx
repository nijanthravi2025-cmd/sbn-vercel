import '../styles/MajorEvents.css';

export default function MajorEvents() {
  const events = [
    {
      id: 'nttts',
      title: 'National Train The Trainers Seminar (NTTTS)',
      description: 'National Train The Trainers Seminar is a prestigious, four-day residential training program focused on developing trainers within the JCI India organization. The program is a key step in becoming a certified National Trainer for JCI India. NTTTS aims to equip participants with the skills and knowledge necessary to effectively conduct training sessions and contribute to the JCI training culture.',
      image: '/images/event-nttts.png',
      bgColor: '#3762A4',
      textColor: '#ffffff'
    },
    {
      id: 'author',
      title: 'JCI India Author',
      description: 'This program aims to prepare trainers who have already proven their talents in the training field for a new dimension of authoring of a training course. JCI India Author Course introduces techniques and tools to author training courses with detailed trainers\' instructions, participant\'s handouts and visual aids that will enable other trainers to efficiently conduct the course.',
      image: '/images/event-author.png',
      bgColor: '#009FDE',
      textColor: '#1a1a1a'
    }
  ];

  return (
    <div className="major-events-page">
      <div className="events-hero">
        <h1>Major Event</h1>
        <p>Home / Major Event</p>
      </div>

      <div className="events-container container">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="event-card"
            style={{ backgroundColor: event.bgColor, color: event.textColor }}
          >
            <h2 className="event-title">{event.title}</h2>
            <div className="event-body">
              <div className="event-text">
                <p>{event.description}</p>
              </div>
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
