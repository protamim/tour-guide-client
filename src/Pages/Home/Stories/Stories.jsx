import { TERipple } from "tw-elements-react";

const Stories = () => {
  return (
    <>
      <section className="mb-16">
        <div className="container mx-auto px-5">
          <h3>Trending Stories</h3>
          <div>
            <div className="block w-60 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <TERipple className="w-full object-cover">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg w-full h-36"
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
                  Birishiri, Netrokona
                </h5>
                <p className="text-sm">Humans are extraordinary creatures.when we see something we fancy or go someplace we admire, we tend to take notes on that particular thing which later on becomes...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
