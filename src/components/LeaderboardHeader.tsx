
import React from 'react';

const LeaderboardHeader: React.FC = () => {
  return (
    <div className="w-full bg-header-gradient mb-10 py-8 px-4 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Score Stars
        </h1>
        <p className="text-white/80 text-lg">
          Track top performers and their achievements
        </p>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
