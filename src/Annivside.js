import React from "react";

import first from './assets/first.png';
import second from './assets/second.png';
import third from './assets/third.png';

function Annivside() {
  return (
    <div>
      {/* Up Section */}
      <div className="text-center mb-6">
        <p className="font-shrikhand text-2xl text-purple-700">MY MESSAGE FOR YOU</p>
        <p className="text-xs text-gray-600">EVERY YEAR (ANNIVERSARY)</p>
      </div>

      {/* Down Section */}
      <div className="flex justify-between gap-6">
        {/* Left Box */}
        <div className="w-1/3 text-center p-4 bg-purple-50 rounded-md shadow-md mx-auto transform transition duration-300 hover:scale-105">
          <div className="mb-4">
            <img src={first} alt="Left Image" className="w-full h-auto rounded-md" />
          </div>
          <div className="flex items-center justify-start space-x-2 text-left">
            <a
              href="https://yearmark.carrd.co/"
              className="text-purple-500 hover:text-purple-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21px"
                viewBox="0 -960 960 960"
                width="21px"
                fill="#ba6cf9"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
            </a>
            <div className="font-shrikhand text-xs text-gray-800">1st Anniversary</div>
          </div>
        </div>

        {/* Middle Box */}
        <div className="w-1/3 text-center p-4 bg-purple-50 rounded-md shadow-md mx-auto transform transition duration-300 hover:scale-105">
          <div className="mb-4">
            <img src={second} alt="Middle Image" className="w-full h-auto rounded-md" />
          </div>
          <div className="flex items-center justify-start space-x-2 text-left">
            <a
              href=""
              className="text-purple-500 hover:text-purple-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#ba6cf9"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
            </a>
            <div className="font-shrikhand text-xs text-gray-800">2nd Anniversary</div>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-1/3 text-center p-4 bg-purple-50 rounded-md shadow-md mx-auto transform transition duration-300 hover:scale-105">
          <div className="mb-4">
            <img src={third} alt="Right Image" className="w-full h-auto rounded-md" />
          </div>
          <div className="flex items-center justify-start space-x-2 text-left">
            <a
              href=""
              className="text-purple-500 hover:text-purple-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21px"
                viewBox="0 -960 960 960"
                width="21px"
                fill="#ba6cf9"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
            </a>
            <div className="font-shrikhand text-xs text-gray-800">3rd Anniversary</div>
          </div>
        </div>
      </div>

      {/* Anniversary Date */}
      <div className="mt-6 text-center">
        <p className="text-mid font-bold text-gray-700">AUGUST 27, 2023</p>
        <p className="text-sm text-gray-500">A year of love and memories</p>
      </div>
    </div>
  );
}

export default Annivside;