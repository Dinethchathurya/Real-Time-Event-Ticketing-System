import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function EventCard({ image, title, price, location }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <div className="flex flex-col  absolute top-4 left-4 w-auto  border-white border-[3px]">
          <div className=" h-10 bg-white text-2xl text-primary font-bold  flex items-center justify-center w-full">
            19
          </div>
          <div className=" h-10 bg-secondary text-white flex items-center justify-center min-w-28 px-2">
            March
          </div>
        </div>
        <img
          src={image}
          alt={title}
          className="w-[500px] h-[200px] object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-primary text-md font-bold">RS {price}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaLocationDot className="text-red-500" />
          <p>{location}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to="/eventdetails">
            <button className="btn rounded-full border-gray-200 h-5 w-32 text-primary">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
