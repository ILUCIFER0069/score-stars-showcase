
import React, { useState } from 'react';
import LeaderboardEntry from './LeaderboardEntry';
import { Participant } from '@/data/participants';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface LeaderboardProps {
  participants: Participant[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ participants: initialParticipants }) => {
  const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
  const [searchTerm, setSearchTerm] = useState('');

  // Sort participants by points
  const sortedParticipants = [...participants].sort((a, b) => b.points - a.points);
  
  // Filter participants based on search term
  const filteredParticipants = sortedParticipants.filter(
    participant => participant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search participants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white dark:bg-gray-800"
        />
      </div>

      <div className="space-y-2">
        {filteredParticipants.length > 0 ? (
          filteredParticipants.map((participant, index) => (
            <LeaderboardEntry
              key={participant.id}
              participant={participant}
              position={index + 1}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No participants found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
