
import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 mb-10 py-12 px-4 relative">
      {/* Organization image positioned absolutely at top left */}
      <div className="absolute top-0 left-0">
        <img 
          src="/lovable-uploads/a710f2b7-ef18-4440-874a-54cdca96d510.png" 
          alt="Guru Nanak College" 
          className="h-16 w-auto"
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Trophy logo above the title */}
          <div className="mb-2">
            <Trophy className="h-16 w-16 text-leaderboard-gold" />
          </div>
          
          {/* Center content with title */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Score Stars
            </h1>
          </div>
        </div>
        
        <p className="text-white/90 text-xl max-w-2xl mx-auto mt-4 text-center">
          The ultimate leaderboard tracking top performers and their outstanding achievements
        </p>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
