import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; 

function EditEvents() {
  const [filter, setFilter] = useState("");
  const [eventTypeFilter, setEventTypeFilter] = useState("All");

  // Sample event data
  const event = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Football Match",
      eventType: "Sport",
      price: "$100",
      location: "Stadium A",
      cusName: "John Doe",
      cusEmail: "john.doe@example.com",
      cusPhone: "123-456-7890",
      bookingDate: "2024-12-01",
      eventDate: "2024-12-10",
      paymentStatus: "Paid",
      seats: 50,
      totalAmount: "$5000",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Math Conference",
      eventType: "Academic",
      price: "$50",
      location: "University Hall",
      cusName: "Jane Smith",
      cusEmail: "jane.smith@example.com",
      cusPhone: "987-654-3210",
      bookingDate: "2024-11-25",
      eventDate: "2024-12-05",
      paymentStatus: "Pending",
      seats: 100,
      totalAmount: "$5000",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Cultural Dance Show",
      eventType: "Cultural and Social",
      price: "$30",
      location: "Community Center",
      cusName: "Alex Brown",
      cusEmail: "alex.brown@example.com",
      cusPhone: "555-555-5555",
      bookingDate: "2024-11-28",
      eventDate: "2024-12-15",
      paymentStatus: "Paid",
      seats: 200,
      totalAmount: "$6000",
    },
  ];

  // Filter events based on search and event type
  const filteredEvents = event.filter(
    (booking) =>
      (booking.cusName.toLowerCase().includes(filter.toLowerCase()) ||
        booking.title.toLowerCase().includes(filter.toLowerCase()) ||
        booking.location.toLowerCase().includes(filter.toLowerCase())) &&
      (eventTypeFilter === "All" || booking.eventType === eventTypeFilter)
  );

  const handleEdit = (id) => {
    console.log("Edit event", id);
    // Your edit functionality here
  };

  const handleDelete = (id) => {
    console.log("Delete event", id);
    // Your delete functionality here
  };

  return (
    <div className="overflow-x-auto">
      <div className="text-xl pb-4 text-center">Events</div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Filter Input */}
        <div className="">
          <input
            type="text"
            placeholder="Search by Title, Event type or Location"
            className="input input-bordered border-gray-400 m-2 w-full max-w-xs text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Event Type Dropdown */}
        <div className="pb-5">
          <select
            value={eventTypeFilter}
            onChange={(e) => setEventTypeFilter(e.target.value)}
            className="select select-bordered  border-gray-400 m-2 w-full max-w-xs text-sm"
          >
            <option value="All">All Event Types</option>
            <option value="Sport">Sport</option>
            <option value="Academic">Academic</option>
            <option value="Cultural and Social">Cultural and Social</option>
          </select>
        </div>
      </div>

      <table className="table table-xs sm:table-md">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Event Type</th>
            <th>Price</th>
            <th>Location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((eventItem) => (
            <tr key={eventItem.id}>
              <td>{eventItem.id}</td>
              <td>
                <img
                  src={eventItem.image}
                  alt={eventItem.title}
                  className="w-16 h-16"
                />
              </td>
              <td>{eventItem.title}</td>
              <td>{eventItem.eventType}</td>
              <td>{eventItem.price}</td>
              <td>{eventItem.location}</td>
              <td>
                <button
                  onClick={() => handleEdit(eventItem.id)}
                  className="btn btn-sm btn-primary"
                >
                  <FaEdit />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(eventItem.id)}
                  className="btn btn-sm btn-danger"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Event Type</th>
            <th>Price</th>
            <th>Location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default EditEvents;
