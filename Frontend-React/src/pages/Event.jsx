import React from "react";
import EventCard from "../Components/EventCard";

function Event() {
  return (
    <div className="hero bg-gray-200   py-10 ">
      <div className="container mx-auto section_px items-center flex flex-col">
        <h1 className="text-center pb-10">All events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 p-2 c">
          <EventCard
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Musical Show"
            price="200"
            location="Main Entrance"
          />
        </div>
      </div>
    </div>
  );
}

export default Event;
