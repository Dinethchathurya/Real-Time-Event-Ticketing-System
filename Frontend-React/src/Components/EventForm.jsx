import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-secondary p-6 rounded-lg shadow-lg max-w-xl w-full  text-white mb-8 ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">

          <div className="mb-4 ">
            <label htmlFor="eventTitle" className="block mb-1">
              Event Title
            </label>
            <input
              id="eventTitle"
              type="text"
              placeholder="Event Title"
              {...register("Event Title", { required: true })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Event Title"] && (
              <p className="text-red-500 text-sm">Event Title is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-1">
              Event Type
            </label>
            <select
              id="eventType"
              {...register("Event Type", { required: true })}
              className="select select-bordered w-full bg-gray-200 text-black"
            >
              <option value="Sport">Sport</option>
              <option value="Academic">Academic</option>
              <option value="Cultural and Social">Cultural and Social</option>
            </select>
            {errors["Event Type"] && (
              <p className="text-red-500 text-sm">Event Type is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="ticketPrice" className="block mb-1">
              Ticket Price
            </label>
            <input
              id="ticketPrice"
              type="number"
              placeholder="Ticket Price"
              {...register("Ticket Price")}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block mb-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Location"
              {...register("Location", { required: true })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Location"] && (
              <p className="text-red-500 text-sm">Location is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="availability" className="block mb-1">
              Availability
            </label>
            <input
              id="availability"
              type="number"
              placeholder="Availability"
              {...register("Availability", { required: true, min: 1 })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Availability"] && (
              <p className="text-red-500 text-sm">
                Availability is required and must be at least 1.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
