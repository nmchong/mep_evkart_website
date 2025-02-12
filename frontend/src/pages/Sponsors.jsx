import React from "react";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">Our Sponsors</h1>
      <p className="text-gray-600 mt-4 max-w-2xl text-center">
        We are grateful for the support of our amazing sponsors. Their contribution helps us drive innovation and achieve our mission.
      </p>

      {/* Example: Add sponsor logos */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/assets/sponsor1.png" alt="Sponsor 1" className="w-32 mx-auto" />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/assets/sponsor2.png" alt="Sponsor 2" className="w-32 mx-auto" />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/assets/sponsor3.png" alt="Sponsor 3" className="w-32 mx-auto" />
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/assets/sponsor4.png" alt="Sponsor 4" className="w-32 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
