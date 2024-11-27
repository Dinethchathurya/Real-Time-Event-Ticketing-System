import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function EventCard({ image, title, price, location }) {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-primary text-xl">RS {price}</p>
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p>{location}</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;