import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image3 from "../../assets/imgs/38858726_8666480.svg";
import image4 from "../../assets/imgs/CarouselImage3.svg";

const Carousel2 = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mx-25 mt-10 max-w-screen-xl overflow-hidden rounded-md border border-gray-200 shadow-lg">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          <div className="custom-prev swiper-button-prev text-4xl text-slate-500"></div>
          <div className="custom-next swiper-button-next text-4xl text-slate-500"></div>

          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-64 md:h-80 lg:h-[500px]">
              <img
                src={image3}
                alt="CarouselImage"
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-64 md:h-80 lg:h-[500px]">
              <img
                src={image4}
                alt="CarouselImage"
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel2;
