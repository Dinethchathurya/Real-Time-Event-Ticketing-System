import React from 'react'
import { MdDateRange } from 'react-icons/md';
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function EventDetailsCard({date, time, location}) {
  return (
    <div className="flex flex-col gap-3 my-4">
              <div className="w-full  bg-gray-200  p-3">
                <div className="flex items-center">
                  <div className="pr-3">
                    <MdDateRange className="text-4xl bg-primary p-2 rounded-full text-white" />
                  </div>
                  <div>
                    <p className="font-bold">Date</p>
                    <p className="">{date}</p>
                  </div>
                </div>
              </div>
              <div className="w-full  bg-gray-200  p-3">
                <div className="flex items-center">
                  <div className="pr-3">
                    <IoTime className="text-4xl bg-primary p-2 rounded-full text-white" />
                  </div>
                  <div>
                    <p className="font-bold">Time</p>
                    <p className="">{time}</p>
                  </div>
                </div>
              </div>
              <div className="w-full  bg-gray-200  p-3">
                <div className="flex items-center">
                  <div className="pr-3">
                    <FaLocationDot className="text-4xl bg-primary p-2 rounded-full text-white" />
                  </div>
                  <div>
                    <p className="font-bold">Loacation</p>
                    <p className="">{location}</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default EventDetailsCard