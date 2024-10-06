import React from 'react';
import SideBarAdmin from '../components/SideBar';
import Header from '../components/Header';

const SingleDigitNumbers = () => {
  // Handler function to handle button clicks
  const handleButtonClick = (number) => {
    console.log(`Button ${number} clicked`); // Replace with your logic
  };

  return (
    <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
    <div className="w-[304px] flex-shrink-0">
      <SideBarAdmin />
    </div>
    {/* right sidebar */}
    <div className="flex-grow">
      <Header title={"Single Digit Numbers"} />
      {/* Overview */}
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Single Digit Numbers</h4>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(10)].map((_, index) => (
              <button
                key={index}
                className="digit_num_box w-full h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => handleButtonClick(index)}
              >
                {index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SingleDigitNumbers;
