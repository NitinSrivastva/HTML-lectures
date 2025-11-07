import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-8 space-y-8 text-center sm:text-right sm:ml-auto">
            
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>

            <Link
              to="/"
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:bg-orange-800 transition"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="mr-2"
              >
                <path d="M11.571 20.143v-8.572H8L12 7l4 4.571h-3.571v8.572H11.571zm-6.571 1.857h14v2H5v-2z" />
              </svg>
              Download
            </Link>

          </div>
        </div>
      </aside>
    </div>
  );
}

export default Home;
