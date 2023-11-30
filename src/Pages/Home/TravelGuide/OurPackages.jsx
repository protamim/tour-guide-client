import { TERipple } from "tw-elements-react";
import sundarban from "../../../assets/images/tour-packages/sundarban.jpg";
import WishIcon from "./WishIcon";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../../components/Loading";

const OurPackages = () => {
  const {data: packages= [], isLoading} = useQuery({
    queryKey: ['packages'],
    queryFn: async ()=> {
      const result = await axios.get('https://bhraman-server.vercel.app/packages')
      return result.data;
    }
  })
  console.log(packages);
  if(isLoading){
    return <Loading />
  }
  
  return (
    <>
      <div className="grid gap-8 grid-cols-3">
        {/* Items */}
        {packages.map(pkg => <div key={pkg._id} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative">
            <img className="rounded-t-lg h-72 w-full" src={pkg.image} alt={pkg.title} />
            <WishIcon />
          </div>
          <div className="p-6 space-y-2">
            <p className="text-base">Adventure Tours</p>
            <h5 className="mb-2 text-xl font-normal leading-tight text-neutral-800 dark:text-neutral-50">
              {pkg.title}
            </h5>
            <p className="text-sm">
              from <span className="font-semibold text-lg">Tk {pkg.price} /-</span>
            </p>
            <TERipple>
              <Link
                to={`/package-details/${pkg._id}`}
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                View Package
              </Link>
            </TERipple>
          </div>
        </div>)}
      </div>
    </>
  );
};

export default OurPackages;
