import { TERipple } from "tw-elements-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TourType = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <section className="mb-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-medium">Tour Type</h2>
          <div>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {arr.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <TERipple>
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          className="rounded-t-lg"
                          src="https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/f2.jpg"
                          alt=""
                        />
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                      </div>
                    </TERipple>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Cultural Tours
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Item 1 */}
            {/* <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <TERipple>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg"
                    src="https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/f2.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </TERipple>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Cultural Tours
                </h5>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourType;
