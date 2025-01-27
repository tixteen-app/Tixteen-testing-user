import React, { useRef } from "react";
import image1 from "../../../../assets/Newhome/content/image 1.png";
import video1 from "../../../../assets/Newhome/sider1.mp4";
import video2 from "../../../../assets/Newhome/slider2.mp4";
import video3 from "../../../../assets/Newhome/slider3.mp4";
import video4 from "../../../../assets/Newhome/slider4.mp4";
import "../../../styles/creator/Snewhome/Content/Content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Content() {
  const images = [video1, video2, video3, video4];
  const swiperRef = useRef(null);

  return (
    <div className="content_main_div">
      <div className="content_text_div">
        <div className="content_text_div_title">
          Content that sparks curiosity and leaves a lasting impact!
        </div>
        <div className="content_text_div_description">
          Authentic, captivating content your <br /> audience can’t stop talking about!
        </div>
      </div>

      <div className="content_image_div">
        <button
          className="custom-swiper-button prev-button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // loop
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="content_image_div_section">
                {/* <video src={image} className="swiper-image" alt={`slide-${index}`} /> */}
                <video src={image} className="swiper-image" alt={`slide-${index}`} autoPlay loop muted playsInline />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="custom-swiper-button next-button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Content;
