
import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 mb-10 py-12 px-4 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Trophy className="h-12 w-12 text-yellow-300" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Score Stars
        </h1>
        <p className="text-white/90 text-xl max-w-2xl mx-auto">
          The ultimate leaderboard tracking top performers and their outstanding achievements
        </p>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
