import React, { useState, useEffect } from 'react';
import LeaderboardEntry from './LeaderboardEntry';
import ParticipantDetail from './ParticipantDetail';
import { Participant } from '@/data/participants';
import { Input } from '@/components/ui/input';
import { Search, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface LeaderboardProps {
  participants: Participant[];
  onUpdateParticipants?: (participants: Participant[]) => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ 
  participants, 
  onUpdateParticipants 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [localParticipants, setLocalParticipants] = useState<Participant[]>(participants);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Keep local state in sync with props
  useEffect(() => {
    setLocalParticipants(participants);
  }, [participants]);

  // Check if admin is logged in
  useEffect(() => {
    const checkAdminStatus = () => {
      const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
      setIsAdmin(loggedIn);
    };
    
    checkAdminStatus();
    window.addEventListener('storage', checkAdminStatus);
    
    return () => window.removeEventListener('storage', checkAdminStatus);
  }, []);

  // Sort participants by points
  const sortedParticipants = [...localParticipants].sort((a, b) => b.points - a.points);
  
  // Filter participants based on search term
  const filteredParticipants = sortedParticipants.filter(
    participant => participant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle deletion of a participant
  const handleDelete = (id: number) => {
    if (!onUpdateParticipants) return;
    
    const participantToDelete = localParticipants.find(p => p.id === id);
    if (!participantToDelete) return;
    
    if (confirm(`Are you sure you want to delete ${participantToDelete.name}?`)) {
      const updatedParticipants = localParticipants.filter(p => p.id !== id);
      onUpdateParticipants(updatedParticipants);
      // Also update local state for immediate UI update
      setLocalParticipants(updatedParticipants);
      toast.success(`${participantToDelete.name} has been removed from the leaderboard`);
    }
  };

  // Handle participant selection
  const handleParticipantClick = (participant: Participant) => {
    setSelectedParticipant(participant);
    setDetailOpen(true);
  };

  // Close detail view
  const handleCloseDetail = () => {
    setDetailOpen(false);
  };

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
              isAdmin={isAdmin}
              onDelete={isAdmin && onUpdateParticipants ? () => handleDelete(participant.id) : undefined}
              onClick={() => handleParticipantClick(participant)}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No participants found</p>
          </div>
        )}
      </div>

      <ParticipantDetail 
        participant={selectedParticipant} 
        isOpen={detailOpen} 
        onClose={handleCloseDetail} 
      />
    </div>
  );
};

export default Leaderboard;
