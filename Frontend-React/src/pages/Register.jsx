import React from 'react'
import FormCard from '../Components/FormCard';



function Register() {
    
  return (
    <div class=" bg-gradient-to-b from-[#c1c1d6] to-[#d0d0e2] min-h-screen">
      <div className="flex flex-col md:flex-row container mx-auto section_px">
        <div class="flex-1 flex justify-center items-center mt-10">
        <FormCard
  title="Register"
  fields={[
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
  ]}
  
  buttonText="Register"
  onSubmit={(e) => {
    e.preventDefault();
    // Handle form submission for Registration
  }}
/>
        </div>
      </div>
    </div>
  )
}

export default Register