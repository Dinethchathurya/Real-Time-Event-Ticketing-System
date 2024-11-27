import React from "react";
import Ct1 from "../assets/ct 1.png";
import Ct2 from "../assets/ct 2.png";
import Ct3 from "../assets/ct 3.png";

function Categories() {
  return (
    <div className="hero bg-black opacity-80   py-10 ">
      <div className="container mx-auto section_px ">
        <div>
          <h1 className="text-white">All Event By Categories</h1>
          <p className="py-3 text-white  pb-5">
            Present a comprehensive overview of various events, systematically
            categorized by their respective categories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: Ct1, alt: "Category 1", text: "Sport" },
              { img: Ct2, alt: "Category 2", text: "Academic" },
              { img: Ct3, alt: "Category 3", text: "Cultural & Social" },
            ].map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden  shadow-lg"
              >
                <img
                  src={category.img}
                  alt={category.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-100 group-hover:opacity-60 transition-opacity duration-300">
                  <p className="text-white text-4xl font-semibold">
                    {category.text}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
