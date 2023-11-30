import { useEffect, useState } from "react";
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

const BookModal = ({
  showVerticalyCenteredModal,
  setShowVerticalyCenteredModal,
  packageName,
  price,
  tourGuide,
}) => {

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
                Modal title
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
              <p>This is a vertically centered modal.</p>
              <div className="block w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form>
                  {/* <!--Name input--> */}
                  <TEInput
                    type="text"
                    label="Name"
                    name="tourist_name"
                    className="mb-6"
                  ></TEInput>
                  {/* <!--E-mail input--> */}
                  <TEInput
                    type="email"
                    label="Email Address"
                    className="mb-6"
                    name="tourist_email"
                  ></TEInput>
                  {/* <!--Photo URL--> */}
                  <TEInput
                    type="url"
                    label="Photo URL"
                    className="mb-6"
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
                    label="Price"
                    className="mb-6"
                    name="price"
                    value={packageName}
                    readOnly
                  ></TEInput>
                  {/* Tour Guide */}
                  <div className="flex justify-center">
                    <div className="relative mb-3 md:w-96 pt-5">
                      <TESelect data={tourGuide} />
                    </div>
                  </div>

                  {/* <!--Submit button--> */}
                  <TERipple rippleColor="light" className="w-full">
                    <button
                      type="button"
                      className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Send
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
