import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    quote: "Social Business Network has completely transformed my leadership skills. The projects and networking opportunities are unparalleled.",
    name: "Aarav Sharma",
    location: "SBN Mumbai",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "Being part of SBN gave me the confidence to start my own business. The mentorship here is truly life-changing.",
    name: "Priya Patel",
    location: "SBN Bangalore",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "The global perspective I've gained through international conferences has been invaluable for my career growth.",
    name: "Rohan Desai",
    location: "SBN Delhi",
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        <h2 className="testimonials-heading">What Our Members Say</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            }
          }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-card-inner">
                  <p className="testimonial-quote">"{item.quote}"</p>
                  <div className="testimonial-author">
                    <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                    <div>
                      <h4 className="testimonial-name">{item.name}</h4>
                      <p className="testimonial-location">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
