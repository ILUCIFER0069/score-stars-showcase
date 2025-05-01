
import React from 'react';
import { Trophy, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Participant } from '@/data/participants';

interface LeaderboardEntryProps {
  participant: Participant;
  position: number;
  isAdmin?: boolean;
  onDelete?: () => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({ 
  participant, 
  position,
  isAdmin,
  onDelete
}) => {
  // Determine if the participant is in the top 3
  const isTopThree = position <= 3;
  
  // Styling based on position
  const getRankStyle = () => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-900/5 border-l-4 border-yellow-500";
      case 2:
        return "bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800/30 dark:to-gray-800/10 border-l-4 border-gray-400";
      case 3:
        return "bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-900/5 border-l-4 border-amber-500";
      default:
        return "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700";
    }
  };

  const getTrophyColor = () => {
    switch (position) {
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-gray-400";
      case 3:
        return "text-amber-600";
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
      <div className="flex items-center gap-3">
        <div className="text-right">
          <span className={cn(
            "font-mono font-bold text-lg",
            position === 1 ? "text-purple-600" : "text-gray-700 dark:text-gray-300"
          )}>
            {participant.points.toLocaleString()}
          </span>
          <p className="text-xs text-gray-500">points</p>
        </div>
        
        {isAdmin && onDelete && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/20"
            aria-label="Delete participant"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default LeaderboardEntry;
