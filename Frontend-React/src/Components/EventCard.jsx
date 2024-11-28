import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function EventCard({ image, title, price, location }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-primary text-xl font-medium">RS {price}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaLocationDot className="text-red-500" />
          <p>{location}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
