import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import EventDetailsCard from "../Components/EventDetailsCard";
import { useForm } from "react-hook-form";
import axios from "axios";

function stop(event) {
  console.log("cliked");
}

function EventDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form data:", data);
    // axios
    //   .post("http://localhost:5001/start", data)
    //   .then((response) => {
    //     console.log("Start response:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error in start request:", error);
    //   });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto section_px">
        <div className="bg-white p-5">
          <div>
            <h1 className="">Music Event</h1>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/3">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <EventDetailsCard
                      date="25/02/2025"
                      time="5.30pm"
                      location="Main hall"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
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
                </div>
                <div>
                <div className="flex flex-row gap-6 mt-5">
                      <div className="w-1/3 bg-slate-300 justify-center flex flex-col items-center p-3">
                        <p>Tickets</p>
                        <p className="text-2xl font-semibold">30</p>
                      </div>
                      <div className="w-1/3 bg-slate-300 justify-center flex flex-col items-center p-3">
                        <p>Tickets</p>
                        <p className="text-2xl font-semibold">30</p>
                      </div>
                      <div className="w-1/3 bg-slate-300 justify-center flex flex-col items-center p-3">
                        <p>Tickets</p>
                        <p className="text-2xl font-semibold">30</p>
                      </div>
                    </div>
                  <div className="w-full h-[200px] overflow-auto border border-gray-300 mt-6">
                    
                    <div className="w-full h-[200px] bg-gray-100">
                      <p className="p-4">
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                        This is a scrollable div. Add your content here. It will
                        scroll both horizontally and vertically if it overflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <div className="bg-secondary p-6 rounded-lg shadow-lg w-full text-white max-md:mb-10 mt-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 underline">
                      Configaration Form
                    </label>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label
                      htmlFor="numberOfTickets"
                      className="block mb-1 mt-5"
                    >
                      Total Number of Tickets
                    </label>
                    <input
                      type="numberOfTickets"
                      id="numberOfTickets"
                      placeholder="Total Number of Tickets"
                      {...register("numberOfTickets", { required: true, min: 1 })}
                      className="input input-bordered w-full bg-gray-200 text-black mb-2 "
                    />
                    <label htmlFor="numberOfTickets" className="block mb-1">
                      Ticket Release Rate
                    </label>
                    <input
                      type="ticketReleaseRate"
                      id="ticketReleaseRate"
                      {...register("ticketReleaseRate", {required:true, min :1})}
                      placeholder="Ticket ReleaseRate"
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    <label htmlFor="name" className="block mb-1">
                      Customer Retrieval Rate
                    </label>
                    <input
                      type="customerRetrievalRate"
                      id="customerRetrievalRate"
                      placeholder="Customer Retrieval Rate"
                      {...register("customerRetrievalRate", {required:true, min:1})}
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    <label htmlFor="maxTicketCapacity" className="block mb-1">
                      Maximum Ticket Capacity
                    </label>
                    <input
                      type="maxTicketCapacity"
                      id="maxTicketCapacity"
                      placeholder="Max Ticket Capacity"
                      {...register("maxTicketCapacity", {validate : (value, fromValues)=>{
                        if (value <= 0) {
                          return "Please enter a number greater than zero";
                        }
                        if (value >fromValues.numberOfTickets) {
                          console.log("maximum ticket capacity can not be exceed total amount of tickets");
                          return "maximum ticket capacity can not be exceed total amount of tickets";
                        }
                        console.log("correct validations");
                        return true;
                      }})}
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    <label htmlFor="name" className="block mb-1">
                      Ticket Quantity
                    </label>
                    <input
                      type="ticketQuantity"
                      id="ticketQuantity"
                      placeholder="Ticket Quantity can retrieve at a time"
                      {...register("ticketQuantity",{validate : (value, formValues) => {
                        if (value <= 0) {
                          console.log("Please enter a number greater than zero");
                          return "Please enter a number greater than zero";
                        }
                        if (value > formValues.maxTicketCapacity) {
                          console.log("Ticket quantity cannot exceed the maximum ticket capacity");
                          return "Ticket quantity cannot exceed the maximum ticket capacity";
                        }
                        console.log("correct validations");
                        return true;
                      },})}
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    
                    <button
                      type="submit"
                      className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
                    >
                      Start
                    </button>
                  </form>
                  <button
                    onClick={stop}
                    className="btn btn-block bg-success text-white hover:bg-gray-800 border-none mt-5"
                  >
                    Stop
                  </button>
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
