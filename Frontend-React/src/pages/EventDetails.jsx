import React, { useState, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import EventDetailsCard from "../Components/EventDetailsCard";
import { useForm } from "react-hook-form";
import axios from "axios";

function stop() {
  console.log("cliked");
  axios
    .post("http://localhost:5001/stop")
    .then((response) => {
      console.log("Start response:", response.data);
    })
    .catch((error) => {
      console.error("Error in start request:", error);
    });
}

function EventDetails() {
  const [messages, setMessages] = useState([]);
  const [currentTicketAvailability, setCurrentTicketAvailability] =
    useState("0");
  const [totalTicketsToRelease, setTotalTicketsToRelease] = useState("0");
  const [totalTicketsSold, setTotalTicketsSold] = useState("0");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5001/start", data)
      .then((response) => {
        console.log("Start response:", response.data);
      })
      .then(() => {
        websocket();
        realTimeDatawebsocket();
      })
      .catch((error) => {
        console.error("Error in start request:", error);
      });
  };

  function websocket() {
    const socket = new WebSocket("ws://localhost:8083");

    socket.onopen = () => {
      console.log("Connected to the WebSocket server");
      socket.send("Hello from the React client!");
    };
    socket.onmessage = (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          setMessages((prevMessages) => [...prevMessages, reader.result]);
        };
        reader.readAsText(event.data);
      } else {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }

  function realTimeDatawebsocket() {
    console.log("called");
    const socket = new WebSocket("ws://localhost:8082");

    socket.onopen = () => {
      console.log("Connected to the WebSocket server");
      socket.send("Hello from the React client!");
    };
    socket.onmessage = (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          console.log(reader.result);
          const data = JSON.parse(reader.result);
          setCurrentTicketAvailability(() => data[0]);
          setTotalTicketsToRelease(() => data[1]);
          setTotalTicketsSold(() => data[2]);
        };
        reader.readAsText(event.data);
      } else {
        console.log(event.data);
        //setMessages(() => [event.data]);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto section_px">
        <div className="bg-white p-5">
          <div>
            <h1 className="">Music Event</h1>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/3">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <EventDetailsCard
                      date="25/02/2025"
                      time="5.30pm"
                      location="Main hall"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
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
                </div>
                <div>
                  <div className="flex flex-row gap-6 mt-5">
                    <div className="w-1/3 bg-slate-300 justify-center flex flex-col items-center p-3">
                      <p>Current Ticket Availability</p>
                      <p className="text-2xl font-semibold">
                        {currentTicketAvailability}
                      </p>
                    </div>
                    <div className="w-1/3 bg-slate-300 justify-center flex flex-col items-center p-3">
                      <p>Total Tickets To Release</p>
                      <p className="text-2xl font-semibold">
                        {totalTicketsToRelease}
                      </p>
                    </div>
                    <div className="w-1/3 bg-slate-300 justify-center flex flex-col items-center p-3">
                      <p>Total Tickets Sold</p>
                      <p className="text-2xl font-semibold">
                        {totalTicketsSold}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[200px] overflow-auto border border-gray-300 mt-6">
                    <div className="w-full h-[200px] bg-gray-100">
                      {messages
                        .slice()
                        .reverse()
                        .map((msg, index) => (
                          <p key={index} className="p-0">
                            {msg}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <div className="bg-secondary p-6 rounded-lg shadow-lg w-full text-white max-md:mb-10 mt-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 underline">
                      Configaration Form
                    </label>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label
                      htmlFor="numberOfTickets"
                      className="block mb-1 mt-5"
                    >
                      Total Number of Tickets
                    </label>
                    <input
                      type="number"
                      id="numberOfTickets"
                      placeholder="Total Number of Tickets"
                      {...register("numberOfTickets", {
                        required: "Ticket quantity is required",
                        min: {
                          value: 1,
                          message: "Please enter a number grater than zero ",
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      })}
                      className="input input-bordered w-full bg-gray-200 text-black mb-2 "
                    />
                    {errors.numberOfTickets && (
                      <p className="text-red-500">
                        {errors.numberOfTickets.message}
                      </p>
                    )}
                    <label htmlFor="ticketReleaseRate" className="block mb-1">
                      Ticket Release Rate
                    </label>
                    <input
                      type="number"
                      id="ticketReleaseRate"
                      {...register("ticketReleaseRate", {
                        required: "Ticket quantity is required",
                        min: {
                          value: 1,
                          message: "Please enter a number grater than zero .",
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      })}
                      placeholder="Ticket ReleaseRate"
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    {errors.ticketReleaseRate && (
                      <p className="text-red-500">
                        {errors.ticketReleaseRate.message}
                      </p>
                    )}

                    <label htmlFor="name" className="block mb-1">
                      Customer Retrieval Rate
                    </label>
                    <input
                      type="number"
                      id="customerRetrievalRate"
                      placeholder="Customer Retrieval Rate"
                      {...register("customerRetrievalRate", {
                        required: "Ticket quantity is required",
                        min: {
                          value: 1,
                          message: "Please enter a number grater than zero .",
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      })}
                      pattern="[0-9]*"
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    {errors.customerRetrievalRate && (
                      <p className="text-red-500">
                        {errors.customerRetrievalRate.message}
                      </p>
                    )}
                    <label htmlFor="maxTicketCapacity" className="block mb-1">
                      Maximum Ticket Capacity
                    </label>
                    <input
                      type="number"
                      id="maxTicketCapacity"
                      placeholder="Max Ticket Capacity"
                      {...register("maxTicketCapacity", {
                        required: "max Ticket Capacity is required",
                        validate: (value, fromValues) => {
                          if (value <= 0) {
                            return "Please enter a number greater than zero";
                          }
                          if (value > fromValues.numberOfTickets) {
                            console.log(
                              "maximum ticket capacity can not be exceed total amount of tickets"
                            );
                            return "maximum ticket capacity can not be exceed total amount of tickets";
                          }
                          console.log("correct validations maxTicketCapacity");
                          return true;
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      })}
                      pattern="[0-9]*"
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    {errors.maxTicketCapacity && (
                      <p className="text-red-500">
                        {errors.maxTicketCapacity.message}
                      </p>
                    )}
                    <label htmlFor="name" className="block mb-1">
                      Ticket Quantity
                    </label>
                    <input
                      type="number"
                      id="ticketQuantity"
                      placeholder="Ticket Quantity can retrieve at a time"
                      {...register("ticketQuantity", {
                        required: "Ticket quantity is required",
                        validate: (value, formValues) => {
                          if (value <= 0) {
                            console.log(
                              "Please enter a number greater than zero"
                            );
                            return "Please enter a number greater than zero";
                          }
                          if (value > formValues.maxTicketCapacity) {
                            console.log(
                              "Ticket quantity cannot exceed the maximum ticket capacity"
                            );
                            return "Ticket quantity cannot exceed the maximum ticket capacity ";
                          }
                          console.log("correct ticket quantity");
                          return true;
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numeric values are allowed",
                        },
                      })}
                      className="input input-bordered w-full bg-gray-200 text-black mb-2"
                    />
                    {errors.ticketQuantity && (
                      <p className="text-red-500">
                        {errors.ticketQuantity.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
                    >
                      Start
                    </button>
                  </form>
                  <button
                    onClick={stop}
                    className="btn btn-block bg-success text-white hover:bg-gray-800 border-none mt-5"
                  >
                    Stop
                  </button>
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
