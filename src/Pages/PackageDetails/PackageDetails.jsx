import { useLoaderData } from "react-router-dom";

const PackageDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <section className="my-16">
        <div className="container mx-auto px-5">
          <h2 className="mb-6 text-3xl">{data.title}</h2>
          <div className="grid gap-8 grid-cols-12">
            {/* Main Content */}
            <div className="col-span-8">
              <div className="flex gap-6">
                <div className="flex-1">
                  <img src={data.image} alt="" />
                </div>
                <div className="space-y-5">
                  <h4 className="text-xl font-medium">{data.duration}</h4>
                  <h5>Starting from</h5>
                  <h2>
                    Tk <span className="font-semibold">{data.price}</span>
                  </h2>
                  <span className="text-sm">(price per person)</span>
                  <button className="block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                    Book Now
                  </button>
                </div>
              </div>
              {/* Tour Plan */}
              <div className="my-10">
                <h2 className="text-2xl mb-5">:: Tour Plan ::</h2>
                <p>{data.about_tour}</p>
              </div>
              <div className="space-y-3">
                {/* Day 1 */}
                {data.day1 && (
                  <>
                    <div className="space-y-2">
                    <h3 className="bg-gray-300 px-3 py-1 inline-block">Day 1:</h3>
                    <p>{data.day1}</p>
                    </div>
                  </>
                )}
                 {/* Day 2 */}
                {data.day2 && (
                  <>
                    <div className="space-y-2">
                    <h3 className="bg-gray-300 px-3 py-1 inline-block">Day 2:</h3>
                    <p>{data.day2}</p>
                    </div>
                  </>
                )}
                 {/* Day 3 */}
                {data.day3 && (
                  <>
                    <div className="space-y-2">
                    <h3 className="bg-gray-300 px-3 py-1 inline-block">Day 3:</h3>
                    <p>{data.day3}</p>
                    </div>
                  </>
                )}
                 {/* Day 4 */}
                {data.day4 && (
                  <>
                    <div className="space-y-2">
                    <h3 className="bg-gray-300 px-3 py-1 inline-block">Day 4:</h3>
                    <p>{data.day4}</p>
                    </div>
                  </>
                )}
                 {/* Day 5 */}
                {data.day5 && (
                  <>
                    <div className="space-y-2">
                    <h3 className="bg-gray-300 px-3 py-1 inline-block">Day 5:</h3>
                    <p>{data.day5}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* right sidebar */}
            <div className="col-span-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;
