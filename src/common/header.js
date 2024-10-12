import React from 'react';
import MenuLinks from './MenuLinks';
import { LightbulbIcon, BrainIcon, StarIcon, Search } from 'lucide-react';
import Icon from '../pages/images/tone-icon.png'

export default function Header() {
  return (
    <div className='p-4 flex justify-between items-center py-6 px-4 bg-neutral-800'>
      <nav className="flex gap-5 justify-between ml-3.5 max-w-full text-lg font-medium tracking-normal leading-7 text-white w-[887px] max-md:flex-wrap">
        <img
          loading="lazy"
          src={Icon}
          alt=""
          className="shrink-0 max-w-full aspect-[4.55] w-[168px]"
        />
        <MenuLinks />
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-white" />
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
