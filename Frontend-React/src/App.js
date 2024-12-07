import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Event";
import Contact from "./pages/Contact";
import HostEvent from "./pages/HostEvent";
import Footer from "./Components/Footer";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/dashboard/AddEvent";
import Bookings from "./pages/dashboard/Bookings";
import EditEvents from "./pages/dashboard/EditEvents";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hostevent" element={<HostEvent />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="addevent" element={<AddEvent />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="editevents" element={<EditEvents />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
