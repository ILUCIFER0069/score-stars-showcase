
import React, { useState, useEffect } from 'react';
import Leaderboard from '@/components/Leaderboard';
import AdminControls from '@/components/AdminControls';
import LeaderboardHeader from '@/components/LeaderboardHeader';
import { participants as initialParticipants } from '@/data/participants';
import { Toaster } from 'sonner';

const Index = () => {
  // Load participants from localStorage if available, otherwise use initial data
  const loadParticipants = () => {
    const savedParticipants = localStorage.getItem('participants');
    if (savedParticipants) {
      try {
        return JSON.parse(savedParticipants);
      } catch (e) {
        console.error("Error loading participants from localStorage", e);
        return initialParticipants;
      }
    }
    return initialParticipants;
  };

  const [participants, setParticipants] = useState(loadParticipants);

  // Save to localStorage whenever participants change
  useEffect(() => {
    localStorage.setItem('participants', JSON.stringify(participants));
  }, [participants]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pb-10">
      <Toaster />
      <LeaderboardHeader />
      
      <div className="container px-4 mx-auto">
        <AdminControls 
          participants={participants}
          onUpdateParticipants={setParticipants}
        />
        
        <Leaderboard 
          participants={participants} 
          onUpdateParticipants={setParticipants}
        />
      </div>
      
      <footer className="mt-20 py-8 text-center text-gray-500 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} Score Stars Leaderboard</p>
          <p className="text-sm">Track, compete, and celebrate achievements</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
