import { useState } from "react";

const bookings = [
  {
    id: 1,
    cusName: "John Doe",
    cusEmail: "johndoe@example.com",
    cusPhone: "+1 234 567 890",
    event: "Music Concert",
    bookingDate: "2024-12-01",
    eventDate: "2024-12-15",
    paymentStatus: "Paid",
    seats: 2,
    totalAmount: "$100",
  },
  {
    id: 2,
    cusName: "Jane Smith",
    cusEmail: "janesmith@example.com",
    cusPhone: "+1 987 654 321",
    event: "Sports Meet",
    bookingDate: "2024-12-03",
    eventDate: "2024-12-20",
    paymentStatus: "Pending",
    seats: 4,
    totalAmount: "$200",
  },
  {
    id: 3,
    cusName: "Mark Johnson",
    cusEmail: "markj@example.com",
    cusPhone: "+1 555 123 456",
    event: "Club Event",
    bookingDate: "2024-12-04",
    eventDate: "2024-12-18",
    paymentStatus: "Paid",
    seats: 1,
    totalAmount: "$50",
  },
  {
    id: 4,
    cusName: "Emma Davis",
    cusEmail: "emmad@example.com",
    cusPhone: "+1 321 654 987",
    event: "Art Exhibition",
    bookingDate: "2024-12-05",
    eventDate: "2024-12-22",
    paymentStatus: "Cancelled",
    seats: 3,
    totalAmount: "$150",
  },
  {
    id: 5,
    cusName: "Chris Lee",
    cusEmail: "chrislee@example.com",
    cusPhone: "+1 777 888 999",
    event: "Theater Play",
    bookingDate: "2024-12-06",
    eventDate: "2024-12-25",
    paymentStatus: "Paid",
    seats: 2,
    totalAmount: "$120",
  },
];

function Bookings() {
  const [filter, setFilter] = useState("");

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.cusName.toLowerCase().includes(filter.toLowerCase()) ||
      booking.event.toLowerCase().includes(filter.toLowerCase()) ||
      booking.paymentStatus.toLowerCase().includes(filter.toLowerCase())
  );

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-500 text-white ";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="text-xl pb-4 text-center">Bookings</div>

      {/* Filter Input */}
      <div className="pb-4">
        <input
          type="text"
          placeholder="Search by Name, Event or Status"
          className="input input-bordered border-gray-400 m-2 w-full max-w-xs text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <table className="table table-xs sm:table-md">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cus_Name</th>
            <th>Cus_Email</th>
            <th>Cus_Phone</th>
            <th>Event</th>
            <th>Booking Date</th>
            <th>Event Date</th>
            <th>Payment Status</th>
            <th>Seats</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <th>{booking.id}</th>
              <td>{booking.cusName}</td>
              <td>{booking.cusEmail}</td>
              <td>{booking.cusPhone}</td>
              <td>{booking.event}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.eventDate}</td>
              <td className={`${getPaymentStatusColor(booking.paymentStatus)}`}>
                {booking.paymentStatus}
              </td>
              <td>{booking.seats}</td>
              <td>{booking.totalAmount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Cus_Name</th>
            <th>Cus_Email</th>
            <th>Cus_Phone</th>
            <th>Event</th>
            <th>Booking Date</th>
            <th>Event Date</th>
            <th>Payment Status</th>
            <th>Seats</th>
            <th>Total Amount</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Bookings;
