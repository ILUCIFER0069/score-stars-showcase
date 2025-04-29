
import React, { useState } from 'react';
import Leaderboard from '@/components/Leaderboard';
import AdminControls from '@/components/AdminControls';
import LeaderboardHeader from '@/components/LeaderboardHeader';
import { participants as initialParticipants } from '@/data/participants';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [participants, setParticipants] = useState(initialParticipants);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-10">
      <Toaster />
      <LeaderboardHeader />
      
      <div className="container px-4 mx-auto">
        <AdminControls 
          participants={participants}
          onUpdateParticipants={setParticipants}
        />
        
        <Leaderboard participants={participants} />
      </div>
    </div>
  );
};

export default Index;
