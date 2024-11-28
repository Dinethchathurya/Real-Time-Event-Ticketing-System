import React from "react";

function About() {
  return (
    <div>
      <div className="hero py-10">
        <div className="container mx-auto section_px">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="">Welcome to IIT University’s Event Booking Platform!</h1>
              <p className="py-3 opacity-80 pb-5">
                At IIT, we believe in creating memorable experiences that bring
                our community together. Our platform is your one-stop
                destination for discovering, booking, and organizing a diverse
                range of events, from thrilling sports meets and inspiring
                academic seminars to vibrant cultural celebrations and club
                activities.
              </p>
              <h2>Our Mission</h2>
              <p className="py-3 opacity-80 pb-5">
                To empower students, faculty, and alumni by providing an easy-to-use platform that connects everyone through shared experiences, fostering collaboration, growth, and lasting memories.
              </p>
              <h2>What We Offer</h2>
              <ul className="py-3 opacity-80 pb-5 list-disc list-inside">
                <li>
                  <strong>Diverse Events:</strong> Explore everything from academic
                  workshops and cultural festivals to sports tournaments and
                  social gatherings.
                </li>
                <li>
                  <strong>Seamless Booking:</strong> Enjoy hassle-free registration
                  for free and paid events.
                </li>
                <li>
                  <strong>Community Engagement:</strong> Stay connected with peers,
                  faculty, and the wider IIT network.
                </li>
              </ul>
              <h2>Why Choose Us?</h2>
              <p className="py-3 opacity-80 pb-5">
                Our platform is designed to make event participation simple,
                inclusive, and accessible for everyone at IIT. Whether you’re
                here to attend an event or host your own, we’re here to support
                you every step of the way.
              </p>
              <h2>Join Us Today!</h2>
              <p className="py-3 opacity-80 pb-5">
                Be part of the vibrant IIT community and never miss out on the
                excitement. Discover events, expand your horizons, and make the
                most of your time at IIT University.
              </p>
              <button className="btn btn-primary px-10">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
