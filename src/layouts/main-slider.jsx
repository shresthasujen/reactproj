import { SwiperSlide } from "swiper/react";
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
const SliderContent = () => {
  return (
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
            <div className="slider-button-wrapper">
              <button className="btn btn-outline-secondary rounded-circle p-3 heroPrev1-btn arrow-button">
                <i className="fa-thin fa-angle-left"></i>
              </button>
              <button className="btn btn-outline-secondary rounded-circle p-3 heroNext1-btn arrow-button">
                <i className="fa-thin fa-angle-right"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
};

export default SliderContent;
