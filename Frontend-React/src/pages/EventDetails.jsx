import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import EventDetailsCard from "../Components/EventDetailsCard";

function EventDetails() {
  // State to track the quantity
  const [quantity, setQuantity] = useState(1);

  // Initial stock value (for example)
  const initialStock = 50; // You can update this value as needed
  const [stock, setStock] = useState(initialStock);

  // Handle increase in quantity
  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  // Handle decrease in quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto section_px">
        <div className="bg-white p-5">
          <div>
            <h1 className="">Music Event</h1>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <EventDetailsCard
                  date="25/02/2025"
                  time="5.30pm"
                  location="Main hall"
                />
              </div>
              <div className="w-full md:w-1/3 mt-4">
                <p>
                  Get ready to test your endurance and athleticism in our
                  thrilling duathlon! Whether you’re a seasoned athlete or a
                  first-time racer, this event is designed for everyone.
                  Challenge yourself in a combination of running and biking
                  segments that will push your limits and leave you with an
                  incredible sense of accomplishment.
                </p>
                <h2 className="text-2xl mt-4">Ticket price</h2>
                <p className="text-xl font-normal text-primary">Rs 100</p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-secondary p-6 rounded-lg shadow-lg w-full text-white max-md:mb-10 mt-4">
                  <form>
                    <label htmlFor="name" className="block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    <label htmlFor="email" className="block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full bg-gray-200 text-black mb-10"
                    />
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        className="btn btn-sm bg-gray-700 text-white hover:bg-gray-800 border-none"
                        onClick={decreaseQuantity}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity} // Controlled input
                        className="input input-bordered w-full bg-gray-200 text-black text-center"
                        readOnly
                      />
                      <button
                        type="button"
                        className="btn btn-sm bg-gray-700 text-white hover:bg-gray-800 border-none"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>

                    {/* Display the remaining stock */}
                    <p className="mt-2 text-white">
                      Remaining tockets: {stock - quantity}
                    </p>

                    <button
                      type="submit"
                      className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
                    >
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
