
import React from 'react';
import Leaderboard from '@/components/Leaderboard';
import AdminControls from '@/components/AdminControls';
import LeaderboardHeader from '@/components/LeaderboardHeader';
import { useParticipants } from '@/hooks/useParticipants';
import { Toaster } from 'sonner';

const Index = () => {
  const { participants, loading, error, setParticipants } = useParticipants();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
