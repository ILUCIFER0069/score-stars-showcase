
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { ParticipantWithHistory, DatabaseParticipant, DatabasePointHistory } from '@/types/database';

export const useParticipants = () => {
  const [participants, setParticipants] = useState<ParticipantWithHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchParticipants = async () => {
    try {
      setLoading(true);
      console.log('Fetching participants from database...');
      
      // Fetch participants
      const { data: participantsData, error: participantsError } = await supabase
        .from('participants')
        .select('*')
        .order('points', { ascending: false });

      if (participantsError) {
        console.error('Error fetching participants:', participantsError);
        throw participantsError;
      }

      // Fetch point history
      const { data: historyData, error: historyError } = await supabase
        .from('point_history')
        .select('*')
        .order('participant_id, created_at');

      if (historyError) {
        console.error('Error fetching point history:', historyError);
        throw historyError;
      }

      // Combine participants with their history
      const participantsWithHistory: ParticipantWithHistory[] = participantsData.map((participant: DatabaseParticipant) => ({
        ...participant,
        history: historyData.filter((history: DatabasePointHistory) => history.participant_id === participant.id)
      }));

      console.log('Successfully fetched participants:', participantsWithHistory.length);
      setParticipants(participantsWithHistory);
      setError(null);
    } catch (err) {
      console.error('Error in fetchParticipants:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return {
    participants,
    loading,
    error,
    refetch: fetchParticipants,
    setParticipants
  };
};
