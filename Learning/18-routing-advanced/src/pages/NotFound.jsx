import React from "react";

const NotFound = () => {
  return (
     <div className="fixed inset-0 bg-linear-to-br from-yellow-300 to-yellow-400 flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center text-black">
        
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          className="w-72 md:w-96 mb-6"
        />

        <h1 className="text-6xl md:text-8xl font-black mb-6">
          404 PAGE
        </h1>

        <p className="text-lg md:text-xl mb-3">
          The page you were looking for could not be found.
        </p>

        <p className="text-sm md:text-base mb-8">
          ... Back to previous page
        </p>

        <button
          onClick={() => window.history.back()}
          className="
            bg-white
            text-black
            text-xl md:text-2xl
            font-black
            px-8 py-4
            rounded-full
            shadow-[0_20px_70px_4px_rgba(0,0,0,0.1)]
            hover:-translate-y-3
            hover:shadow-[0_35px_90px_4px_rgba(0,0,0,0.3)]
            transition-all
            duration-300
          "
        >
          ← Back to Previous Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;