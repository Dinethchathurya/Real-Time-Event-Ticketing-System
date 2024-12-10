import React from 'react'
import EventForm from '../../Components/EventForm'

function AddEvent() {
    return (
      <div>
        <div className="text-xl pb-4 text-center">Add Event</div>
        <div className="">
                
                <EventForm />
        </div>
      </div>
    );
}

export default AddEvent