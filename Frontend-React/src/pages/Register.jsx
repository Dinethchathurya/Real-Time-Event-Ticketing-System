import React from 'react'
import FormCard from '../Components/FormCard';
import SportBg from '../assets/sportbg.png';
import { Link } from "react-router-dom";



function Register() {
    
  return (
    <div
      class="flex min-h-screen justify-center items-center"
      style={{
        backgroundImage: `url(${SportBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row container mx-auto section_px">
        <div class="flex-1 flex flex-col justify-center items-center pb-10">
          <FormCard
            title="Register"
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
                id: "password",
                label: "Password",
                type: "password",
                placeholder: "Enter your password",
              },
            ]}
            buttonText="Register"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission for Registration
            }}
          />
          <p className="text-center mt-4 text-md text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register