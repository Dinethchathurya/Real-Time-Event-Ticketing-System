import React from "react";
import EventCard from "./EventCard";

function Upcoming() {
  return (
    <div className="hero bg-gray-200   py-10 ">
      <div className="container mx-auto section_px">
        <h1 className="text-center pb-10">Upcoming Events</h1>

        <div className="hero-content flex-col  lg:flex-row">
          <EventCard
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Musical Show"
            price="200"
            location="Main Entrance"
          />
          <EventCard
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Art Exhibition"
            price="150"
            location="Art Hall"
          />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
