
import React from 'react';

const LeaderboardHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 mb-10 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          {/* Logo image */}
          <img 
            src="/lovable-uploads/f20d6532-4e32-47e2-b4fc-7a0a5bbd4933.png" 
            alt="Synapse Logo" 
            className="h-32 w-32 mb-4"
          />
          
          {/* Organization name image */}
          <img 
            src="/lovable-uploads/a710f2b7-ef18-4440-874a-54cdca96d510.png" 
            alt="Guru Nanak College" 
            className="h-16 md:h-20 max-w-full"
          />
        </div>
        <p className="text-white/90 text-xl max-w-2xl mx-auto mt-4">
          The ultimate leaderboard tracking top performers and their outstanding achievements
        </p>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
