// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, } from "swiper/modules";

import slide1 from '../../../assets/images/banner/slide1.jpg'
import slide2 from '../../../assets/images/banner/slide2.jpg'
import slide3 from '../../../assets/images/banner/slide3.jpg'
import slide4 from '../../../assets/images/banner/slide4.jpg'
import slide5 from '../../../assets/images/banner/slide5.jpg'

const Banner = () => {
  return (
    <>
    <section>
      <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        className="h-[30rem]"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src={slide5} />
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};

export default Banner;
