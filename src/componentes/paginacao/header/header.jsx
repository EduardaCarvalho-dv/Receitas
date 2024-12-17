import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../styles/header.css";

import Comida3 from "../../../assets/galinhada.jpg";
import Comida4 from "../../../assets/sopa-paraguaia-tenda.jpg";
import Comida5 from "../../../assets/sopao.jpg";
import Comida6 from "../../../assets/torta.jpeg";

export default function Header() {
  const imagens = [Comida3, Comida4, Comida5, Comida6];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ 
          delay: 10000,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imagens.map((item) => {
          return (
            <SwiperSlide className="ajusteTamanho" key={item.id}>
              <img src={item} alt={imagens} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
