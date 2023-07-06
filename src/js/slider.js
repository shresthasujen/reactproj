import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../images/men.png";
import slider2 from "../images/women.png";

const serviceData = [
  {
    img: slider1,
    title: "Discover Men's Latest Fashion",
    desc: "SUMMER SALE IS ON",
  },
  {
    img: slider2,
    title: "Discover Women's Latest Fashion",
    desc: "SUMMER SALE IS ON",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <>
          {serviceData.map((data) => (
            <SwiperSlide>
              <div className="swiper-slide " key={data.title}>
                <div className="main-sliderbg position-relative">
                  <div className="sliding">
                    <div className="container">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                          <div className="text-sm-start text-center mb-sm-0 mb-3">
                            <p>{data.desc}</p>
                            <h1 className="slider-head font-weight-bold">
                              {data.title}
                            </h1>
                            <button type="button" className="btn-1">
                              <a href="#">EXPLORE NOW</a>
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="slider-img-main">
                            <img src={data.img} alt="Slider" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
}
