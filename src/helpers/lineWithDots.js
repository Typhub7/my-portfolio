import React from 'react';

const LineWithDots = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="w-3 h-3 bg-main1 rounded-full "></div>
      <div className="h-0.5 bg-main1 w-48 md:w-64 lg:w-80"></div>
      <div className="w-3 h-3 bg-main1 rounded-full"></div>
    </div>
  );
};

export default LineWithDots;