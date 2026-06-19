import '../styles/MajorEvents.css';

export default function MajorEvents() {
  const events = [
    {
      id: 'nttts',
      title: 'National Train The Trainers Seminar (NTTTS)',
      description: 'National Train The Trainers Seminar is a prestigious, four-day residential training program focused on developing trainers within the JCI India organization. The program is a key step in becoming a certified National Trainer for JCI India. NTTTS aims to equip participants with the skills and knowledge necessary to effectively conduct training sessions and contribute to the JCI training culture.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/nttts.webp',
      bgColor: '#3A67B1',
      textColor: '#ffffff'
    },
    {
      id: 'author',
      title: 'JCI India Author',
      description: 'This program aims to prepare trainers who have already proven their talents in the training field for a new dimension of authoring of a training course. JCI India Author Course introduces techniques and tools to author training courses with detailed trainers’ instructions, participant’s handouts and visual aids that will enable other trainers to efficiently conduct the course.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/author.webp',
      bgColor: '#0097D7',
      textColor: '#ffffff'
    },
    {
      id: 'nalanda',
      title: 'NALANDA',
      description: 'Nalanda is a premium leadership training program designed to enhance your skills and empower you to take on greater responsibilities both within and outside our organization. The training will cover essential leadership topics, including effective communication, decision-making, and team management. It is a fantastic opportunity for professional growth and development.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/nalanda.webp',
      bgColor: '#EDBE38',
      textColor: '#1a1a1a'
    },
    {
      id: 'able',
      title: 'Academy for Business Leadership & Excellence (ABLE)',
      description: 'In JCI India, ABLE stands for the Academy for Business Leadership & Excellence. It\'s a premier business training program designed to enhance entrepreneurial and leadership skills. The program aims to help individuals and businesses achieve their goals by providing a platform for development, networking, and growth Focus: ABLE focuses on developing business acumen, leadership skills, and personal growth. Target Audience: The program is designed for entrepreneurs, professionals, and individuals seeking to enhance their business and leadership capabilities. Key Components: ABLE includes training on various aspects of business, such as branding, wealth creation, networking, change management, and work-life balance.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/able.webp',
      bgColor: '#3A67B1',
      textColor: '#ffffff'
    },
    {
      id: 'jasmine',
      title: 'JASMINE (Jaycee Academy for Smart Initiative for Empowerment)',
      description: 'JASMINE stands for Jaycees Academy of Smart Initiatives for Empowerment. It is a training program specifically designed for Junior Jaycees, the youth wing of JCI. JASMINE aims to empower young people by developing their life skills, leadership qualities, and confidence. Essentially, JASMINE is a platform within JCI India that focuses on nurturing the next generation of leaders through various activities, training sessions, and mentorship programs. It provides opportunities for young Jaycees to learn, grow, and develop the skills necessary to become effective leaders and make a positive impact on society.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/jasmine.webp',
      bgColor: '#56BDA3',
      textColor: '#ffffff'
    },
    {
      id: 'tobip',
      title: 'TOBIP awards (Three Outstanding Business Industrialists And Professionals’)',
      description: 'JCI India, recognizes Three Outstanding Personalities in the field of Business, Industry, and Profession. It is a national-level award where JCI India selects three individuals for their exceptional contributions to their respective fields. The award aims to acknowledge and celebrate individuals who have made significant achievements and positive impacts in their domains.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/tobip.webp',
      bgColor: '#3A67B1',
      textColor: '#ffffff'
    },
    {
      id: 'internationalism',
      title: 'Internationalism & Collaborations',
      description: 'In an increasingly interdependent world, members realize the need for international collaboration, understanding, tolerance and peace. Junior Chamber provides members numerous opportunities to become involved in global issues. Through international conference, academies, programs, Twinning and business exchange. Jaycee concepts enables members to promote goodwill and attain a deeper understanding of global Challenges and opportunities, every year Junior Chamber International organize 5 Area Conferences and one World Congress. Attending the JCI Conferences is really a life time achievement of an individual.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/international.webp',
      bgColor: '#56BDA3',
      textColor: '#ffffff'
    },
    {
      id: 'jcsat',
      title: 'JC SAT (JCI Scholarship & Aptitude Test)',
      description: 'In JCI India, JC SAT, now rebranded as NLTS (National Level Talent Search), is a scholarship and aptitude test designed to identify and nurture young talent. It provides opportunities for awards, scholarships, and national recognition for young individuals. The program aims to empower young people to create positive change by offering leadership development opportunities. JC SAT is more than just a test; it\'s a tool to shape the youth. It supports scholars with scholarships for higher education. The program is part of JCI India\'s efforts to develop leadership skills in young men and women in India. JCI India is affiliated with Junior Chamber International (JCI), a worldwide federation of young leaders and entrepreneurs.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/jc_sat.webp',
      bgColor: '#0097D7',
      textColor: '#ffffff'
    },
    {
      id: 'toyp',
      title: 'TOYP Information',
      description: 'The JCI India Ten Outstanding Young Persons (JCI TOYP) program honors ten outstanding young people under the age of 40 each year. These individuals exemplify the spirit of the JCI Mission, and they serve as stellar examples of entrepreneurial spirit and ethical leadership. Whether through a business, scientific endeavors or their impact on society, these enterprising young leaders turn challenges into opportunities on a local and global level. The final ten TOYP nominees will be honored during the JCI India National Convention.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/toyp.webp',
      bgColor: '#56BDA3',
      textColor: '#ffffff'
    },
    {
      id: 'foundation',
      title: 'JCI India Foundation',
      description: 'The JCI India Foundation earlier called as IJC Charitable Trust, is a trust created to provide financial support for JCI India programs and activities. The funds donated to the Foundation are invested in training, financial help to school children who are economically deprived. To find the talented children and help them pursue their studies is one of the programs of JCI India. Through the Foundation, JCI India has been able to conduct programs that have assisted community leaders around the country and have helped to develop tomorrow’s leaders. Donations to the Foundation remain in an interest-bearing account, and the interest generated on such gifts is allotted for JCI India programs. Any member, former member, JCI Senator, chapter, national organization, friend, philanthropist or corporation is invited to donate to the JCI Foundation.',
      image: 'https://erp.jciindia.in/lib/assets/website/images/jci_india_foundation.webp',
      bgColor: '#EDBE38',
      textColor: '#1a1a1a',
      link: 'https://foundation.jciindia.in/'
    }
  ];

  return (
    <div className="major-events-page">
      <div className="events-hero">
        <div className="container">
          <h1>Major Event</h1>
          <p>Home / Major Event</p>
        </div>
      </div>

      <div className="events-container container">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className="event-card-container"
            style={{ 
              top: `calc(10vh + ${index * 30}px)` 
            }}
          >
            <div 
              className="event-card"
              style={{ 
                background: `linear-gradient(175deg, ${event.bgColor} 0%, ${event.bgColor} 100%)`, 
                color: event.textColor 
              }}
            >
              <h2 className="event-title">{event.title}</h2>
              <div className="event-body">
                <div className="event-text">
                  <p>{event.description}</p>
                  {event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-btn">
                      {event.title}
                    </a>
                  )}
                </div>
                <div className="event-image-wrapper">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
