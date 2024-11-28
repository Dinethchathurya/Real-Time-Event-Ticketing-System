import React from 'react';

function FormCard({ title, fields, buttonText, onSubmit }) {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-sm w-full text-white max-md:mb-10">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">{title}</h2>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div className="mb-4" key={index}>
            <label htmlFor={field.id} className="block mb-1">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                rows="4"
                placeholder={field.placeholder}
                className="textarea textarea-bordered w-full bg-gray-200 text-black"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="input input-bordered w-full bg-gray-200 text-black"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default FormCard;
