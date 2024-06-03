import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              About Us
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="./profile.jpeg"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Techzen Corporation
                </h2>
                <div className="w-12 h-1 bg-[#27D07E] rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Introducing Techzen Corporation Pvt Ltd, where innovation meets expertise in the dynamic realm of technology. Established with a vision to redefine the landscape of technological solutions, Techzen stands as a beacon of cutting-edge advancements and unparalleled service.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                At Techzen, we pride ourselves on our commitment to delivering bespoke solutions tailored to meet the unique needs of our clients. With a team of seasoned professionals driven by passion and fueled by creativity, we navigate the complexities of modern technology with finesse and precision.
                From pioneering software development to revolutionary hardware solutions, Techzen is at the forefront of driving technological evolution across diverse industries. Our dedication to excellence, coupled with a customer-centric approach, ensures that each project undertaken is not just completed but exceeds expectations.
                Innovation, integrity, and ingenuity form the cornerstone of our philosophy at Techzen Corporation Pvt Ltd, as we continue to push boundaries, shape the future, and empower businesses to thrive in the digital age.
              </p>
              <Link
                href="http://localhost:3000/contact"
                className="text-[#27D07E] inline-flex items-center"
              >
                Contact Us
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
