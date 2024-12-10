import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import EventDetailsCard from "../Components/EventDetailsCard";
import {useForm} from "react-hook-form";

function EventDetails() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  
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
                  <div>
                  <label htmlFor="name" className="block mb-1 underline">Configaration Form</label>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="numberOfTickets" className="block mb-1 mt-5">
                      Total Number of Tickets 
                    </label>
                    <input
                      type="numberOfTickets"
                      id="numberOfTickets"
                      placeholder="Total Number of Tickets"
                      {...register("numberOfTickets")} 
                      className="input input-bordered w-full bg-gray-200 text-black mb-2 "
                    />
                    <label htmlFor="numberOfTickets" className="block mb-1">
                      Ticket Release Rate 
                    </label>
                    <input
                      type="ticketReleaseRate"
                      id="ticketReleaseRate"
                      {...register("ticketReleaseRate")}
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
                      {...register("customerRetrievalRate")} 
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    <label htmlFor="maxTicketCapacity" className="block mb-1">
                      Maximum Ticket Capacity
                    </label>
                    <input
                      type="maxTicketCapacity"
                      id="maxTicketCapacity"
                      placeholder="Max Ticket Capacity"
                      {...register("maxTicketCapacity")} 
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    <button
                      type="submit"
                      className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
                    >
                      Start
                    </button>
                    <button
                      type="submit"
                      className="btn btn-block bg-success text-white hover:bg-gray-800 border-none mt-5"
                    >
                      Stop
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