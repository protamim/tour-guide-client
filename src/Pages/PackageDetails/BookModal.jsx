import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  TEInput,
  TEModal,
  TEModalBody,
  TEModalContent,
  TEModalDialog,
  TEModalHeader,
  TERipple,
  TESelect,
} from "tw-elements-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";

const BookModal = ({
  showVerticalyCenteredModal,
  setShowVerticalyCenteredModal,
  packageName,
  price,
}) => {
  const {user} = useContext(AuthContext);
  const tourGuide = [
    { text: "Tour Guide", value: 1 },
    { text: "Zakaria Solaimani", value: 2 },
    { text: "Sheikh Nazrul", value: 3 },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const axiosPublic = useAxiosPublic();
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourist_name = form.tourist_name.value;
    const tourist_email = form.tourist_email.value;
    const photo_url = form.photo_url.value;
    const price = form.price.value;
    const package_name = form.package_name.value;
    const guide_name = form.guide_name.value;
    const tour_date = form.tour_date.value;

    const bookingInfo = {
      tourist_name: tourist_name,
      tourist_email: tourist_email,
      photo_url: photo_url,
      price: price,
      package_name: package_name,
      guide_name: guide_name,
      tour_date: tour_date
    };
    console.log(bookingInfo);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, book it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post("/booking", bookingInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Booked!",
              text: "The Package has been booked.",
              icon: "success",
            });
          }
          console.log(res.data);
        });
      }
    });
  };

  return (
    <>
      {/* <!--Verically centered modal--> */}
      <TEModal
        show={showVerticalyCenteredModal}
        setShow={setShowVerticalyCenteredModal}
      >
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                My Booking
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowVerticalyCenteredModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div className="block w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form onSubmit={handleBooking}>
                  {/* <!--Name input--> */}
                  <TEInput
                    type="text"
                    label="Name"
                    name="tourist_name"
                    value={user?.displayName}
                    className="mb-6"
                  ></TEInput>
                  {/* <!--E-mail input--> */}
                  <TEInput
                    type="email"
                    label="Email Address"
                    className="mb-6"
                    value={user?.email}
                    name="tourist_email"
                  ></TEInput>
                  {/* <!--Photo URL--> */}
                  <TEInput
                    type="url"
                    label="Photo URL"
                    className="mb-6"
                    value={user?.photoURL}
                    name="photo_url"
                  ></TEInput>
                  {/* <!--Price --> */}
                  <TEInput
                    type="text"
                    label="Price"
                    className="mb-6"
                    name="price"
                    value={price}
                    readOnly
                  ></TEInput>
                  {/* <!--Package Name --> */}
                  <TEInput
                    type="text"
                    label="Package Name"
                    className="mb-6"
                    name="package_name"
                    value={packageName}
                    readOnly
                  ></TEInput>
                  {/* Tour Guide */}
                  <select name="guide_name" className="w-full border px-2 py-1 border-gray-200">
                    {tourGuide?.map((guide, index) => (
                      <option key={index}>{guide.text}</option>
                    ))}
                  </select>
                  {/* Date Picker */}
                  <div className="mt-5">
                  <DatePicker className="w-full border-gray-200 border"
                    name="tour_date"
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  </div>
                  
                  {/* <!--Submit button--> */}
                  <TERipple rippleColor="light" className="w-full mt-6">
                    <button
                      type="submit"
                      className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Book Now
                    </button>
                  </TERipple>
                </form>
              </div>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
};

export default BookModal;
