import React from 'react';

function Portfolio() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-medium text-start mb-6 ">Portfolio</h1>
      <p className="text-start  mb-12 md:w-[28%] font-normal text-3xl poppins-thin">
        Explore our success stories and discover how we’ve helped businesses achieve their digital goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <PortfolioItem title="SEO Excellence" progress={94} />
          <PortfolioItem title="Social Media Mastery" progress={98} />
          <PortfolioItem title="PPC Campaigns That Convert" progress={95} />
        </div>
        <div>
          <PortfolioItem title="Compelling Content Marketing" progress={93} />
          <PortfolioItem title="Email Marketing Success" progress={97} />
        </div>
      </div>
    </div>
  );
}

function PortfolioItem({ title, progress }) {
  return (
    <div className="mb-6 ">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="bg-gray-300 rounded-2xl h-1 md:h-3 w-full">
        <div
          className="bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-2xl h-1 md:h-3"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Portfolio;
