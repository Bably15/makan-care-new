import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ReviewSlider.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    service: "Electrical Repair",
    review: "Amazing service! Fixed all my wiring issues professionally.",
    image: "reviewer1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    service: "AC Installation",
    review: "Quick and hassle-free AC installation. Highly recommended!",
    image: "reviewer2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    service: "Plumbing Work",
    review: "The plumber was on time and fixed the leakage perfectly.",
    image: "reviewer3.jpg",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    service: "Home Renovation",
    review: "Great craftsmanship and attention to detail. Loved the work!",
    image: "reviewer4.jpg",
  },
];

const ReviewSlider = () => {
  return (
    <div className="review-slider">
      <h2>What Our Clients Say</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1 }, // iPad, mobile
          1024: { slidesPerView: 3 }, // Desktop
        }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              <img src={require(`../assets/${review.image}`)} alt={review.name} className="reviewer-img" />
              <div className="review-content">
                <h4>{review.name}</h4>
                <p className="service">{review.service}</p>
                <p className="review-text">"{review.review}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
