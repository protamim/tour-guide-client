import { TERipple } from "tw-elements-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TourType = () => {
 const type = [
  {
    "type": "Cultural Tours",
    "image":
      "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Historical Tours",
    "image":
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Adventure Tours",
    "image":
      "https://images.pexels.com/photos/464440/pexels-photo-464440.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Wildlife Tours",
    "image":
      "https://images.pexels.com/photos/18137241/pexels-photo-18137241/free-photo-of-captured-innocence-a-confined-monkey-a-poignant-reminder-of-the-delicate-balance-between-nature-and-captivity-evoking-reflection-on-our-responsibility-towards-wildlife.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Safari Tours",
    "image":
      "https://images.pexels.com/photos/14074141/pexels-photo-14074141.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Cruise Tours",
    "image":
      "https://images.pexels.com/photos/4338160/pexels-photo-4338160.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Culinary Tours",
    "image":
      "https://images.pexels.com/photos/4319753/pexels-photo-4319753.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Educational Tours",
    "image":
      "https://images.pexels.com/photos/14755461/pexels-photo-14755461.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    "type": "Hiking and Trekking Tours",
    "image":
      "https://images.pexels.com/photos/12258160/pexels-photo-12258160.jpeg?auto=compress&cs=tinysrgb&w=400",
  }
]
  return (
    <>
      <section className="mt-10">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Tour Type</h2>
          <div>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {type.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <TERipple>
                      <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                          className="rounded-t-lg w-full h-60"
                          src={item.image}
                          alt="Bhraman Guide"
                        />
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                      </div>
                    </TERipple>
                    <div className="p-6">
                      <h5 className="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {item.type}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourType;
