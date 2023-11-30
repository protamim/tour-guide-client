import { useForm } from "react-hook-form";
import { TEInput, TERipple } from "tw-elements-react";
import axios from "axios";
import Swal from "sweetalert2";

const AddPackage = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post('https://bhraman-server.vercel.app/packages', data)
    .then(res => {
      console.log(res);
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "added it successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch(err => {
      console.log(err);
    })
  };

  return (
    <>
      <div className="block max-w-4xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-5 grid-cols-2">
            {/* <!--Package Title --> */}
            <TEInput
              {...register("title")}
              type="text"
              label="Package Title"
            ></TEInput>
            {/* <!--Package Duration --> */}
            <TEInput
              {...register("duration")}
              type="text"
              label="Package Duration"
            ></TEInput>
            {/* <!--Package Price --> */}
            <TEInput
              {...register("price")}
              type="text"
              label="Package Price"
            ></TEInput>
            {/* <!--Tour Plan --> */}
            <TEInput
              {...register("day1")}
              type="text"
              label="Day 1"
            ></TEInput>

            <TEInput
              {...register("day2")}
              type="text"
              label="Day 2"
            ></TEInput>

            <TEInput
              {...register("day3")}
              type="text"
              label="Day 3"
            ></TEInput>

            <TEInput
              {...register("day4")}
              type="text"
              label="Day 4"
            ></TEInput>

            <TEInput
              {...register("day5")}
              type="text"
              label="Day 5"
            ></TEInput>
          </div>
          <div>
          <textarea {...register("about_tour")} className="textarea w-full my-4 textarea-accent" placeholder="About Tour"></textarea>
          </div>
          {/* Image Upload */}
          <div className="mb-8">
          <TEInput
              {...register("image")}
              type="url"
              label="Image Url"
            ></TEInput>
          </div>
          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Send
            </button>
          </TERipple>
        </form>
      </div>
    </>
  );
};

export default AddPackage;
