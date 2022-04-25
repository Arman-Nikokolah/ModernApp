import React from "react";
import styled from "styled-components";
import hitman from "../img/hitman.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const SwiperSliders = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={100}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Divp>
            <div className="param">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, illum.
              </p>
            </div>
            <div className="img">
              <img src={hitman} alt="hitman" />
            </div>
          </Divp>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

const Divp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img {
    width: 100%;
    height: 80vh;
  }
  p {
    color: white;
    background-color: #ec1d1d;
    height: 80vh;
    text-align: center;
    padding: 0rem;
  }
`;

export default SwiperSliders;
