import React from "react";
import EventCard from "../Components/EventCard";

function Event() {
  return (
    <div className="hero bg-gray-200   py-10 ">
      <div className="container mx-auto section_px items-center flex flex-col">
        <h1 className="text-center pb-10">All events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 p-2 c">
          <EventCard
            image="https://images.pexels.com/photos/167514/pexels-photo-167514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Musical Show"
            price="1000"
            location="Main Entrance"
          />
        </div>
      </div>
    </div>
  );
}

export default Event;
