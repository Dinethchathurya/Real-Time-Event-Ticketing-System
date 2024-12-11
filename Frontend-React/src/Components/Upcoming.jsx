import React from "react";
import EventCard from "./EventCard";

function Upcoming() {
  return (
    <div className="hero bg-gray-200   py-10 ">
      <div className="container mx-auto section_px items-center flex flex-col">
        <h1 className="text-center pb-10">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 c">
          <EventCard
            key={1}
            image="https://images.pexels.com/photos/167514/pexels-photo-167514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Musical Show"
            price="200"
            location="Main Entrance"
          />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
