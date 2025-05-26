
export interface DatabaseParticipant {
  id: number;
  name: string;
  points: number;
  created_at: string;
  updated_at: string;
}

export interface DatabasePointHistory {
  id: number;
  participant_id: number;
  date: string;
  points: number;
  reason: string;
  created_at: string;
}

export interface ParticipantWithHistory extends DatabaseParticipant {
  history: DatabasePointHistory[];
}
