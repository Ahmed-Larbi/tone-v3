import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ id, title, description, image, features }) => {
  return (
    <div className={`flex flex-col ${id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-semibold mb-4">{`0${id}. ${title}`}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full flex items-center">
          Learn More
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ServiceCard;