import React from 'react';

const SponsorPage = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Title Sponsor</h1>

      {/* Title Sponsor Card */}
      <div className="relative mb-6 max-w-md mx-auto transform hover:scale-105 transition-transform">
        {/* Placeholder for Title Sponsor Logo */}
        <a href="https://www.titlesponsorwebsite.com" target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-300 h-80 w-80 mx-auto mb-4 rounded-full relative">
            <img src="logo1.png" className="rounded-full w-full h-full object-cover" alt="" />
          </div>
        </a>

        {/* Placeholder for Title Sponsor Name */}
        <h2 className="text-xl font-bold mb-2 opacity-100 text-white">Title Sponsor Name</h2>

        {/* Placeholder for Title Sponsor Position */}
        <p className="opacity-100 text-white">Position / Company Name</p>
      </div>

      {/* Other Sponsors */}
      <h2 className="text-2xl font-bold mb-6 text-white">Other Sponsors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sponsor Card 1 */}
        <div className="relative mb-6 transform hover:scale-105 transition-transform">
          {/* Placeholder for Sponsor Logo */}
          <a href="https://www.sponsor1website.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 h-80 w-80 mx-auto mb-4 rounded-full relative">
              <img src="logo2.png" className="rounded-full w-full h-full object-cover" alt="" />
            </div>
          </a>

          {/* Sponsor Name */}
          <h2 className="text-xl font-bold mb-2 opacity-100 text-white">Sponsor Name</h2>

          {/* Sponsor Position */}
          <p className="opacity-100 text-white">Position / Company Name</p>
        </div>

        {/* Sponsor Card 2 */}
        <div className="relative mb-6 transform hover:scale-105 transition-transform">
          {/* Placeholder for Sponsor Logo */}
          <a href="https://www.sponsor2website.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 h-80 w-80 mx-auto mb-4 rounded-full relative">
              <img src="logo3.png" className="rounded-full w-full h-full object-cover" alt="" />
            </div>
          </a>

          {/* Sponsor Name */}
          <h2 className="text-xl font-bold mb-2 opacity-100 text-white">Sponsor Name</h2>

          {/* Sponsor Position */}
          <p className="opacity-100 text-white">Position / Company Name</p>
        </div>

        {/* Sponsor Card 3 */}
        <div className="relative mb-6 transform hover:scale-105 transition-transform">
          {/* Placeholder for Sponsor Logo */}
          <a href="https://www.sponsor3website.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 h-80 w-80 mx-auto mb-4 rounded-full relative">
              <img src="logo4.png" className="rounded-full w-full h-full object-cover" alt="" />
            </div>
          </a>

          {/* Sponsor Name */}
          <h2 className="text-xl font-bold mb-2 opacity-100 text-white">Sponsor Name</h2>

          {/* Sponsor Position */}
          <p className="opacity-100 text-white">Position / Company Name</p>
        </div>
      </div>
    </div>
  );
}

export default SponsorPage;
