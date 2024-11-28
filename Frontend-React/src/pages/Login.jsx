import React from "react";
import FormCard from "../Components/FormCard";

function Login() {
  return (
    <div class=" bg-gradient-to-b from-[#c1c1d6] to-[#d0d0e2] min-h-screen">
      <div className="flex flex-col md:flex-row container mx-auto section_px">
        <div class="flex-1 flex justify-center items-center mt-10">
          <FormCard
          className="witems-center"
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
        </div>
      </div>
    </div>
  );
}

export default Login;
