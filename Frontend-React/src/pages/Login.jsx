import React from "react";
import { Link } from "react-router-dom";
import FormCard from "../Components/FormCard";
import SportBg from "../assets/sportbg.png";

function Login() {
  return (
    <div
      className="flex min-h-screen justify-center items-center"
      style={{
        backgroundImage: `url(${SportBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-center mb-10">
        <FormCard
          className="w-full max-w-md"
          title="Login"
          fields={[
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
          buttonText="Login"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission for Login
          }}
        />
        <p className="text-center mt-4 text-md text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
