import React from 'react';
import { Link } from 'react-router-dom';

export const MenuItem = () => {
  return (
    <div className="flex">
      <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-10">
        <li>
          <Link className=" text-gray-50 hover:text-gray-200" to="/host">
            Host
          </Link>
        </li>
      </ul>
      <div className="ml-8">
        <button className="bg-black px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-yellow-100 rounded-full hover:shadow-lg ">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};
