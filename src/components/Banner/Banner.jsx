import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerContent from "./BannerContent";
import { bannerServices } from "../../mocks/services";

const Banner = () => {
    return (
        <div className="relative rounded-lg h-full overflow-hidden banner-swiper-container">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
                {bannerServices.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            <BannerContent
                                title={banner.title}
                                price={banner.price}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
