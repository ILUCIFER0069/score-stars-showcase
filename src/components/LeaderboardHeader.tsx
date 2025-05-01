
import React from 'react';

const LeaderboardHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 mb-10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo image on left side */}
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/f20d6532-4e32-47e2-b4fc-7a0a5bbd4933.png" 
              alt="Synapse Logo" 
              className="h-24 w-24"
            />
          </div>
          
          {/* Center content with title and organization name image */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Score Stars
            </h1>
            <img 
              src="/lovable-uploads/a710f2b7-ef18-4440-874a-54cdca96d510.png" 
              alt="Guru Nanak College" 
              className="h-16 md:h-20 max-w-full"
            />
          </div>
          
          {/* Empty div for flex balance */}
          <div className="w-24 hidden md:block"></div>
        </div>
        
        <p className="text-white/90 text-xl max-w-2xl mx-auto mt-4 text-center">
          The ultimate leaderboard tracking top performers and their outstanding achievements
        </p>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
