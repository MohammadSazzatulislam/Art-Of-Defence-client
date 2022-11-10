import React from "react";

const BlogPage = () => {
  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
      <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800">
        Join Our Community
      </h1>
      <div className="md:flex items-start justify-between mt-12">
        <div className="md:w-1/2  lg:w-full">
          <div>
            <div className="relative">
              <img
                src="https://cdn.dribbble.com/users/5917891/screenshots/17253667/preview_4x.jpg"
                alt="stairs"
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              Martial Arts Sodcial Media Ads
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              tudents of martial arts can increase muscle mass and help them
              become more toned over all. Punching and kicking requires a lot of
              strength
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
          <div>
            <div className="relative">
              <img
                src="https://karateoc.com/wp-content/uploads/2019/06/RQ41201-700x469.jpg"
                alt="stairs"
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              A Once in a Lifetime in the Martial Arts
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              T’ai Chi Ch’uan, Opening the Energy Gates of Your Body, and Qigong
              for Lifelong Health. Practical, historical, and philosophical
              books on aikido, iaijutsu, judo, and karate. Indie Publisher.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
