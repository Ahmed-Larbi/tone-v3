import React from 'react';

const BookConsultationButton = () => {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center px-4 py-2 border border-white rounded-full text-white hover:text-blue-400 hover:border-blue-400 transition duration-200 ease-in-out"
    >
      Book a consultation
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

export default BookConsultationButton;
