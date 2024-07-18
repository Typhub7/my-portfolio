import React from 'react';

const LineWithDots = ({ width }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="w-3 h-3 bg-main1 rounded-full "></div>
      <div className={`h-0.5 bg-main1`} style={{ width: `${width}px` }}></div>
      <div className="w-3 h-3 bg-main1 rounded-full"></div>
    </div>
  );
};

export default LineWithDots;