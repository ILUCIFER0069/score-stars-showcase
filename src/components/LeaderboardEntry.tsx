
import React from 'react';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Participant } from '@/data/participants';

interface LeaderboardEntryProps {
  participant: Participant;
  position: number;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({ participant, position }) => {
  // Determine if the participant is in the top 3
  const isTopThree = position <= 3;
  
  // Styling based on position
  const getRankStyle = () => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-leaderboard-gold/20 to-leaderboard-gold/5 border-l-4 border-leaderboard-gold";
      case 2:
        return "bg-gradient-to-r from-leaderboard-silver/20 to-leaderboard-silver/5 border-l-4 border-leaderboard-silver";
      case 3:
        return "bg-gradient-to-r from-leaderboard-bronze/20 to-leaderboard-bronze/5 border-l-4 border-leaderboard-bronze";
      default:
        return "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700";
    }
  };

  const getTrophyColor = () => {
    switch (position) {
      case 1:
        return "text-leaderboard-gold";
      case 2:
        return "text-leaderboard-silver";
      case 3:
        return "text-leaderboard-bronze";
      default:
        return "hidden";
    }
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-between p-4 mb-2 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-[1.01] hover:shadow-md",
        getRankStyle()
      )}
    >
      <div className="flex items-center space-x-4">
        <div className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full",
          isTopThree ? "bg-gradient-to-br from-white to-gray-200" : "bg-gray-100"
        )}>
          {isTopThree ? (
            <Trophy className={cn("h-5 w-5", getTrophyColor())} />
          ) : (
            <span className="font-bold text-gray-700">{position}</span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">{participant.name}</h3>
        </div>
      </div>
      <div className="text-right">
        <span className={cn(
          "font-mono font-bold text-lg",
          position === 1 ? "text-leaderboard-purple" : "text-gray-700 dark:text-gray-300"
        )}>
          {participant.points.toLocaleString()}
        </span>
        <p className="text-xs text-gray-500">points</p>
      </div>
    </div>
  );
};

export default LeaderboardEntry;
