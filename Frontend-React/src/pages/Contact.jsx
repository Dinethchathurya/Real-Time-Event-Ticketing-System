import React from "react";
import Girl from "../assets/girl.png";
import FormCard from "../Components/FormCard";

function Contact() {
  return (
    <div>
      <div class=" bg-gradient-to-b from-[#c1c1d6] to-[#d0d0e2]">
        <div className="flex flex-col md:flex-row container mx-auto section_px">
          <div class="flex-1 flex justify-center items-end">
            <img
              src={Girl}
              alt="Runner"
              className=" justify-center items-end max-w-xs md:max-w-sm "
            />
          </div>

          <div class="flex-1 flex justify-center items-center">
            <FormCard
              title="Contact Us"
              fields={[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Enter your name",
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  id: "message",
                  label: "Message",
                  type: "textarea",
                  placeholder: "Enter your message",
                },
              ]}
              
              buttonText="Send"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission for Contact Us
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
